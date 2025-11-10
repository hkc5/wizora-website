import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Calendar, Clock, ArrowLeft } from "phosphor-react";

const BlogPost = () => {
  const { slug } = useParams();

  const articles: Record<string, any> = {
    "understanding-your-birth-chart": {
      title: "Understanding Your Birth Chart: A Beginner's Guide",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Education",
      content: [
        {
          type: "paragraph",
          text: "Your birth chart, also known as a natal chart, is a snapshot of the sky at the exact moment and location of your birth. It's a cosmic blueprint that reveals your personality traits, strengths, challenges, and life path.",
        },
        {
          type: "heading",
          text: "The Big Three: Sun, Moon, and Rising",
        },
        {
          type: "paragraph",
          text: "The foundation of your birth chart consists of three key components. Your Sun sign represents your core identity and ego, your Moon sign reveals your emotional nature and inner world, and your Rising sign (Ascendant) shows how you present yourself to the world.",
        },
        {
          type: "heading",
          text: "The Twelve Houses",
        },
        {
          type: "paragraph",
          text: "Your birth chart is divided into twelve houses, each representing different life areas. From the first house of self to the twelfth house of spirituality, these sectors show where planetary energies express themselves in your life.",
        },
        {
          type: "paragraph",
          text: "Understanding your birth chart takes time, but with Wizora's AI companion, you can get instant insights into any aspect of your chart and learn at your own pace.",
        },
      ],
    },
    "mercury-retrograde-survival-guide": {
      title: "Mercury Retrograde Survival Guide",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Guidance",
      content: [
        {
          type: "paragraph",
          text: "Mercury retrograde has a reputation for causing communication mishaps, technology failures, and travel delays. While it's true that these periods require extra care, they're also powerful opportunities for reflection and revision.",
        },
        {
          type: "heading",
          text: "What Actually Happens During Mercury Retrograde?",
        },
        {
          type: "paragraph",
          text: "When Mercury appears to move backward in the sky (it's actually an optical illusion), its influence over communication, technology, and travel becomes more challenging. This happens three to four times per year, each lasting about three weeks.",
        },
        {
          type: "heading",
          text: "How to Thrive During Mercury Retrograde",
        },
        {
          type: "paragraph",
          text: "Instead of fearing Mercury retrograde, use it as a time to review, revise, and reconnect. Back up your data, double-check travel plans, and be extra clear in your communications. This is also an excellent time for inner work and revisiting old projects.",
        },
        {
          type: "paragraph",
          text: "With Wizora, you'll receive personalized alerts before Mercury retrograde begins and daily guidance throughout the transit to help you navigate smoothly.",
        },
      ],
    },
    "ai-astrology-future": {
      title: "How AI is Revolutionizing Astrology",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Technology",
      content: [
        {
          type: "paragraph",
          text: "Artificial intelligence is transforming how we access and understand astrological wisdom. What once required expensive consultations with professional astrologers is now available instantly through AI-powered platforms like Wizora.",
        },
        {
          type: "heading",
          text: "The Marriage of Ancient Wisdom and Modern Technology",
        },
        {
          type: "paragraph",
          text: "AI doesn't replace traditional astrology—it enhances it. By analyzing thousands of birth charts and astrological texts, AI can identify patterns and provide insights that would take years for a human to discover. It's like having a master astrologer available 24/7.",
        },
        {
          type: "heading",
          text: "Personalization at Scale",
        },
        {
          type: "paragraph",
          text: "What makes AI astrology revolutionary is its ability to provide deeply personalized insights to millions of people simultaneously. Each interaction learns from your questions and feedback, making future readings even more accurate and relevant to your life.",
        },
        {
          type: "paragraph",
          text: "The future of astrology is here, and it's more accessible, accurate, and personalized than ever before. AI is democratizing cosmic wisdom, making it available to anyone with an internet connection.",
        },
      ],
    },
    "moon-phases-manifestation": {
      title: "Working with Moon Phases for Manifestation",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Practice",
      content: [
        {
          type: "paragraph",
          text: "The Moon's cycle offers a natural rhythm for setting intentions, taking action, and releasing what no longer serves you. By aligning your manifestation practices with lunar phases, you can amplify your results and work with cosmic energies rather than against them.",
        },
        {
          type: "heading",
          text: "New Moon: Setting Intentions",
        },
        {
          type: "paragraph",
          text: "The New Moon is a time of new beginnings and fresh starts. This is when you plant seeds for what you want to manifest. Set clear intentions, write them down, and visualize them as already accomplished.",
        },
        {
          type: "heading",
          text: "Waxing Moon: Building Momentum",
        },
        {
          type: "paragraph",
          text: "As the Moon grows fuller, take inspired action toward your goals. This is a time for building, creating, and moving forward. Your manifestation practices should focus on growth and expansion.",
        },
        {
          type: "heading",
          text: "Full Moon: Celebration and Release",
        },
        {
          type: "paragraph",
          text: "The Full Moon is a powerful time for gratitude and letting go. Celebrate what you've manifested and release any blocks or limiting beliefs. Write down what you want to release and safely burn the paper.",
        },
        {
          type: "paragraph",
          text: "Wizora tracks the Moon's phases for you and sends personalized manifestation prompts aligned with your birth chart, making it easier than ever to work with lunar energy.",
        },
      ],
    },
  };

  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen stars-bg">
        <Navigation />
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light mb-6">Article not found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen stars-bg">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary hover:opacity-70 transition-opacity mb-8"
          >
            <ArrowLeft size={20} weight="light" />
            <span>Back to blog</span>
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-6">
              {article.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center space-x-6 text-sm opacity-60 mb-12">
              <div className="flex items-center space-x-2">
                <Calendar size={16} weight="light" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} weight="light" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <GlassCard className="prose prose-invert max-w-none">
              <div className="space-y-6">
                {article.content.map((block: any, index: number) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={index} className="text-2xl font-light mt-8 mb-4">
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-lg opacity-80 leading-relaxed">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </GlassCard>

            <div className="mt-12 text-center">
              <GlassCard className="bg-primary/10">
                <h3 className="text-2xl font-light mb-4">Ready to explore your own cosmic journey?</h3>
                <p className="opacity-70 mb-6">
                  Start chatting with your AI astrology companion today.
                </p>
                <a
                  href="/#pricing"
                  className="inline-block neumorphic-button bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg"
                >
                  Get Started Free
                </a>
              </GlassCard>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
