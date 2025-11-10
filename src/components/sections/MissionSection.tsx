import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";

export const MissionSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <GlassCard className="text-center p-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Our Mission
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              We believe that everyone deserves access to the wisdom of the
              cosmos. Wizora combines ancient astrological knowledge with
              cutting-edge AI to make self-discovery accessible, accurate, and
              actionable. Our mission is to help you understand yourself
              better, make aligned decisions, and live a more purposeful life
              guided by the stars.
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};
