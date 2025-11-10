import type { Config } from "tailwindcss";

/**
 * Wizora Design System - Tailwind Configuration
 * This is the single source of truth for all design tokens
 * Source: src/lib/theme.ts mirrors these values for TypeScript
 */

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Typography
      fontFamily: {
        sans: ["'Outfit', sans-serif"],
      },
      fontSize: {
        // H1: Hero titles
        "hero-lg": ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 56px
        "hero-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 36px
        // H2: Section titles
        "section-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 48px
        "section-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 32px
        // H3: Subsection titles
        "heading-lg": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 30px
        "heading-sm": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 24px
        // H4: Feature titles
        "subheading-lg": ["1.5rem", { lineHeight: "1.2" }], // 24px
        "subheading-sm": ["1.25rem", { lineHeight: "1.2" }], // 20px
        // Body
        "body-lg": ["1.125rem", { lineHeight: "1.6" }], // 18px
        "body": ["1rem", { lineHeight: "1.6" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.6" }], // 14px
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      // Colors
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        glow: {
          primary: "hsl(var(--glow-primary))",
          secondary: "hsl(var(--glow-secondary))",
        },
        glass: {
          bg: "hsl(var(--glass-bg))",
          border: "hsl(var(--glass-border))",
        },
      },

      // Spacing
      spacing: {
        // Standard spacing scale (Tailwind defaults already cover most)
        // Using Tailwind defaults: 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
      },

      // Border Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Shadows
      boxShadow: {
        // Level 1: Subtle
        "level-1": "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
        // Level 2: Card hover
        "level-2": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        // Level 3: Interactive/Neumorphic
        "level-3":
          "0 8px 32px 0 rgba(139, 92, 246, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        // Level 4: Neumorphic hover
        "level-4":
          "0 12px 48px 0 rgba(139, 92, 246, 0.5), 0 0 24px 0 rgba(139, 92, 246, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
      },

      // Animations
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
      },

      // Transitions
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
