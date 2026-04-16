PROJECT: FAIR Website — Folks in AI and Research
TYPE: Multi-page static website (HTML + Tailwind CSS)
STATUS: Design complete in Google Stitch, now moving to code implementation

---

ABOUT FAIR:
FAIR (Folks in AI and Research) is a curated AI community based in Pune, India.
~250+ members. Founded 2025. Focused on paper reading circles, build sprints, 
open-source contributions, and technical talks. Not a casual meetup — selective 
membership, practitioner-first.

Website: Community-facing public site (not a dashboard or app).

---

DESIGN SYSTEM — ENFORCE STRICTLY:

Font: Inter (Google Fonts). 
  - Headings: 700–900 weight, letter-spacing -0.04em
  - Labels: UPPERCASE, letter-spacing +0.05em, font-bold, ~11px
  - Body: 400 weight, 16–18px, line-height 1.8

Colors:
  - Background:   #FAFAFA
  - Text:         #2E2E2E
  - Brand/Sage:   #5C5F58  ← primary brand color
  - Surface:      #E8E6E1  ← card/section background
  - Ghost/Border: #C6C7C0  ← dividers (use sparingly)
  - Dark section: #2E2E2E  ← inverted sections (events bg, apply header)

Rules (non-negotiable):
  - border-radius: 0px EVERYWHERE. No exceptions.
  - No box shadows. No gradients. No transitions except hover.
  - Hover states are INSTANT (transition: none).
  - Primary button hover: bg shifts from #5C5F58 → #2E2E2E instantly.
  - Form inputs: bottom-border ONLY (2px solid #2E2E2E). No 4-sided boxes.
  - Images/avatars: grayscale(100%) filter. On hover: grayscale off.
  - Section separation: background color shifts only. No explicit divider lines.
  - Depth via "tonal stacking": #FAFAFA → #E8E6E1 → #5C5F58 → #2E2E2E

Stack:
  - Pure HTML + Tailwind CSS (via CDN: cdn.tailwindcss.com)
  - Google Fonts: Inter
  - Material Symbols Outlined (for icons)
  - NO JavaScript frameworks. NO build tools. Just static HTML files.
  - Tailwind config is inline in each HTML file (custom colors, 0px radius override)

---

PAGES TO BUILD (6 total):

1. index.html — Homepage
   Sections: Navbar → Hero → Marquee ticker → About + Stats → 
   Events (dark bg) → Community Pillars → People scroll row → 
   Blog list → Footer

2. events.html — Events listing
   Sections: Navbar → Page header with filter chips (Upcoming/Past) → 
   3-col event cards grid → Archive list → Email notify CTA strip → Footer

3. people.html — Members page
   Sections: Navbar → Page header → Core team 4-col grid (grayscale portraits) → 
   Community member dense grid (with "YOU?" tile) → Dark spotlight quote → 
   Apply teaser → Footer

4. blog.html — Blog listing
   Sections: Navbar → Page header → Featured post (dark block) → 
   Editorial article list with sidebar categories → Footer

5. blog-post.html — Single article view
   Sections: Navbar → Post header with breadcrumb + meta → 
   Article body (asymmetric: 3col margin + 7col content + 2col sticky sidebar) → 
   Code blocks + pull quotes → Post footer prev/next → Footer

6. apply.html — Membership application
   Sections: Navbar → Dark header block → 
   Two-col layout (form left, benefits sidebar right) → 
   "What happens next" 3-step section → Footer

---

NAVBAR (same on all pages):
- Left: "FA\R" wordmark (font-black, tracking-[-0.04em], #2E2E2E)
  NOTE: The backslash in FA\R is intentional — it's part of the logo design.
- Center: About · Events · People · Blog · Apply
  (Active page gets underline or slight indicator)
- Right: "JOIN COMMUNITY" button — bg #5C5F58, white, font-bold uppercase, 
  sharp (0px radius), px-6 py-3. Hover: bg #2E2E2E instant.
- Sticky. bg #FAFAFA. Border-bottom: 1px solid #C6C7C0 on scroll (via JS).

FOOTER (same on all pages):
- bg #E8E6E1
- Left col (6/12): "FA\R" wordmark + tagline + "Pune, India"
- Col 2 (3/12): NAVIGATION — About, Events, People, Blog, Apply
- Col 3 (3/12): LEGAL — Privacy, Terms
- Add SOCIAL — Twitter/X, GitHub, LinkedIn (either 4th col or inline with Legal)
- Bottom bar: "© 2025 FAIR Community. All rights reserved."

---

COMPONENTS TO BUILD AS REUSABLES:

- Navbar (same HTML copy-pasted into all pages — no templating needed)
- Footer (same)
- Event card: date chip + format chip + title + speaker + desc + RSVP link
  → variant: SOLD OUT state (muted text color, no RSVP link)
- Blog article row: number + title + category chip + author + date
- Member avatar tile: grayscale square image + name + role
- Stat card: big number + label, border-top: 8px solid #5C5F58, bg #E8E6E1
- Category/format chip: bg #5C5F58 (filled) or bg #E8E6E1 (outlined), label-sm
- Form field: label (label-sm uppercase) + input (bottom-border only)

---

SPECIFIC IMPLEMENTATION NOTES:

Marquee ticker:
  <div style="overflow:hidden; white-space:nowrap;">
    <div style="display:inline-block; animation: scroll 40s linear infinite;">
      [content repeated twice for seamless loop]
    </div>
  </div>
  @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

Horizontal scroll (People page) — hide scrollbar:
  -ms-overflow-style: none;
  scrollbar-width: none;
  .scroll-container::-webkit-scrollbar { display: none; }

Input fields (Apply page):
  border: none;
  border-bottom: 2px solid #2E2E2E;
  background: transparent;
  padding-bottom: 12px;
  focus: background #D7D9D0, no outline ring

Dark section (Events, Apply header):
  bg #2E2E2E, all text white or #C6C7C0.
  Cards inside dark section: bg #3A3C37.
  Card hover: bg #5C5F58 instantly.

Social proof separator: use "/" character in #5C5F58, not a dot or bullet.

---

CONTENT (key copy):

Hero: "Where Pune's AI minds meet."
Sub: "FAIR is a collective of AI researchers, engineers, and builders in Pune — 
      building in public, learning together, shipping real work."
Stats: 250+ Members · 12+ Events · Pune & Online
About heading: "Not a meetup. A movement."
Events heading: "What's happening"
People heading: "The minds behind FAIR."
Blog heading: "From the community."
Apply heading: "FAIR is selective. That's the point."
Apply sub: "We're not a Discord with 10,000 lurkers. FAIR is a focused collective 
            of people who build, research, and contribute."

---

DELIVERABLE:
6 standalone HTML files. Each file is fully self-contained — inline Tailwind config, 
inline styles for marquee/scrollbar, Google Fonts link in <head>.
No external CSS files. No JS frameworks. Mobile responsive (single column on <768px).
Max page width: 1440px, centered, px-12 padding on desktop.