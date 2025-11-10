import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Mail, Phone, Linkedin } from "lucide-react";

export default function Home() {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 80; // Approximate nav + letterbox height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const carouselImages = [
    { src: "/onsetRef2-Copy.jpg", caption: "HDRI Capture" },
    { src: "/onsetRef1-Copy.jpg", caption: "Chroma Reference" },
    { src: "/onsetRefImg3-Copy.PNG", caption: "On-Set Workflow" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const target = document.getElementById('contact');
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen film-grain">
      {/* Letterbox bars */}
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />

      {/* Navigation */}
      <nav className="fixed top-[8vh] left-0 right-0 z-40 backdrop-blur-md bg-background/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base md:text-xl font-bold tracking-tight">LEONARDO PAOLINI VFX</h2>
            <div className="flex gap-3 md:gap-6">
              <a 
                href="#work" 
                onClick={(e) => handleSmoothScroll(e, 'work')}
                className="text-xs md:text-sm hover:text-primary transition-colors duration-280 hover:underline underline-offset-4"
              >
                Work
              </a>
              <a 
                href="#ai" 
                onClick={(e) => handleSmoothScroll(e, 'ai')}
                className="text-xs md:text-sm hover:text-primary transition-colors duration-280 hover:underline underline-offset-4"
              >
                AI
              </a>
              <a 
                href="#capabilities" 
                onClick={(e) => handleSmoothScroll(e, 'capabilities')}
                className="text-xs md:text-sm hover:text-primary transition-colors duration-280 hover:underline underline-offset-4"
              >
                Skills
              </a>
              <a 
                href="#tools" 
                onClick={(e) => handleSmoothScroll(e, 'tools')}
                className="text-xs md:text-sm hover:text-primary transition-colors duration-280 hover:underline underline-offset-4"
              >
                Tools
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-xs md:text-sm hover:text-primary transition-colors duration-280 hover:underline underline-offset-4"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col pt-[8vh] pb-[8vh]"
      >
        {/* Top Black Letterbox Band with Title */}
        <div className="bg-black pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-10 lg:pb-12 px-4 md:px-6 z-10">
          <div className="container max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-1 md:mb-2 fade-up leading-tight">
              LEONARDO PAOLINI
            </h1>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/80 font-light tracking-wide fade-up stagger-1">
              2D & VFX Supervisor · Senior and TD Compositor · AI Creative Technologist
            </p>
          </div>
        </div>

        {/* Center Pink Band with Content */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-6" style={{ background: '#FF4D9E' }}>
          <div className="container max-w-5xl mx-auto text-center z-10 py-8 md:py-16 lg:py-20 fade-up">

          {/* Profile Picture */}
          <div className="flex justify-center mb-6 md:mb-10 lg:mb-12 fade-up stagger-1">
            <div className="relative">
              <img 
                src="/profilePic.png" 
                alt="Leonardo Paolini"
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full object-cover border-3 md:border-4 border-black shadow-2xl"
              />
            </div>
          </div>

          {/* Vimeo Video Embed */}
          <div className="relative w-full max-w-4xl mx-auto mb-6 md:mb-8 border-2 md:border-4 border-black rounded-md md:rounded-lg overflow-hidden shadow-2xl fade-up stagger-1">
            <div className="relative pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/824210947?title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Leonardo Paolini Showreel"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up stagger-2">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold transition-all duration-280"
              onClick={() => window.open('https://vimeo.com/824210947', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open on Vimeo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-280"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
          </div>
        </div>

        {/* Bottom Black Letterbox Band */}
        <div className="bg-black py-4 md:py-6 lg:py-8" />
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white fade-up">
            SELECTED WORK
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Doctor Strange */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/drstrange-Copy.jpg" 
                  alt="Doctor Strange"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Doctor Strange</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">Framestore · Senior Compositor</p>
                <p className="text-sm text-muted-foreground">Crafting mystical dimensions and reality-bending visual effects.</p>
              </div>
            </Card>

            {/* Guardians of the Galaxy Vol.2 */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up stagger-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/GuardianOfTheGalaxy2-Copy.jpg" 
                  alt="Guardians of the Galaxy Vol.2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Guardians of the Galaxy Vol.2</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">Framestore · Senior Compositor</p>
                <p className="text-sm text-muted-foreground">Delivering cosmic spectacle and character-driven VFX sequences.</p>
              </div>
            </Card>

            {/* The Martian */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up stagger-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/theMartian-Copy.jpg" 
                  alt="The Martian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">The Martian</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">Framestore · Senior Compositor</p>
                <p className="text-sm text-muted-foreground">Creating photorealistic Martian environments and survival drama.</p>
              </div>
            </Card>

            {/* Paddington 2 */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up stagger-3">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/PAddington2-Copy.jpg" 
                  alt="Paddington 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Paddington 2</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">Framestore · Senior Compositor</p>
                <p className="text-sm text-muted-foreground">Seamless character integration and heartwarming visual storytelling.</p>
              </div>
            </Card>

            {/* Nine Bodies in a Mexican Morgue */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up stagger-4">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/NineBodiesInAMexicanMorgue-Copy.jpg" 
                  alt="Nine Bodies in a Mexican Morgue"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Nine Bodies in a Mexican Morgue</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">Flaming Frames · VFX Supervisor</p>
                <p className="text-sm text-muted-foreground">Full Team workflow and VFX supervision for episodic production.</p>
              </div>
            </Card>

            {/* The Hitman's Wife's Bodyguard */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up stagger-5">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/hitmanbodyguard-Copy.jpg" 
                  alt="The Hitman's Wife's Bodyguard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">The Hitman's Wife's Bodyguard</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">WWFX UK · 2D Supervisor</p>
                <p className="text-sm text-muted-foreground">High-octane action sequences and explosive compositing work.</p>
              </div>
            </Card>

            {/* The Offering */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/theoffering-Copy.jpg" 
                  alt="The Offering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">The Offering</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">WWFX UK · 2D Supervisor</p>
                <p className="text-sm text-muted-foreground">Atmospheric horror VFX CG creature, with meticulous attention to detail.</p>
              </div>
            </Card>

            {/* Isle of Dogs */}
            <Card className="group overflow-hidden border-white/8 bg-card hover:scale-[1.02] transition-transform duration-280 pink-glow-hover fade-up stagger-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/isleofdogs-Copy.jpg" 
                  alt="Isle of Dogs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Isle of Dogs</h3>
                <p className="text-sm text-primary uppercase tracking-wide mb-2">Client Side · Senior Compositor</p>
                <p className="text-sm text-muted-foreground">Honored to be part of this artistically immense Wes Anderson project - Bringing to light the master vision.</p>
              </div>
            </Card>
          </div>

          {/* Bio Snippet */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed fade-up mb-8">
              Graduated in Computer Science (Camerino). Active in the film industry since 2013, contributing to major studios and productions worldwide. Combining technical supervision, AI-assisted workflows and storytelling precision.
            </p>
            
            {/* IMDb Link Button */}
            <a 
              href="https://www.imdb.com/name/nm5886055/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-280 font-semibold tracking-wide fade-up stagger-1"
            >
              FULL MOVIE LIST
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* AI for VFX Section */}
      <section id="ai" className="py-16 md:py-24 lg:py-32 px-4 md:px-6" style={{ backgroundColor: '#0E0F13' }}>
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white fade-up">
            AI Workflows for VFX and final image delivery
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto fade-up stagger-1">
            Developing proprietary pipelines merging AI and real-time rendering — from deep-fake face replacement and lighting previz to workflow automation.
          </p>

          {/* The Setup Card */}
          <Card className="border-white/8 bg-card/50 p-8 mb-12 fade-up stagger-2">
            <h3 className="text-2xl font-bold mb-6 text-primary">The Setup</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>RTX workstation (5090-class) optimized for AI workloads</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Node-based ComfyUI integrated with Flux, WAN, AnimateDiff, Fooocus, custom GitHub frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>LoRa ad-Hoc dataset trainings for various Generative Models</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Full OCIO/ACES compliance</span>
              </li>
            </ul>
          </Card>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-3">
              <h4 className="text-xl font-semibold mb-3 text-white">AI Deep-Fake Face Replacement</h4>
              <p className="text-muted-foreground">High-fidelity facial reconstruction and performance transfer for seamless character work.</p>
            </Card>
            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-4">
              <h4 className="text-xl font-semibold mb-3 text-white">AI Look-Dev / Lighting Previz</h4>
              <p className="text-muted-foreground">Rapid iteration on lighting setups using AI-assisted previsualization workflows.</p>
            </Card>
            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-5">
              <h4 className="text-xl font-semibold mb-3 text-white">AI & Pipeline R&D</h4>
              <p className="text-muted-foreground">Building faster, cleaner, and smarter workflows.</p>
            </Card>
            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up">
              <h4 className="text-xl font-semibold mb-3 text-white">RnD / Dataset / LoRa Training</h4>
              <p className="text-muted-foreground">Custom AI models trained for texture fidelity, relighting accuracy, and high-end VFX pipelines.</p>
            </Card>
          </div>

          {/* Closing Quote */}
          <blockquote className="text-center text-xl md:text-2xl font-light text-white/90 italic max-w-3xl mx-auto fade-up">
            "These tools are handcrafted for production, built for real work — not demos."
          </blockquote>
        </div>
      </section>

      {/* On-Set Supervision Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white fade-up">
            On-Set Supervision & Data Capture
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto fade-up stagger-1">
            Oversight of technical capture for VFX: lidar scanning, HDRI 360-cam imaging, chroma ball references, and face scanning for CG integration.
          </p>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto fade-up stagger-2">
            <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white/8">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeCarouselIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-semibold">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-280 ${
                    index === activeCarouselIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 md:py-24 lg:py-32 px-4 md:px-6" style={{ backgroundColor: '#0E0F13' }}>
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white fade-up">
            CAPABILITIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up">
              <h3 className="text-xl font-semibold mb-3 text-white">2D & VFX Supervision</h3>
              <p className="text-muted-foreground">Leadership, QC, creative direction across complex productions and projects.</p>
            </Card>

            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-1">
              <h3 className="text-xl font-semibold mb-3 text-white">Compositing / TD</h3>
              <p className="text-muted-foreground">Nuke, pipeline setup, automation tools and scripting for efficient shot delivery.</p>
            </Card>

            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-2">
              <h3 className="text-xl font-semibold mb-3 text-white">Unreal Engine for pre and post production</h3>
              <p className="text-muted-foreground">Real-time lighting, previs, and virtual production workflows.</p>
            </Card>

            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-3">
              <h3 className="text-xl font-semibold mb-3 text-white">AI Workflow Design</h3>
              <p className="text-muted-foreground">ComfyUI pipelines, deep-fake, RnD and automation for production efficiency.</p>
            </Card>

            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-4">
              <h3 className="text-xl font-semibold mb-3 text-white">On-Set Data Capture</h3>
              <p className="text-muted-foreground">HDRI, lidar, photogrammetry for accurate CG integration, 360 HDRI</p>
            </Card>

            <Card className="border-white/8 bg-card p-8 pink-glow-hover transition-all duration-280 fade-up stagger-5">
              <h3 className="text-xl font-semibold mb-3 text-white">Delivery & Vendor Management</h3>
              <p className="text-muted-foreground">Deparments and team coordination, reviews, notes, and final delivery oversight.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="tools" className="py-16 md:py-24 lg:py-32 px-4 md:px-6" style={{ backgroundColor: '#0E0F13' }}>
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white fade-up">
            SKILLS & TOOLS
          </h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto fade-up stagger-1">
            Industry-standard software and cutting-edge tools powering professional VFX workflows
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Nuke */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up">
              <img src="/nuke-logo.png" alt="Nuke" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">Nuke</span>
            </div>

            {/* Unreal Engine */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-1">
              <img src="/unreal-logo.png" alt="Unreal Engine" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">Unreal Engine</span>
            </div>

            {/* Maya */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-2">
              <img src="/maya-logo.png" alt="Maya" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">Maya</span>
            </div>

            {/* Photoshop */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-3">
              <img src="/photoshop-logo.png" alt="Photoshop" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">Photoshop</span>
            </div>

            {/* After Effects */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-4">
              <img src="/aftereffects-logo.png" alt="After Effects" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">After Effects</span>
            </div>

            {/* Premiere Pro */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-5">
              <img src="/premiere-logo.jpg" alt="Premiere Pro" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">Premiere Pro</span>
            </div>

            {/* DaVinci Resolve */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up">
              <img src="/davinci-logo.png" alt="DaVinci Resolve" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">DaVinci Resolve</span>
            </div>

            {/* ShotGrid */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-1">
              <img src="/shotgrid-logo.png" alt="ShotGrid" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">ShotGrid</span>
            </div>

            {/* ComfyUI */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-2">
              <img src="/comfyui-logo.png" alt="ComfyUI" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">ComfyUI</span>
            </div>

            {/* Python */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-card border border-white/8 rounded-lg hover:border-primary/40 transition-all duration-280 hover:scale-105 fade-up stagger-3">
              <img src="/python-logo.png" alt="Python" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4" />
              <span className="text-sm md:text-base font-medium text-white">Python</span>
            </div>
          </div>
        </div>
      </section>

      {/* UK LTD Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="container max-w-4xl mx-auto text-center">
          <Card className="border-white/8 bg-card p-12 fade-up">
            <h2 className="text-3xl font-bold mb-6 text-white">UK Limited Company</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Operating through a UK-registered company since 2022. Enables direct invoicing, contracting, and collaboration within the UK and EU film industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Registered 2022</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Companies House Active</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">UK Contract-Ready</span>
            </div>
            <Button 
              variant="outline" 
              className="border-primary/60 text-primary hover:bg-primary/10 hover:text-primary"
              onClick={scrollToContact}
            >
              Request Company Details
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 md:px-6" style={{ backgroundColor: '#0E0F13' }}>
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white fade-up">
            GET IN TOUCH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 fade-up stagger-1">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </h3>
                <a 
                  href="mailto:leonardovfx@gmail.com" 
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  leonardovfx@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </h3>
                <div className="space-y-2">
                  <a 
                    href="tel:+447748095067" 
                    className="block text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    +44 7748 095067
                  </a>
                  <a 
                    href="tel:+34603513865" 
                    className="block text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 603 513 865
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="space-y-6 fade-up stagger-2">
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/leonardo-paolini-vfx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://vimeo.com/leonardopaolini" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                  </svg>
                  <span>Vimeo</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.imdb.com/name/nm5886055/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.395 0H1.605C.72 0 0 .72 0 1.605v20.79C0 23.28.72 24 1.605 24h20.79C23.28 24 24 23.28 24 22.395V1.605C24 .72 23.28 0 22.395 0zM4.5 5.4h1.8v13.2H4.5V5.4zm4.5 0h1.8l1.35 4.95L13.5 5.4h1.8v13.2h-1.8v-9l-1.35 4.95h-1.2L9.6 9.6v9H7.8V5.4h1.2zm7.2 0h3.6c.99 0 1.8.81 1.8 1.8v9.6c0 .99-.81 1.8-1.8 1.8h-3.6V5.4zm1.8 1.8v9.6h1.8V7.2h-1.8z"/>
                  </svg>
                  <span>IMDb</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-center text-muted-foreground border-t border-white/8">
        <p className="text-sm">
          © LEONARDOVFX — Registered in England and Wales — Eligible to Work in the UK.
        </p>
      </footer>
    </div>
  );
}
