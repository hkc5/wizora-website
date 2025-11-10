import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen stars-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Get in <span className="glow-effect inline-block">Touch</span>
            </h1>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <GlassCard className="h-full">
                <h2 className="text-2xl font-light mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 opacity-70">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 opacity-70">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 opacity-70">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full neumorphic-button bg-primary hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <GlassCard>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <EnvelopeSimple size={32} weight="light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Email</h3>
                      <p className="opacity-70">support@wizora.com</p>
                      <p className="text-sm opacity-60 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <Phone size={32} weight="light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Phone</h3>
                      <p className="opacity-70">+1 (555) 123-4567</p>
                      <p className="text-sm opacity-60 mt-1">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <MapPin size={32} weight="light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Office</h3>
                      <p className="opacity-70">
                        123 Cosmic Avenue
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="bg-primary/10">
                  <h3 className="text-xl font-light mb-4">For Enterprise Inquiries</h3>
                  <p className="opacity-70 mb-4">
                    Looking to integrate Wizora into your platform or need a custom solution?
                  </p>
                  <a
                    href="mailto:enterprise@wizora.com"
                    className="text-primary hover:underline"
                  >
                    Contact our enterprise team →
                  </a>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
