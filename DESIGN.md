# Design Brief: PathFinder

**Tone & Purpose**: Antique Maritime Archive / Explorer Journal — career and life guidance with vintage sepia aesthetic, strong dark ink readability, and layered document-like composition inspired by old ship logs and navigation records.

**Differentiation**: No generic AI defaults. Handcrafted maritime/archival feel with enforced high-contrast dark text, paper texture foundation, compass and map motifs, and document-style card layering.

## Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Background | 0.98 0.04 76 | Page base, cream sepia |
| Card | 0.96 0.06 74 | Document cards, layered appearance |
| Primary (Sepia) | 0.78 0.08 75 | Hero section, key accents, #F5E6CA analog |
| Secondary (Tan) | 0.87 0.12 74 | Section backgrounds, #EAD7B7 analog |
| Foreground (Ink) | 0.22 0.06 30 | All text, dark readable ink #3E2723 |
| Accent (Muted Teal) | 0.58 0.10 200 | Interactive highlights, sparingly |
| Muted | 0.90 0.05 76 | Dividers, subtle backgrounds |
| Border | 0.92 0.05 75 | Card edges, section dividers |

**Dark Mode**: Maintains sepia harmony — dark taupe background (0.16 0.04 30) with lighter cream foreground (0.94 0.04 76). Accent shifts to softer teal (0.72 0.12 200). All text remains high-contrast readable.

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Instrument Serif Italic | Headers, section titles, navigation — refined serif for archival aesthetic |
| Body | Lora | Long-form content, card descriptions — readable serif maintains journal feel |
| Mono | Geist Mono | Code snippets, data — subtle texture |

**Type Scale**: Large headings 2.25rem (display), section heads 1.5rem, body copy 1rem/16px minimum (no compression). Generous line-height (1.6) for readability.

## Structural Zones

| Zone | Background | Treatment |
|------|------------|-----------|
| Header | Primary (sepia) 0.78 0.08 75 | Elevated, compass rose icon, border-b in muted |
| Hero | Secondary (tan) 0.87 0.12 74 with parchment texture | Layered depth, centered title, full-width |
| Content Sections | Alternate Card (0.96) and Secondary (0.87) | Clear visual rhythm, padding 3rem+ |
| Card Component | Card 0.96 0.06 74 with shadow-maritime | 2-3° tilt (alternating left/right), floating on hover |
| Footer | Muted 0.90 0.05 76 with parchment | border-t in border color, dark readable text |

## Component Patterns

**Cards**: Layered document style — soft 12px corners, maritime shadow (0 4px 12px dark ink 15% opacity), slight rotation (±2deg via CSS transform), floating lift animation on hover (translateY -12px, 400ms easing). Alternate tilt direction per row for visual rhythm.

**Buttons**: Primary (sepia 0.78) on card bg with dark ink text. Hover: slight lift + shadow-maritime-lg. No generic blue defaults.

**Section Dividers**: Subtle compass icon or vertical line in muted color. Never use horizontal rules without semantic meaning.

**Navigation**: Vertical scrolling layout. No sidebars. Inline index links scroll to anchor sections. All text remains dark ink minimum L:0.22.

## Motion & Animation

| Animation | Trigger | Duration | Curve |
|-----------|---------|----------|-------|
| Fade-in | Page load / scroll into view | 400ms | ease-out |
| Float-subtle | Continuous on idle cards | 3s loop | ease-in-out |
| Float-on-hover | Card hover | 400ms | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Transition-smooth | All interactive state changes | 300ms | cubic-bezier(0.4, 0, 0.2, 1) |

No bouncy animations. All motion supports `prefers-reduced-motion`.

## Spacing & Rhythm

Consistent 1rem (16px) base unit. Section vertical rhythm: 3rem between major sections, 1.5rem card padding, 0.75rem component spacing. Horizontal: full-width on mobile, container centered at max-width 1400px.

## Constraints

- **No faded text**: All foreground text uses L ≥ 0.22 (min contrast ratio 4.5:1 AA on light bg)
- **No low-contrast combinations**: Primary text always dark ink (0.22), never above 0.45
- **No cramped layouts**: Minimum 1.5rem padding on all sides, sections breathe vertically
- **No horizontal compression**: Typography scales up on larger screens, never down
- **Deck-style cards**: Never flat, always elevated with shadow and subtle tilt
- **Maritime motifs**: Compass (header), map (hero), stamps (section breaks) — subtle, 1-2 per major section max

## Signature Detail

Compass rose watermark in hero section footer (subtle, 5-10% opacity sepia). Paper texture overlay on background sections via repeating gradient. Card tilt alternates per row — documents scattered on desk. Dark ink contrast enforced: never compromise readability for aesthetic.

## Assets

- Fonts: InstrumentSerif-Italic.woff2, Lora.woff2, GeistMono.woff2 copied to `/assets/fonts/`
- Preview: `.platform/design/preview-1776265956580.jpg`

