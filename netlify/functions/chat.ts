
import type { Handler, HandlerEvent } from "@netlify/functions";
import { readFileSync } from "fs";
import { join } from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

interface GeminiRequest {
  contents: Array<{
    parts: Array<{ text: string }>;
  }>;
}

interface GeminiResponse {
  candidates?: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
  error?: {
    message: string;
  };
}

export const handler: Handler = async (event: HandlerEvent) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle OPTIONS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse request body
    const { question } = JSON.parse(event.body || "{}");

    if (!question) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Question is required" }),
      };
    }

    if (!GEMINI_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "GEMINI_API_KEY not configured" }),
      };
    }

    // Load persona.txt from the same directory
    const personaPath = join(__dirname, "persona.txt");
    const personaContent = readFileSync(personaPath, "utf-8");

    // Create prompt
    const prompt = `${personaContent}

User question: ${question}

Please provide a helpful, professional response based on Leonardo's background and expertise. Keep responses concise and relevant.`;

    // Call Gemini API
    const geminiRequest: GeminiRequest = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiRequest),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: `Gemini API error: ${errorData.error?.message || response.statusText}`,
        }),
      };
    }

    const data: GeminiResponse = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "No response from Gemini API" }),
      };
    }

    let answer = data.candidates[0].content.parts[0].text;

    // Filter out thinking/reasoning sections
    answer = answer.replace(/<think>[\s\S]*?<\/think>/gi, "");
    answer = answer.replace(/\*\*Thinking:?\*\*[\s\S]*?(?=\n\n|\*\*[A-Z]|$)/gi, "");
    answer = answer.replace(/^Thinking:?[\s\S]*?(?=\n\n|[A-Z][a-z])/gim, "");
    answer = answer.trim();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ answer }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error",
      }),
    };
  }
};
