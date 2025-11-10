# Wizora Design System

A comprehensive guide for consistent design, spacing, typography, and component usage across the Wizora website.

---

## 1. Typography

### Font Family
- **Primary Font**: Outfit (modern, geometric, contemporary)
- **Fallback**: sans-serif
- **Import**: Google Fonts (weights: 300, 400, 500, 600, 700)

### Font Weights
- **Light (300)**: Headings, titles, hero text
- **Regular (400)**: Body text, paragraphs
- **Medium (500)**: Emphasized text, labels
- **Semibold (600)**: Important headings, strong text
- **Bold (700)**: Not commonly used, reserved for special emphasis

### Heading Hierarchy

| Level | Size (Mobile) | Size (Desktop) | Weight | Usage |
|-------|---------------|----------------|--------|-------|
| H1    | 2.25rem (36px) | 3.5rem (56px) | Light (300) | Hero title, page main heading |
| H2    | 2rem (32px) | 3rem (48px) | Light (300) | Section title ("Loved by Seekers", "How It Works") |
| H3    | 1.5rem (24px) | 1.875rem (30px) | Light (300) | Subsection title, card title |
| H4    | 1.25rem (20px) | 1.5rem (24px) | Light (300) | Feature title, small heading |
| Body  | 1rem (16px) | 1rem (16px) | Regular (400) | Main body text |
| Small | 0.875rem (14px) | 0.875rem (14px) | Regular (400) | Secondary info, role/title |

### Line Height
- **Headings**: 1.2 (tight spacing for impact)
- **Body Text**: 1.6 (loose spacing for readability)

### Letter Spacing
- **Headings**: -0.02em (slight tightening for premium feel)
- **Body**: normal

---

## 2. Spacing Scale (Tailwind)

Use this consistent spacing scale for all margins and padding:

| Scale | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| xs | 0.25rem | 1 | Micro spacing between tight elements |
| sm | 0.5rem | 2 | Small gaps |
| md | 1rem | 4 | Standard spacing |
| lg | 1.5rem | 6 | Medium spacing |
| xl | 2rem | 8 | Large spacing |
| 2xl | 3rem | 12 | Extra large spacing |
| 3xl | 4rem | 16 | Major spacing |
| 4xl | 6rem | 24 | Section top spacing (between major sections) |
| 5xl | 8rem | 32 | Full section padding (pt/pb) |

### Section Spacing Guidelines

**All section containers follow this pattern:**
```
<section className="pt-16 pb-32 px-6">
```

Breaking down:
- **pt-16** (4rem = 64px): Top padding (reduced from py-32 to avoid excess space)
- **pb-32** (8rem = 128px): Bottom padding (allows breathing room)
- **px-6** (1.5rem = 24px): Horizontal padding for mobile responsiveness

**Why this pattern?**
- Consistent vertical rhythm between sections
- Smaller top padding = better flow from previous section
- Larger bottom padding = sets up spacing for next section
- Mobile-friendly horizontal padding

### Title Spacing Within Sections

```
<div className="mb-16">  <!-- mb-16 = 4rem gap between title and content -->
  <h2 className="text-4xl md:text-5xl font-light mb-4">Title</h2>
  <p className="text-xl opacity-70">Subtitle</p>
</div>
```

- **mb-4** between H2 and subtitle paragraph (1rem = 16px)
- **mb-16** after entire title section before content (4rem = 64px)

---

## 3. Color Palette

### Primary Colors
- **Primary (Vibrant Purple)**: HSL(266, 100%, 65%)
  - Use for: CTA buttons, important accents, focus states
  - Hex: #8B5CF6

- **Secondary (Dark Blue)**: HSL(240, 20%, 12%)
  - Use for: Secondary backgrounds, card accents
  - Hex: #16213E

### Backgrounds
- **Background**: HSL(240, 20%, 6%) - Very dark blue-black
- **Card**: HSL(240, 20%, 8%) - Slightly lighter dark
- **Hover/Active**: Background + transparency overlay

### Text Colors
- **Foreground (White)**: HSL(0, 0%, 100%)
- **Foreground Muted**: HSL(0, 0%, 60%) - 60% opacity for secondary text
- **Foreground Disabled**: HSL(0, 0%, 40%) - 40% opacity for disabled states

### Accent Colors
- **Accent**: HSL(280, 70%, 60%) - Accent purple (slightly different from primary)
- **Destructive**: HSL(0, 84.2%, 60.2%) - Red for error states

### Glass/Glassmorphism
- **Glass Background**: HSL(240, 20%, 10%) with 20% opacity
- **Glass Border**: HSL(240, 20%, 20%) with 30% opacity

---

## 4. Component Spacing

### Buttons
- **Padding**: `px-6 py-2` for small, `px-8 py-3` for large
- **Gap between buttons**: `gap-4` (1rem)
- **Button group alignment**: `flex flex-col sm:flex-row gap-4`

### Cards
- **Padding**: `p-8` (2rem) for standard cards
- **Gap between cards**: `gap-6` (1.5rem) in grid layouts, `gap-6` in horizontal scroll

### Input Fields
- **Padding**: `px-4 py-2`
- **Border Radius**: `rounded-lg` (1rem)

### Lists & Grids
- **Gap**: `gap-6` (1.5rem) between items
- **Responsive cols**: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

---

## 5. Rounded Corners (Border Radius)

| Size | Value | Tailwind | Usage |
|------|-------|----------|-------|
| sm | 0.5rem | rounded-sm | Subtle radius |
| md | 0.75rem | rounded | Standard radius for small elements |
| lg | 1rem | rounded-lg | Cards, buttons, inputs |
| xl | 1.5rem | rounded-xl | Large sections, hero elements |

---

## 6. Shadows & Effects

### Elevation Levels

**Level 0 (Flat)**
- No shadow

**Level 1 (Subtle)**
```css
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
```

**Level 2 (Card Hover)**
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

**Level 3 (Interactive/Neumorphic)**
```css
box-shadow:
  0 8px 32px 0 rgba(139, 92, 246, 0.3),
  inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
```

**Level 4 (Neumorphic Hover)**
```css
box-shadow:
  0 12px 48px 0 rgba(139, 92, 246, 0.5),
  0 0 24px 0 rgba(139, 92, 246, 0.4),
  inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
```

### Glow Effects
- **Glow Blur**: `filter: blur(40px)`
- **Glow Radius**: Applied via `radial-gradient`
- **Glow Color**: Primary or Accent with reduced opacity

---

## 7. Animations & Transitions

### Standard Transition
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover States
- **Button Hover**: `translateY(-2px)` + shadow upgrade
- **Link Hover**: Underline or color change
- **Card Hover**: Slight scale or shadow change

### Page Transitions (Framer Motion)
- **Entry**: `opacity: 0 → 1`, `y: 20 → 0`, duration: 0.6s
- **Scroll Reveal**: `opacity: 0 → 1`, `y: 50 → 0`, `filter: blur(10px) → blur(0px)`, duration: 0.6s

### Scroll Snapping
```css
scroll-snap-type: x mandatory;
scroll-snap-align: center;
```

---

## 8. Responsiveness Breakpoints (Tailwind)

| Breakpoint | Size | Use Case |
|------------|------|----------|
| sm | 640px | Small tablets, large phones |
| md | 768px | Tablets |
| lg | 1024px | Small desktops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large desktops |

### Mobile-First Approach
- Design for mobile first
- Use `sm:`, `md:`, `lg:` prefixes for larger screens
- Example: `text-4xl md:text-5xl` (4xl on mobile, 5xl on medium+)

---

## 9. Container Sizing

### Standard Container
```jsx
<div className="container mx-auto max-w-6xl px-6">
```

- **max-w-6xl**: 64rem (1024px) - Main container width
- **mx-auto**: Center the container
- **px-6**: 1.5rem padding on mobile

### Content Widths
| Type | Max Width | Usage |
|------|-----------|-------|
| Hero | max-w-6xl | Main hero section |
| Section | max-w-6xl | Standard content sections |
| Article | max-w-3xl | Blog posts, long-form content |
| Narrow | max-w-2xl | Centered text blocks |

---

## 10. Component Examples

### Hero Section Pattern
```jsx
<section className="pt-32 pb-60 px-6 relative">
  <div className="container mx-auto max-w-6xl relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-8"
    >
      <h1 className="text-5xl md:text-7xl font-light leading-tight">
        Discover Your Cosmic Path
      </h1>
      {/* Content */}
    </motion.div>
  </div>
</section>
```

### Standard Section Pattern
```jsx
<section id="section-name" className="pt-16 pb-32 px-6 overflow-hidden">
  <div className="container mx-auto max-w-6xl">
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-4">Section Title</h2>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">Subtitle</p>
      </div>
    </ScrollReveal>

    {/* Content goes here */}
  </div>
</section>
```

### Card Grid Pattern
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <div key={item.id} className="bg-card rounded-xl p-8 border border-border/30">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Button Pattern
```jsx
<div className="flex flex-col sm:flex-row gap-4">
  <Button className="bg-primary hover:bg-primary/90 px-8 py-3">
    Primary Action
  </Button>
  <Button variant="outline" className="px-8 py-3">
    Secondary Action
  </Button>
</div>
```

---

## 11. Accessibility Guidelines

- **Color Contrast**: All text meets WCAG AA standards (4.5:1 for normal text)
- **Focus States**: All interactive elements have visible focus indicators
- **Button Sizes**: Minimum 44x44px for touch targets
- **Font Size**: Never below 16px for body text
- **Semantic HTML**: Use proper heading hierarchy, semantic tags
- **Alt Text**: All images have descriptive alt text

---

## 12. Implementation Guidelines

### When Adding New Sections:
1. Use the **Standard Section Pattern** as template
2. Follow **pt-16 pb-32** spacing rule
3. Use **title spacing** guidelines (mb-4, mb-16)
4. Implement **ScrollReveal** for animations
5. Apply consistent **gap-6** for grids/lists

### When Creating New Components:
1. Check if similar component exists (reuse!)
2. Use established **color palette**
3. Apply **rounded-lg** or **rounded-xl** consistently
4. Use **Level 2 or 3 shadows** (avoid custom shadows)
5. Follow **font weights** for hierarchy

### When Updating Styles:
1. **Before**: Check this design system
2. **During**: Use established values
3. **After**: Update this document if adding new patterns

---

## 13. Common Patterns Quick Reference

| Element | Classes | Notes |
|---------|---------|-------|
| Section Container | `pt-16 pb-32 px-6` | Standard section spacing |
| Section Title | `text-4xl md:text-5xl font-light mb-4` | Main heading |
| Section Subtitle | `text-xl opacity-70 max-w-2xl mx-auto` | Description text |
| Card | `bg-card rounded-xl p-8 border border-border/30` | Standard card |
| Glass Card | `glass-card rounded-xl p-8` | Glassmorphic card |
| Primary Button | `bg-primary hover:bg-primary/90 px-8` | CTA button |
| Grid (3 col) | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` | Responsive grid |
| Flex Center | `flex justify-center items-center` | Center content |
| Text Muted | `opacity-70` or `text-foreground/70` | Secondary text |

---

## Update Log

- **v1.0** (Nov 10, 2024): Initial design system created
  - Established typography (Outfit font)
  - Defined spacing scale and section patterns
  - Documented color palette
  - Created component patterns
