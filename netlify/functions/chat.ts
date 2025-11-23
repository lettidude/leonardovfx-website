import { Handler } from "@netlify/functions";
import { readFileSync } from "fs";
import { join } from "path";

const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS" ) {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    // Parse request body
    const { messages } = JSON.parse(event.body || "{}");

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Messages are required" }),
      };
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const question = lastMessage.content;

    // Load persona
    const personaPath = join(__dirname, "persona.txt");
    const persona = readFileSync(personaPath, "utf-8");

    // Call Gemini API
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "GEMINI_API_KEY not configured" }),
      };
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${persona}\n\nUser question: ${question}\n\nRespond naturally as Leonardo, without showing your internal reasoning or thought process.`,
                },
              ],
            },
          ],
        } ),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Failed to get AI response", details: errorText }),
      };
    }

    const data = await response.json();
    let aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    // Remove thinking tags if present
    aiResponse = aiResponse.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: aiResponse }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error", details: String(error) }),
    };
  }
};

export { handler };
