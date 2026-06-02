---
name: Canarias Educación Digital
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444653'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3557bc'
  primary: '#002068'
  on-primary: '#ffffff'
  primary-container: '#003399'
  on-primary-container: '#8aa4ff'
  inverse-primary: '#b5c4ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#002d29'
  on-tertiary: '#ffffff'
  tertiary-container: '#004540'
  on-tertiary-container: '#2ebaae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#153ea3'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#78f7e9'
  tertiary-fixed-dim: '#59dacd'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Open Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Open Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Open Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system focuses on institutional clarity, transparency, and accessibility for the educational community of the Canary Islands. The brand personality is authoritative yet approachable, ensuring that students, teachers, and parents can navigate academic content without cognitive friction.

The visual style is strictly **Minimalist and Flat**. It rejects all decorative artifice such as gradients, shadows, or textures to prioritize performance and legivility. By utilizing heavy whitespace and a restricted color palette, the UI directs full attention to the educational resources. The aesthetic aligns with modern governmental standards: clean, structured, and civic-minded.

## Colors
The palette is rooted in the official identity of the Canary Islands Government. 

- **Primary (Azul Gobierno):** Used for navigation headers, primary buttons, and institutional branding. It ensures WCAG AA contrast ratios against white backgrounds.
- **Secondary (Amarillo Gobierno):** Used sparingly as an accent for high-priority alerts, active states, or highlighting key educational metrics.
- **Tertiary (Turquesa Didáctico):** A softer hue dedicated to student-facing areas, early childhood education sections, and creative interactive elements to soften the institutional tone.
- **Neutral:** A range of cool grays (from #F5F7F9 to #2D3748) provides structural scaffolding and ensures long-form reading comfort.

## Typography
This design system utilizes **Open Sans** across all levels to maintain a humanist, highly legible, and neutral tone. 

The typographic hierarchy is optimized for long-form reading in a blog context. Headlines use a semi-bold weight for clear sectioning without appearing aggressive. Body text is set at 18px for primary articles to ensure maximum accessibility for all age groups. Line heights are generous (1.5x - 1.6x) to prevent visual fatigue during extended reading sessions.

## Layout & Spacing
The system uses a **Fixed Grid** approach for desktop to preserve editorial integrity, transitioning to a fluid model for mobile devices.

- **Desktop (1200px+):** 12-column grid with 24px gutters. Content is centered with wide margins to create a focused reading column.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters.
- **Mobile (< 768px):** 4-column grid with 16px gutters and 16px side margins.

Horizontal spacing follows an 8px base unit. Vertical rhythm is strictly enforced using "stack" variables to ensure consistent separation between article headers, paragraphs, and media assets.

## Elevation & Depth
In line with the Flat Design philosophy, this design system **avoids all shadows and blurs**. Depth is communicated exclusively through **Tonal Layers** and **Low-contrast Outlines**.

- **Level 0 (Background):** Solid white or the lightest neutral grey (#F5F7F9).
- **Level 1 (Cards/Containers):** Defined by a 1px solid border in a soft grey (#E2E8F0). No lift or hover-shadow.
- **Active States:** Indicated by a color fill change (e.g., a light blue background) or a 2px stroke in the Primary color.
- **Separators:** Use 1px hairlines to divide list items or footer sections.

## Shapes
The shape language is **Soft**, utilizing subtle corner radii to appear modern and friendly without losing professional "government" posture. 

All primary buttons, input fields, and article cards use a 0.25rem (4px) radius. Larger interactive modules or featured banners may use 0.5rem (8px). This creates a consistent, geometric rhythm that feels organized and intentional.

## Components
- **Buttons:** Flat fills only. Primary buttons use Azul Gobierno with white text. Secondary buttons use a 1px Azul stroke with no fill.
- **Input Fields:** 1px grey border, turning Azul on focus. Labels must always be visible above the field (no floating placeholders for accessibility).
- **Cards:** White background, 1px grey border. Information is organized vertically: Image > Category (Label-md) > Title (Title-lg) > Snippet.
- **Chips/Tags:** Used for "Educational Levels" or "Subjects." Rectangular with 4px radius, using light tints of the Tertiary color.
- **Iconography:** Use 2px stroke linear icons. Icons should never be filled unless they represent an active state.
- **Institutional Bar:** A slim top bar featuring the stylized 'C' branding and links to other government portals, kept separate from the blog's main navigation.