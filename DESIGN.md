---
name: Professional Finance System
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#3f5f92'
  primary: '#001736'
  on-primary: '#ffffff'
  primary-container: '#002b5c'
  on-primary-container: '#7594cb'
  inverse-primary: '#aac7ff'
  secondary: '#bb0027'
  on-secondary: '#ffffff'
  secondary-container: '#e51a38'
  on-secondary-container: '#fffbff'
  tertiary: '#151818'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2c2c'
  on-tertiary-container: '#929393'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#264779'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 64px
---

## Brand & Style

The visual identity of this design system is rooted in authority, reliability, and clear communication. It is designed to evoke a sense of institutional trust while maintaining the accessibility of a modern service. The aesthetic follows a **Corporate / Modern** style, characterized by structured layouts, high-contrast color blocking, and a focus on legible, bold information hierarchies. 

The system prioritizes clarity over decorative flair, using strong vertical and horizontal alignments to guide the user through complex financial or professional information. It is intended for an audience that values efficiency and transparency, ensuring that key data points and calls-to-action are immediately identifiable.

## Colors

The color palette is built on a foundation of "Patriotic Professionalism." 

- **Primary (Navy Blue):** Used for primary navigation, background containers for important sections, and heavy headings to establish a sense of stability and security.
- **Secondary (Red):** Used strategically for high-impact calls to action, urgent notifications, and accents that require immediate attention. It provides a sharp contrast to the navy, driving the eye toward conversion points.
- **Tertiary (White):** The primary canvas color, ensuring a clean, modern aesthetic that maximizes whitespace and improves reading endurance.
- **Neutral:** A deep charcoal is used for body text to maintain high legibility without the harshness of pure black, while lighter grays are utilized for borders and subtle UI dividers.

## Typography

This design system utilizes **Inter** across all levels to maintain a systematic, utilitarian, and highly readable appearance. 

Headlines are designed to be "loud" and authoritative. Using bold and extra-bold weights paired with uppercase transformations for primary titles creates a clear sense of hierarchy and urgency. Body text is kept clean with generous line height to ensure accessibility in information-dense layouts. Labels and micro-copy use slightly increased letter spacing and medium weights to remain distinct from body paragraphs even at smaller scales.

## Layout & Spacing

The layout philosophy follows a **fixed grid** model for desktop, transitioning to a fluid model for mobile. It uses a 12-column structure that allows for diverse content grouping, such as the three- or four-column icon rows seen in the reference material.

The spacing rhythm is disciplined and rhythmic. Large vertical padding (Section Padding) is used to separate major content blocks (e.g., Hero, Features, Contact), while tighter internal spacing (Stack Sm/Md) is used within cards and components to keep related information logically grouped. Grid gutters are wide enough to provide breathing room between dense columns of text.

## Elevation & Depth

This design system avoids heavy shadows in favor of **tonal layers** and **low-contrast outlines**. Depth is communicated through color blocking rather than physical metaphors. 

Primary surfaces are flat white. Depth is created by placing high-contrast navy or light-gray "containers" behind specific content groups to draw them forward or push them into the background. When borders are used, they are crisp and thin (1px), using subtle grays or primary navy to define boundaries without adding visual clutter. This approach maintains the "clean and modern" requirement while ensuring a professional, architectural feel.

## Shapes

The shape language is primarily geometric and "Soft." By using a consistent **0.25rem (4px)** base radius, the UI maintains its professional and institutional character without appearing overly aggressive or sharp. 

Buttons and major containers use this subtle rounding to feel modern and finished. Circular shapes are reserved exclusively for icons and avatars, creating a soft counterpoint to the otherwise rectangular and structured layout.

## Components

- **Buttons:** Primary buttons should be solid Navy or Red with white uppercase text. They use a bold font weight and the base roundedness. Secondary buttons use a 1px Navy outline with a transparent background.
- **Icon Blocks:** Icons are presented within circular enclosures to create a repeatable, branded visual unit. Use consistent line-weight or solid-fill icons across all instances.
- **Cards:** Cards should be defined by either a light-gray 1px border or a subtle background color shift (e.g., a very light blue or gray). They should not use drop shadows.
- **Input Fields:** Fields use a 1px gray border that shifts to Navy upon focus. Labels should be placed above the field in the 'Label-lg' typographic style.
- **Dividers:** Use thin, vertical or horizontal lines in Navy or Light Gray to separate columns of text or distinct sections within a single container.
- **Feature Lists:** For professional clarity, use bulleted lists where the bullet is replaced by a small Navy checkmark or a Red accent shape to tie back to the brand palette.