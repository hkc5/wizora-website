import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Calendar, Clock } from "phosphor-react";

const Blog = () => {
  const articles = [
    {
      slug: "understanding-your-birth-chart",
      title: "Understanding Your Birth Chart: A Beginner's Guide",
      excerpt: "Learn how to read your natal chart and unlock the secrets written in the stars at your birth.",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Education",
    },
    {
      slug: "mercury-retrograde-survival-guide",
      title: "Mercury Retrograde Survival Guide",
      excerpt: "Everything you need to know about navigating Mercury retrograde periods with confidence and grace.",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Guidance",
    },
    {
      slug: "ai-astrology-future",
      title: "How AI is Revolutionizing Astrology",
      excerpt: "Discover how artificial intelligence is making astrological insights more accurate and accessible than ever.",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Technology",
    },
    {
      slug: "moon-phases-manifestation",
      title: "Working with Moon Phases for Manifestation",
      excerpt: "Align your intentions with lunar cycles for more powerful manifestation and personal growth.",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Practice",
    },
  ];

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
              Cosmic <span className="glow-effect inline-block">Insights</span>
            </h1>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Explore astrology, AI technology, and personal growth through our articles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 0.1}>
                <Link to={`/blog/${article.slug}`}>
                  <GlassCard className="h-full group">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
                      {article.category}
                    </div>
                    <h2 className="text-2xl font-light mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="opacity-70 mb-6">{article.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm opacity-60">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} weight="light" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} weight="light" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
