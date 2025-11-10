import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Check } from "phosphor-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring astrology",
    features: [
      "Basic birth chart",
      "Daily horoscope",
      "Limited AI chat (10 messages/month)",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious seekers",
    features: [
      "Full birth chart with transits",
      "Unlimited AI chat",
      "Personalized insights",
      "Advanced predictions",
      "Priority support",
      "Export reports",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For professionals and teams",
    features: [
      "Everything in Pro",
      "Team accounts",
      "API access",
      "White-label options",
      "Dedicated support",
      "Custom integrations",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Start free and upgrade as you grow
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <GlassCard
                className={`relative ${
                  plan.recommended ? "border-primary border-2" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-sm">
                    Recommended
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                  <div className="text-4xl font-light mb-2">
                    {plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-lg opacity-70">/mo</span>
                    )}
                  </div>
                  <p className="opacity-70">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        size={20}
                        weight="bold"
                        className="text-primary mr-2 mt-1 flex-shrink-0"
                      />
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.recommended
                      ? "neumorphic-button bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
