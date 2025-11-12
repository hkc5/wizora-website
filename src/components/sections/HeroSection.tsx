import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "@/components/ErrorBoundary";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

export const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-32 px-6 relative">
      {/* 3D Spline Orb Background - Fixed position to prevent scroll repaints */}
      <ErrorBoundary>
        <div
          className="fixed inset-0 -z-10 opacity-60 pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            willChange: "auto",
            contain: "layout style paint",
          }}
        >
          <Spline scene="https://prod.spline.design/jB5IIJTeFiTA2DJ1/scene.splinecode" />
        </div>
      </ErrorBoundary>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
            <span className="text-sm">
              New: AI-Powered Chart Interpretations
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Discover Your
            <br />
            <span className="glow-effect inline-block">Cosmic Path</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Chat with your AI astrology companion, explore birth charts, and
            unlock deeper self-awareness through cosmic wisdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onScrollToSection("pricing")}
              className="neumorphic-button bg-primary hover:bg-primary/90 text-lg px-8"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onScrollToSection("how-it-works")}
              className="bg-transparent border-primary/50 hover:bg-primary/10 text-lg px-8"
            >
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
