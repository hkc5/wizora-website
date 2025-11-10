import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import {
  Sparkle,
  ChartLine,
  ChatCircleDots,
  Planet,
} from "phosphor-react";

const features = [
  {
    icon: <Planet size={32} weight="light" />,
    title: "Personalized Birth Charts",
    description:
      "Get detailed insights into your cosmic blueprint with AI-powered analysis of your natal chart.",
  },
  {
    icon: <ChatCircleDots size={32} weight="light" />,
    title: "AI Astrology Companion",
    description:
      "Chat with your personal AI guide for daily horoscopes, transit interpretations, and cosmic wisdom.",
  },
  {
    icon: <ChartLine size={32} weight="light" />,
    title: "Growth Tracking",
    description:
      "Monitor your personal development journey with insights tied to planetary movements.",
  },
  {
    icon: <Sparkle size={32} weight="light" />,
    title: "Daily Reflections",
    description:
      "Receive personalized prompts and cosmic guidance to deepen your self-awareness practice.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="pt-12 pb-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Powerful Features
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Everything you need for cosmic self-discovery
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <GlassCard>
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-light mb-3">{feature.title}</h3>
                <p className="opacity-70">{feature.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
