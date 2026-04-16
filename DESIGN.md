# Design System Specification

## 1. Overview & Creative North Star
**The Creative North Star: "The Technical Manuscript"**

This design system is a digital translation of high-end, Swiss-style AI research journals. It rejects the "bubbly" friendliness of modern SaaS in favor of a sharp, intentional, and academic authority. It is designed for practitioners who value signal over noise. 

The aesthetic is driven by **"Absolute Geometry."** By enforcing a strict zero-radius constraint and a monochrome-first palette, we create a sense of structural integrity. We break the "template" look through aggressive typographic scales and intentional asymmetry—using whitespace not just as a gap, but as a structural element that directs the eye through complex technical data.

---

### 2. Colors & Tonal Logic
The palette is rooted in a "Sage-Monochrome" spectrum. It is designed to feel like recycled paper and oxidized metal—technical, yet grounded.

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `primary-container` | `#5C5F58` | Key brand moments, active states, primary CTAs. |
| **Surface** | `background` | `#FAFAFA` | The primary canvas. Clean, off-white. |
| **Text** | `on-surface` | `#2E2E2E` | High-contrast charcoal for maximum legibility. |
| **Accent** | `secondary-container`| `#E8E6E1` | Subtle section backgrounds and secondary UI elements. |
| **Outline** | `outline-variant` | `#C6C7C0` | Ghost lines and structural dividers (used sparingly). |

**The "No-Radius" Mandate:** 
All containers, buttons, and inputs must have a `0px` border-radius. No exceptions. Sharp corners convey precision and technical rigor.

**The "No-Line" Rule:**
Prohibit the use of 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit against a `background` canvas to create a "block" effect without the need for lines.

**Surface Hierarchy:**
Layering is achieved through tonal nesting. To define a "card" or "module," place a `#E8E6E1` (Accent) block inside a `#FAFAFA` (Background) section. The contrast is the container.

---

### 3. Typography
The system uses **Inter** as the primary typeface, leveraging its "Display" qualities for high-impact headers. 

- **Display & Headlines:** Set in Heavy weights (700-900) with a `-2%` to `-4%` letter-spacing (kerning). This creates a "block" of text that feels like a masthead.
- **Body:** Set in Regular (400) for long-form research reading.
- **Labels:** Use `label-sm` for metadata and technical specs, often in all-caps with increased letter-spacing (`+5%`) to contrast the tight headlines.

| Token | Size | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- |
| `display-lg` | 3.5rem | 900 | -0.04em |
| `headline-md`| 1.75rem | 700 | -0.02em |
| `title-sm` | 1.0rem | 600 | 0 |
| `body-md` | 0.875rem | 400 | 0 |
| `label-sm` | 0.6875rem | 500 | +0.05em (Uppercase) |

---

### 4. Elevation & Depth
In a system with **zero shadows** and **zero gradients**, depth is architectural. We use "Tonal Stacking."

- **The Layering Principle:** Treat the UI as sheets of matte paper stacked atop one another. 
  - Level 0: `background` (#FAFAFA)
  - Level 1: `secondary-container` (#E8E6E1) - *For nested modules*
  - Level 2: `primary-container` (#5C5F58) - *For high-priority callouts*
- **Ghost Borders:** If a separation is functionally required (e.g., in a dense data table), use the `outline-variant` at 20% opacity. It should be felt, not seen.
- **Asymmetric Grid:** Avoid centered layouts. Align content to a 12-column grid, but leave the first 2 or 3 columns empty to create an editorial "margin" for titles or metadata.

---

### 5. Components

**Buttons**
- **Primary:** Background `#5C5F58`, Text `#FFFFFF`. Sharp corners. Heavy weight text.
- **Secondary:** Background `#E8E6E1`, Text `#2E2E2E`. Sharp corners.
- **Interaction:** On hover, the primary button shifts to `#2E2E2E` (Black Charcoal). No transition easing—instant state changes feel more "mechanical" and precise.

**Input Fields**
- **Structure:** No 4-sided boxes. Use a bottom-border only (`2px` solid `#2E2E2E`) or a solid block of `#E8E6E1`.
- **States:** Focus state should change the background to a subtle tint of the primary sage (`#D7D9D0`).

**Cards & Content Modules**
- **Rule:** Forbid divider lines between list items. Use vertical padding (`spacing-scale-8`) or alternating tonal backgrounds to separate items.
- **Imagery:** All images and member avatars must be rendered in **Grayscale**. High-contrast, moody photography only.

**Data Chips**
- Small, rectangular blocks of `#5C5F58` with white `label-sm` text. These should look like labels on a circuit board or a filing system.

---

### 6. Do's and Don'ts

**Do:**
- Use extreme whitespace to separate different research topics.
- Keep all iconography strictly 1.5pt stroke weight, sharp corners only.
- Align text to a rigorous baseline grid.
- Use "Sage" (#5C5F58) sparingly as a "functional" color to highlight active research or data points.

**Don't:**
- **Never use border-radius.** Even a 2px radius breaks the Swiss/Technical ethos.
- **Never use shadows.** Depth must be achieved through color blocks.
- **Avoid "Friendly" Copy.** The tone should be objective, technical, and concise.
- **No Gradients.** Even subtle ones. We celebrate the flatness of the screen.