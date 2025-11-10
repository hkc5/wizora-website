import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Sparkle, Users, Heart, Target } from "phosphor-react";

const About = () => {
  return (
    <div className="min-h-screen stars-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              About <span className="glow-effect inline-block">Wizora</span>
            </h1>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              We're on a mission to make cosmic wisdom accessible to everyone through the power of AI.
            </p>
          </motion.div>

          <ScrollReveal>
            <div className="space-y-12 mb-20">
              <div>
                <h2 className="text-3xl font-light mb-6">Our Story</h2>
                <p className="text-lg opacity-80 leading-relaxed mb-4">
                  Wizora was born from a simple belief: that ancient wisdom and modern technology could work together to help people understand themselves better. Our founders, a team of technologists and astrology practitioners, saw how difficult it was to get personalized, accurate astrological guidance without spending hundreds of dollars on private consultations.
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  We set out to democratize access to cosmic insights by building an AI that could understand the nuances of astrology while making it conversational and accessible to everyone, regardless of their experience level.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl font-light mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Heart size={32} weight="light" />,
                    title: "Authenticity",
                    description: "We stay true to astrological tradition while embracing innovation.",
                  },
                  {
                    icon: <Users size={32} weight="light" />,
                    title: "Accessibility",
                    description: "Cosmic wisdom should be available to everyone, not just a privileged few.",
                  },
                  {
                    icon: <Sparkle size={32} weight="light" />,
                    title: "Accuracy",
                    description: "We're committed to providing the most precise and personalized insights possible.",
                  },
                  {
                    icon: <Target size={32} weight="light" />,
                    title: "Empowerment",
                    description: "We help you make informed decisions aligned with your cosmic blueprint.",
                  },
                ].map((value, index) => (
                  <GlassCard key={value.title}>
                    <div className="text-primary mb-4">{value.icon}</div>
                    <h3 className="text-xl font-light mb-2">{value.title}</h3>
                    <p className="opacity-70">{value.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard className="text-center p-12">
              <h2 className="text-3xl font-light mb-6">Join Our Journey</h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                We're building more than an app—we're building a community of seekers, dreamers, and cosmic explorers. Whether you're new to astrology or a seasoned practitioner, Wizora is your companion on the path to deeper self-understanding.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/#pricing"
                  className="inline-block neumorphic-button bg-primary hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Start Your Journey
                </a>
              </motion.div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
