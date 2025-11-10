/**
 * Wizora Design System - TypeScript Theme Tokens
 *
 * This file mirrors the design tokens from tailwind.config.ts
 * and provides TypeScript constants for use in component logic.
 *
 * Use these values when you need to reference design tokens in JavaScript/TypeScript code
 * (e.g., for conditional styling, animations, layout calculations)
 *
 * For CSS styling, always use Tailwind classes instead of these constants.
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Primary (Vibrant Purple)
  primary: "hsl(266, 100%, 65%)", // #8B5CF6
  primaryHSL: { h: 266, s: 100, l: 65 } as const,

  // Secondary (Dark Blue)
  secondary: "hsl(240, 20%, 12%)",
  secondaryHSL: { h: 240, s: 20, l: 12 } as const,

  // Backgrounds
  background: "hsl(240, 20%, 6%)",
  backgroundHSL: { h: 240, s: 20, l: 6 } as const,

  card: "hsl(240, 20%, 8%)",
  cardHSL: { h: 240, s: 20, l: 8 } as const,

  // Text
  foreground: "hsl(0, 0%, 100%)",
  foregroundHSL: { h: 0, s: 0, l: 100 } as const,

  // Accents
  accent: "hsl(280, 70%, 60%)",
  accentHSL: { h: 280, s: 70, l: 60 } as const,

  destructive: "hsl(0, 84.2%, 60.2%)",
  destructiveHSL: { h: 0, s: 84.2, l: 60.2 } as const,

  // Glow
  glowPrimary: "hsl(266, 100%, 65%)",
  glowSecondary: "hsl(280, 70%, 60%)",

  // Glass
  glassBg: "hsl(240, 20%, 10%)",
  glassBgHSL: { h: 240, s: 20, l: 10 } as const,

  glassBorder: "hsl(240, 20%, 20%)",
  glassBorderHSL: { h: 240, s: 20, l: 20 } as const,

  // Borders
  border: "hsl(240, 20%, 15%)",
  borderHSL: { h: 240, s: 20, l: 15 } as const,

  // Muted
  muted: "hsl(240, 20%, 15%)",
  mutedHSL: { h: 240, s: 20, l: 15 } as const,
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Font family
  fontFamily: "'Outfit', sans-serif",

  // Font sizes with line heights
  fontSize: {
    // H1: Hero titles (56px)
    heroLg: {
      size: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H1: Hero titles (36px)
    heroSm: {
      size: "2.25rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H2: Section titles (48px)
    sectionLg: {
      size: "3rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H2: Section titles (32px)
    sectionSm: {
      size: "2rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H3: Subsection titles (30px)
    headingLg: {
      size: "1.875rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H3: Subsection titles (24px)
    headingSm: {
      size: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    // H4: Feature titles (24px)
    subheadingLg: {
      size: "1.5rem",
      lineHeight: 1.2,
    },
    // H4: Feature titles (20px)
    subheadingSm: {
      size: "1.25rem",
      lineHeight: 1.2,
    },
    // Body Large (18px)
    bodyLg: {
      size: "1.125rem",
      lineHeight: 1.6,
    },
    // Body (16px)
    body: {
      size: "1rem",
      lineHeight: 1.6,
    },
    // Body Small (14px)
    bodySm: {
      size: "0.875rem",
      lineHeight: 1.6,
    },
  } as const,

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  } as const,
} as const;

// ============================================================================
// SPACING (uses Tailwind default scale)
// ============================================================================

export const spacing = {
  // Spacing values in pixels (map to Tailwind units)
  // Tailwind: 1 = 0.25rem = 4px
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
} as const;

// Common spacing patterns
export const spacingPatterns = {
  // Section spacing
  sectionPaddingTop: spacing["4xl"], // 96px / pt-24
  sectionPaddingBottomLarge: spacing["5xl"], // 128px / pb-32
  sectionPaddingBottomSmall: spacing["4xl"], // 96px / pb-24

  // Gap patterns
  gapSmall: spacing.md, // 16px / gap-4
  gapMedium: spacing.lg, // 24px / gap-6
  gapLarge: spacing.xl, // 32px / gap-8

  // Margin between sections
  marginBetweenSections: spacing["4xl"], // 96px / mb-24
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px (var(--radius))
  xl: "1.5rem", // 24px
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  // Level 0: No shadow (flat)
  none: "none",

  // Level 1: Subtle shadow
  level1: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",

  // Level 2: Card hover
  level2: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",

  // Level 3: Interactive/Neumorphic
  level3:
    "0 8px 32px 0 rgba(139, 92, 246, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",

  // Level 4: Neumorphic hover
  level4:
    "0 12px 48px 0 rgba(139, 92, 246, 0.5), 0 0 24px 0 rgba(139, 92, 246, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
} as const;

// ============================================================================
// ANIMATIONS & TRANSITIONS
// ============================================================================

export const animations = {
  durations: {
    fast: "0.2s",
    standard: "0.3s",
    slow: "0.6s",
  } as const,

  timingFunctions: {
    easeOut: "ease-out",
    easeIn: "ease-in",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  } as const,

  // Common animation combinations
  fadeUpDuration: "0.6s",
  fadeUpTiming: "ease-out",
  fadeInDuration: "0.6s",
  fadeInTiming: "ease-out",
  slideInDuration: "0.3s",
  slideInTiming: "ease-out",
} as const;

// ============================================================================
// BREAKPOINTS (Tailwind responsive breakpoints)
// ============================================================================

export const breakpoints = {
  sm: "640px", // Small tablets, large phones
  md: "768px", // Tablets
  lg: "1024px", // Small desktops
  xl: "1280px", // Desktops
  "2xl": "1536px", // Large desktops
} as const;

// ============================================================================
// CONTAINER
// ============================================================================

export const container = {
  maxWidth: "64rem", // max-w-6xl (1024px)
  maxWidthSmall: "48rem", // max-w-3xl (768px)
  maxWidthLarge: "80rem", // max-w-5xl (1280px)
  horizontalPadding: "1.5rem", // px-6 (24px)
  centerMargin: "auto",
} as const;

// ============================================================================
// SECTION PATTERNS (Common layout patterns)
// ============================================================================

export const sectionPatterns = {
  // Standard section container classes
  container: "container mx-auto max-w-6xl",
  containerNarrow: "container mx-auto max-w-3xl",
  containerWide: "container mx-auto max-w-5xl",

  // Standard section spacing
  paddingStandard: "pt-16 pb-32 px-6",
  paddingHero: "pt-32 pb-60 px-6",
  paddingSmall: "pt-12 pb-24 px-6",

  // Title spacing within sections
  titleMarginBottom: "mb-16", // 64px gap between title and content
  titleMarginSmall: "mb-4", // 16px gap between H2 and subtitle

  // Common flexbox patterns
  centerFlex: "flex justify-center items-center",
  centerFlexCol: "flex flex-col justify-center items-center",
} as const;

// ============================================================================
// COMPONENT PATTERNS (Common component classes)
// ============================================================================

export const componentPatterns = {
  // Cards
  card: "bg-card rounded-xl p-8 border border-border/30",
  glassCard: "glass-card rounded-xl p-8",

  // Buttons
  buttonLarge: "px-8 py-3",
  buttonSmall: "px-4 py-2",

  // Button gaps
  buttonGroupGap: "gap-4",
  buttonGroupFlex: "flex flex-col sm:flex-row gap-4",

  // Grids
  gridResponsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  gridTwoColumn: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Text utilities
  textMuted: "opacity-70",
  textSecondary: "text-foreground/70",
} as const;

// ============================================================================
// EXPORT TYPE HELPERS (for TypeScript autocomplete)
// ============================================================================

export type Color = typeof colors[keyof typeof colors];
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type Spacing = keyof typeof spacing;
export type BorderRadius = keyof typeof borderRadius;
export type Shadow = keyof typeof shadows;
export type Breakpoint = keyof typeof breakpoints;

/**
 * Type-safe color getter
 * Usage: getColor('primary') // Returns "hsl(266, 100%, 65%)"
 */
export function getColor(colorName: keyof typeof colors): string {
  return colors[colorName];
}

/**
 * Type-safe spacing getter
 * Usage: getSpacing('lg') // Returns "1.5rem"
 */
export function getSpacing(spacingName: keyof typeof spacing): string {
  return spacing[spacingName];
}

/**
 * Type-safe font size getter
 * Usage: getFontSize('heroLg') // Returns { size: "3.5rem", lineHeight: 1.2, ... }
 */
export function getFontSize(
  fontSizeName: keyof typeof typography.fontSize
): (typeof typography.fontSize)[typeof fontSizeName] {
  return typography.fontSize[fontSizeName];
}

/**
 * Type-safe shadow getter
 * Usage: getShadow('level3') // Returns shadow string
 */
export function getShadow(shadowName: keyof typeof shadows): string {
  return shadows[shadowName];
}
