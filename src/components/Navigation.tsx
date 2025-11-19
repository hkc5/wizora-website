import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-xl border border-border/30 rounded-full max-w-4xl w-[calc(100%-32px)] ${
        isScrolled
          ? "bg-background/40 shadow-level-2"
          : "bg-background/20"
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/wizard-logo.png" 
              alt="Wizora Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-light tracking-tight">Wizora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("pricing")}
              className="neumorphic-button bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full md:hidden bg-background/95 backdrop-blur-xl border-l border-border"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-2xl font-light opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("pricing")}
                size="lg"
                className="neumorphic-button bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
