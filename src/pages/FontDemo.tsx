import { useState } from "react";
import { Button } from "@/components/ui/button";

const FontDemo = () => {
  const [selectedFont, setSelectedFont] = useState<string>("inter");

  const fonts = [
    {
      id: "inter",
      name: "Inter",
      googleName: "Inter",
      weights: "300;400;500;600;700",
      description: "Current font - Clean, modern geometric sans-serif",
      importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    {
      id: "poppins",
      name: "Poppins",
      googleName: "Poppins",
      weights: "300;400;500;600;700",
      description: "Modern, rounded, friendly - cosmic vibes",
      importUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
    },
    {
      id: "sora",
      name: "Sora",
      googleName: "Sora",
      weights: "300;400;500;600;700",
      description: "Clean, minimalist, elegant - premium feel",
      importUrl: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap",
    },
    {
      id: "outfit",
      name: "Outfit",
      googleName: "Outfit",
      weights: "300;400;500;600;700",
      description: "Geometric, contemporary, bold - great for headers",
      importUrl: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap",
    },
    {
      id: "dm-sans",
      name: "DM Sans",
      googleName: "DM Sans",
      weights: "300;400;500;600;700",
      description: "Friendly, approachable, professional",
      importUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
    },
    {
      id: "raleway",
      name: "Raleway",
      googleName: "Raleway",
      weights: "300;400;500;600;700",
      description: "Elegant, thin weights, sophisticated",
      importUrl: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap",
    },
    {
      id: "space-mono",
      name: "Space Mono",
      googleName: "Space Mono",
      weights: "400;700",
      description: "Monospace with personality - tech + cosmic aesthetic",
      importUrl: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
    },
  ];

  const currentFont = fonts.find((f) => f.id === selectedFont);

  return (
    <div className="min-h-screen bg-background stars-bg py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-4 text-center">
          Font Comparison
        </h1>
        <p className="text-xl text-center text-foreground/60 mb-12">
          Select a font to preview it across your Wizora website
        </p>

        {/* Font Selector */}
        <div className="bg-card rounded-xl p-8 mb-12 border border-border/30">
          <h2 className="text-lg font-semibold mb-6">Available Fonts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fonts.map((font) => (
              <button
                key={font.id}
                onClick={() => setSelectedFont(font.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedFont === font.id
                    ? "border-primary bg-primary/20"
                    : "border-border/30 hover:border-border/60 bg-background"
                }`}
              >
                <div className="font-semibold">{font.name}</div>
                <div className="text-sm text-foreground/60">{font.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-12">
          {currentFont && (
            <>
              {/* Load the selected font */}
              <link rel="stylesheet" href={currentFont.importUrl} />

              <div
                style={{
                  fontFamily: `'${currentFont.googleName}', sans-serif`,
                }}
              >
                {/* Hero Title */}
                <div className="bg-card rounded-xl p-12 border border-border/30 mb-12">
                  <h2 className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
                    Hero Section
                  </h2>

                  <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
                    Discover Your
                    <br />
                    <span className="text-primary font-semibold">Cosmic Path</span>
                  </h1>

                  <p className="text-xl md:text-2xl max-w-2xl text-foreground/80 mb-8">
                    Chat with your AI astrology companion, explore birth charts, and unlock deeper
                    self-awareness through cosmic wisdom.
                  </p>

                  <div className="flex gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-lg px-8">
                      Get Started Free
                    </Button>
                    <Button variant="outline" className="text-lg px-8">
                      See How It Works
                    </Button>
                  </div>
                </div>

                {/* Body Text Samples */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-card rounded-xl p-8 border border-border/30">
                    <h3 className="text-2xl font-semibold mb-4">Features Section</h3>
                    <p className="text-lg mb-6 text-foreground/80">
                      Our AI astrology companion uses advanced algorithms to provide personalized insights
                      based on your birth chart. Explore the cosmos through a modern, intuitive interface
                      designed for self-discovery.
                    </p>
                    <p className="text-sm text-foreground/60">
                      Smaller text for secondary information and descriptions throughout your site.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-8 border border-border/30">
                    <h3 className="text-2xl font-semibold mb-4">Pricing Section</h3>
                    <p className="text-lg mb-6 text-foreground/80">
                      Choose a plan that works for you. From free exploration to premium cosmic insights,
                      Wizora adapts to your journey of self-awareness.
                    </p>
                    <ul className="text-sm text-foreground/60 space-y-2">
                      <li>✓ AI Chat Companion</li>
                      <li>✓ Birth Chart Analysis</li>
                      <li>✓ Daily Cosmic Insights</li>
                    </ul>
                  </div>
                </div>

                {/* Heading Hierarchy */}
                <div className="bg-card rounded-xl p-12 border border-border/30">
                  <h2 className="text-sm font-semibold text-primary mb-8 uppercase tracking-wider">
                    Heading Hierarchy
                  </h2>

                  <h1 className="text-5xl font-light mb-6">Heading 1 (H1)</h1>
                  <h2 className="text-4xl font-light mb-6">Heading 2 (H2)</h2>
                  <h3 className="text-3xl font-light mb-6">Heading 3 (H3)</h3>
                  <h4 className="text-2xl font-light mb-6">Heading 4 (H4)</h4>
                  <p className="text-lg mb-4">Body Text (Large)</p>
                  <p className="text-base mb-4">Body Text (Regular)</p>
                  <p className="text-sm">Body Text (Small)</p>
                </div>
              </div>

              {/* Font Info */}
              <div className="bg-card rounded-xl p-8 border border-border/30">
                <h3 className="text-lg font-semibold mb-4">Font Details</h3>
                <pre className="bg-background rounded p-4 overflow-x-auto text-sm text-foreground/80">
                  {`Add this to index.html <head>:\n\n<link href="${currentFont.importUrl}" rel="stylesheet">\n\nUpdate src/index.css:\n\nbody {\n  font-family: '${currentFont.googleName}', sans-serif;\n}`}
                </pre>
              </div>
            </>
          )}
        </div>

        {/* Navigation Back */}
        <div className="mt-12 text-center">
          <a href="/" className="text-primary hover:text-primary/80 underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default FontDemo;
