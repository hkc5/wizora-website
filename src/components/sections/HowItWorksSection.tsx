import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import birthChart from "@/assets/birth-chart.png";
import aiCompanion from "@/assets/ai-companion.png";
import reflectGrow from "@/assets/reflect-grow.png";

const steps = [
  {
    title: "Set Your Birth Chart",
    description:
      "Input your birth details to generate your personalized natal chart with AI-powered insights.",
    image: birthChart,
  },
  {
    title: "Chat with Your AI Companion",
    description:
      "Ask questions, get daily horoscopes, and receive guidance tailored to your cosmic blueprint.",
    image: aiCompanion,
  },
  {
    title: "Reflect and Grow",
    description:
      "Track your journey with personalized reflections and watch your self-awareness deepen.",
    image: reflectGrow,
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="pt-12 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              How It Works
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Three simple steps to unlock your cosmic potential
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <GlassCard className="h-full">
                <div className="aspect-square mb-6 rounded-xl overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                <p className="opacity-70">{step.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
