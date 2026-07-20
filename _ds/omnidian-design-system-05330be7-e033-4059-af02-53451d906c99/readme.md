# Omnidian Design System

A living design system for **Omnidian**, a clean-energy technology company delivering **Performance Assurance** — AI-powered monitoring, performance guarantees, and asset management for residential and commercial solar and battery-storage systems. The brand promise: *"We take responsibility for performance—and stand behind it."*

This system encodes Omnidian's brand foundations (color, type, spacing, motion), reusable UI components, and a recreation of the marketing website so designers and agents can produce on-brand interfaces, decks, and assets.

---

## Sources

- **`uploads/Omnidian_Brand_Guidelines_Draft_2026_compressed.pdf`** — Brand Guidelines v2.0, January 2026 (42 pp). Primary source for logo usage, color, typography, photography, and voice. Colors and type below are transcribed from it.
- **https://www.omnidian.com/** — live marketing site. Source for real logos, photography, product copy, navigation, and the Website UI kit recreation.

No codebase or Figma file was provided. Components are an authored standard set styled to the brand (see *Components* and *Intentional additions*).

---

## Company & product context

Omnidian sells a single service — **Performance Assurance** — to solar/storage asset owners, operators, financiers, and investors. Differentiation: proactive resolution, human + intelligent systems, long-term accountability, and a performance guarantee (they cover the shortfall if a system generates < 95% of forecast). They manage 2GW+ across 2,000+ sites in 48 states, D.C., and Puerto Rico.

Primary surfaces represented here:
- **Marketing website** (omnidian.com) — recreated as a UI kit (`ui_kits/website/`).

A customer/asset-monitoring product portal exists but was **not** provided (no screenshots, Figma, or code), so no product-app UI kit was built — see *Caveats*.

---

## CONTENT FUNDAMENTALS (voice & copy)

Omnidian's tone: **Approachable (not casual) · Confident (not arrogant) · Professional (not cold) · Smart (not complicated)** — warmth balanced with authority. Traits: curious, honest, innovative, thoughtful, collaborative, knowledgeable.

- **Person:** Speaks as "we" (Omnidian) to "you/your" (the asset owner). Partnership framing — *"alongside our partners and customers, not above them."*
- **Casing:** Headlines use **Title Case** for hero/section titles ("Unmatched Transparency & Control of Your Assets", "Who We Serve"). Eyebrows/labels are UPPERCASE with wide tracking. Sentence case for body and UI microcopy.
- **Sentence style:** Short, declarative, benefit-led. Leads with outcomes and numbers ("Performance Index Improvement of 14%", "60% Reduction in Corrective Maintenance Costs"). Confident verbs: *protect, accelerate, guarantee, recover, prevent*.
- **Numbers/stats:** Used prominently and Bold — "2000+", "95%", "250+", "> $6M / yr". Stats always paired with a short qualifying line.
- **Punctuation:** Em dashes for emphatic asides; ampersands (&) common in titles.
- **Emoji:** **None.** Never used — the brand is premium and restrained.
- **CTA voice:** Direct, low-friction, value-forward — "Talk To An Expert", "Book a 15-min Portfolio Review", "Experience Real Performance Assurance".
- **Vibe:** Trustworthy expert partner. Human-first ("People Who Care") yet technical and data-driven ("AI-driven alerts", "live dashboards").

---

## VISUAL FOUNDATIONS

**Colors.** Core palette communicates trust, stability, and forward energy.
- **Carbon Blue `#28343F`** — primary dark; anchors layouts, headlines, dark sections, footer.
- **Pulse Orange `#F26722`** — signature accent; CTAs, key highlights, active states, focus rings. Used sparingly for emphasis — *never* full-saturation as a large background.
- **Lumen Sand `#F2EFEC`** + **White** — the two primary background colors.
- Secondary (charts, accents, supporting UI, **never dominant**): **Steel `#527DB0`**, **Smoke `#5F7085`**, **Vivid Blue `#60C1E0`**, **Vapor Gray `#F0F0F0`**.
- Derived tint/shade ramps (carbon-50…900, orange-50…800, sand) power UI states. See `tokens/colors.css`.
- **Status** — info→Steel, warning→Orange are on-brand; **success (green) and danger (red) are additions** (the brand defines neither).

**Type.** Primary typeface **Neue Haas Grotesk Display** (licensed) — clean, neutral, modern neo-grotesque. Hierarchy by **weight/scale/spacing**, not decoration: Bold headlines & stats, Medium subheads, Regular body. Large sizes use tight tracking (`-0.02` to `-0.03em`); eyebrows are uppercase with `0.08em` tracking. **Substitution:** the licensed font is not bundled — the stack falls back to Helvetica Neue then **Hanken Grotesk** (Google Fonts). *Upload the real Neue Haas files to match exactly.*

**Spacing & layout.** 4px base grid — *"engineered, not random."* A modular grid (4/6/12-column logic) inspired by solar infrastructure; consistent alignment, repetition for rhythm. Content max-width ~1200px; generous ~96px section padding.

**Backgrounds.** White and Lumen Sand dominate. **Color blocking** with solid core colors creates pause/hierarchy (anchor moments). **Gradient mesh** (proprietary, warm↔cool) reserved for brand-forward moments only — section dividers, headers, covers — never a default background. **Duotone image blocks** (grey-over-blue, warm-over-orange) at 60–75% opacity. Photography is a major surface (see below).

**Photography.** Human-first, real-world: real people working with solar, candid over posed, solar infrastructure as *context not subject*. High-res, natural light, warm orange tones, true-to-life color — no heavy filters/washes.

**Corner radii.** Moderate & engineered: sm 4 / md 8 / lg 12 / xl 20, pill for chips & toggles. Nothing overly rounded.

**Cards.** White (or sand/dark) surface, 1px subtle border, `radius-lg` (12px), soft **carbon-tinted** shadow (shadows use rgba of `#28343F`, not black). Interactive cards lift 2px on hover with a larger shadow.

**Borders & shadows.** Hairline 1px subtle borders (`#e7e2db`). Shadow system xs→lg, all cool/carbon-tinted and understated (premium, not heavy). Logo must **never** carry a drop shadow.

**Motion.** Purposeful and refined, never gimmicky. Ease-out (`cubic-bezier(0.16,1,0.3,1)`) for entrances; 120–320ms. Hover = darker fill (primary) or subtle tint (ghost/secondary); focus = 3px Pulse-Orange focus ring. Press = 1px translateY nudge on buttons (no aggressive shrink).

**Transparency & blur.** Sparingly — sticky nav uses a translucent white with backdrop blur; modal scrims use a dark carbon wash with light blur. Not decorative.

---

## ICONOGRAPHY

The brand guidelines define **no proprietary icon set or icon font**, and the marketing site uses photography, numerals, and simple UI affordances rather than a decorative icon language. Approach:

- **Emoji: never.** Unicode glyphs are used only as tiny functional affordances (carets, arrows) — not as content icons.
- **UI affordances** built into components (checkbox tick, select chevron, tag ×, alert glyphs) are inline stroke SVGs — thin, rounded, ~2px stroke — matching the clean neo-grotesque tone.
- **Recommended icon set for new work: [Lucide](https://lucide.dev)** (CDN) — 2px stroke, rounded caps, minimal — the closest match to the brand's restrained, engineered feel. **This is a substitution/recommendation, not an official Omnidian set** — flagged accordingly.
- **Numbered indices** (01–06) are used as a brand device in the services grid — a legitimate "iconography" substitute drawn from the modular-grid motif.

Copied brand assets live in `assets/` (see below). No icons were shipped by the source, so none were copied; use Lucide via CDN.

---

## Assets (`assets/`)

Copied from omnidian.com (real brand assets — do not redraw):
- `logo.png` — full logotype, Carbon Blue (logomark O + pulse waveform + wordmark).
- `logo-white.png` — reversed logotype for dark/photo backgrounds.
- `logomark.png` — the "O + pulse" mark alone (cropped from the logo) for avatars/favicons.
- Photography: `img-services.jpg`, `img-who-we-serve.jpg`, `img-solar-panel.jpg`, `img-hero.jpg`.
- Case studies: `case-1.jpg`, `case-2.jpg`; insight `insight-bess.jpg`.
- Partner logos: `logo-verizon.png`, `logo-edp.png`, `logo-pivot.png`.

*Logos are the low-res web versions. Request vector (SVG/EPS) logo + the proprietary gradient `.GRD` files from the Omnidian brand team for print-grade work.*

---

## Components

Authored standard set (React, styling via CSS custom properties). Import from the compiled namespace. Grouped by concern:

**Forms** (`components/forms/`)
- `Button` — 5 variants (primary/secondary/ghost/subtle/inverse), 3 sizes, icons, block.
- `IconButton` — square single-icon button (ghost/subtle/outline/primary).
- `Input` — text field with label/hint/error/leading-icon.
- `Select` — native select with brand chevron.
- `Textarea` — multi-line field.
- `Checkbox` — with label + hint.
- `Radio` — grouped single choice.
- `Switch` — on/off toggle.

**Display** (`components/display/`)
- `Card` — content surface (flat/raised; default/sand/dark; optional media; interactive).
- `Badge` — status pill (neutral/accent/info/success/warning/danger/solid).
- `Tag` — squared filter/label chip (active, removable).
- `Stat` — large KPI figure with unit + trend delta (inverse for dark).

**Feedback** (`components/feedback/`)
- `Alert` — inline banner (info/success/warning/danger), title + dismiss.

**Navigation** (`components/navigation/`)
- `Tabs` — underlined controlled tab bar with count pills.

Each component directory has `<Name>.jsx`, `<Name>.d.ts` (props contract), `<Name>.prompt.md` (usage), and a `@dsCard` HTML showcase.

### Intentional additions
- **`Textarea`, `Tabs`** — standard primitives the brand will need for forms and product views; not explicitly in the guidelines.
- **`--success` / `--danger` status colors** — the brand defines no green/red; added (muted, palette-harmonious) because status feedback requires them. Flagged in `tokens/colors.css`.
- **`--font-mono`** — no brand mono face exists; a neutral system mono is provided for code/data.

---

## UI kits

- **`ui_kits/website/`** — high-fidelity recreation of **omnidian.com** homepage: sticky nav (with mobile menu), gradient-mesh hero, 6-item services grid, KPI stats band, Who We Serve, case-study cards, full-bleed CTA, footer, plus an interactive "Talk to an expert" contact modal. Composes the DS primitives. `index.html` is the interactive entry.

## Sample slides (`slides/`)

Brand-styled 16:9 (1280×720) slide templates, each a standalone `@dsCard` (group "Slides"): **title** (gradient-mesh cover), **section divider** (numbered, carbon blue), **stats** (KPI band on sand), **content + image**, **quote** (testimonial), **case study** (challenge/solution/result), and **closing/CTA** (full-bleed photo). Copy the HTML and swap content to build a deck.

---

## Foundation specimen cards (`guidelines/`)

Small `@dsCard` HTML specimens rendered on the Design System tab: color core/secondary/scales/status/gradients, type display/body/stats, spacing scale & effects, and brand logo/logomark/voice/photography.

---

## Root manifest / index

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import`s all tokens. **Consumers link this.** |
| `tokens/colors.css` | Palette, ramps, semantic aliases, gradients. |
| `tokens/typography.css` | Font stacks, weights, scale, tracking. |
| `tokens/spacing.css` | 4px grid, layout, modular grid. |
| `tokens/effects.css` | Radii, borders, shadows, motion. |
| `tokens/fonts.css` | Webfont import (Hanken Grotesk fallback). |
| `components/` | Forms, display, feedback, navigation primitives. |
| `ui_kits/website/` | omnidian.com recreation. |
| `slides/` | Brand-styled 16:9 sample slides (title, section, stats, content, quote, case study, closing). |
| `guidelines/` | Foundation specimen cards. |
| `assets/` | Logos, photography, partner logos. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent-Skills entry point. |

---

## Caveats

- **Fonts substituted.** Neue Haas Grotesk Display is licensed and not bundled; Hanken Grotesk (Google Fonts) is the shipped fallback. **Please upload the licensed Neue Haas Grotesk Display files.**
- **Logos are low-res web PNGs.** No vector logo or the proprietary gradient `.GRD` files were available. **Please provide SVG/EPS logos + GRD gradients.**
- **No product portal UI kit.** Only the marketing site had a real reference. The customer/asset-monitoring dashboard was not provided — **share screenshots, Figma, or code** and I'll add that kit.
- **Components are an authored standard set** (no source component inventory existed). If Omnidian has a real component library, point me to it and I'll align exact values.
- **Icons: Lucide recommended** as a substitute; no official Omnidian icon set exists in the sources.
