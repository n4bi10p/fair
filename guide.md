FIX PROMPT 1 — People Page : Fix the following issues on the FAIR People Page. Do NOT redesign anything — 
only apply the listed corrections. Keep all existing layout, spacing, and styling intact.

FIXES:

1. NAVBAR — WRONG CTA BUTTON:
   Change the "LOGIN" button to "JOIN COMMUNITY"
   Style: bg #5C5F58, white text, font-bold uppercase, sharp rectangle (0px radius), 
   px-6 py-3. Hover: bg #2E2E2E instant.
   Nav links must be: About · Events · People (active/underlined) · Blog · Apply

2. FOOTER — WRONG BRAND NAME:
   The footer currently reads "THE_MANUSCRIPT" — replace with "FA\R" 
   (the backslash is intentional, it's part of the logomark).
   Font: Inter, font-black, tracking-[-0.04em], text-3xl, color #2E2E2E.
   Footer tagline below it: "Folks in AI and Research. A community driven by curiosity 
   and the drive to build the future of intelligence."
   Footer nav columns: NAVIGATION (About, Events, People, Blog, Apply) | 
   LEGAL (Privacy, Terms) | SOCIAL (Twitter/X, GitHub, LinkedIn)

3. FOOTER — WRONG NAV LINKS:
   Replace any incorrect footer links (Peer Review, Submissions, Ethics, Masthead, 
   API Access, etc.) with the correct ones as listed in fix #2 above.

4. COMMUNITY MEMBER GRID — "YOU?" TILE:
   The "YOU?" tile is too small and getting lost. Make it 80×80px minimum, 
   bg #5C5F58, white text "YOU?" in font-black, center-aligned. 
   Add a small "+" icon above "YOU?" using the plus symbol character.

5. CORE TEAM SECTION LABEL:
   Ensure "CORE TEAM" label above "Who runs FAIR" is in label-sm style:
   font-bold, uppercase, tracking-widest, color #5C5F58, font-size 11px.

Output: The corrected full People Page HTML. Same layout — only the above 5 issues fixed.

FIX PROMPT 2 — Blog Listing + Article Page: Fix the following issues on the FAIR Blog page (which shows both the blog listing 
on the left and the article view on the right). Do NOT redesign the layout — 
only apply the listed corrections.

FIXES:

1. NAVBAR — COMPLETELY WRONG:
   The current navbar shows: RESEARCH / ARCHIVE / METHODOLOGY / DIRECTORY and 
   a "SUBMIT MANUSCRIPT" button. This is wrong.
   Replace with the standard FAIR navbar:
   - Left: "FA\R" wordmark (font-black, tracking-[-0.04em], text-2xl, #2E2E2E)
   - Center links: About · Events · People · Blog (active, underlined) · Apply
     Style: font-medium, color #2E2E2E, hover: instant bg #2E2E2E + white text
   - Right: "JOIN COMMUNITY" button — bg #5C5F58, white, font-bold uppercase, 
     sharp (0px radius), px-6 py-3. Hover: bg #2E2E2E instant.

2. FOOTER — WRONG BRAND + WRONG LINKS:
   Replace any incorrect footer brand name or links.
   Footer must have:
   - Left: "FA\R" wordmark (same style as navbar) + tagline + "Pune, India"
   - Column 1: NAVIGATION — About, Events, People, Blog, Apply
   - Column 2: LEGAL — Privacy, Terms
   - Column 3: SOCIAL — Twitter/X, GitHub, LinkedIn
   - Bottom bar: "© 2025 FAIR Community. All rights reserved."
   Footer background: #E8E6E1. Text: #2E2E2E.

3. BLOG LISTING — FEATURED POST NAV LABEL:
   The "WRITINGS" section label above "From the community." heading should be:
   font-bold, uppercase, tracking-widest, color #5C5F58, font-size 11px (label-sm).

4. ARTICLE VIEW — NAVBAR should match fix #1 above (same navbar, same brand).
   The article view's sidebar "VIEW PROFILE" button must be:
   bg #5C5F58, white text, font-bold, sharp, no border-radius.

5. ARTICLE CODE BLOCK:
   The code block background is correct (#2E2E2E) but ensure the language label 
   chip ("PYTHON") uses bg #5C5F58, white label-sm text — not the current styling.

Output: The corrected full Blog page HTML. Same split layout — only the above 5 fixes applied.

FIX PROMPT 3 — Apply / Membership Page : Fix the following issues on the FAIR Apply/Membership Page. 
Do NOT redesign anything — only apply the listed corrections.

FIXES:

1. FORM INPUTS — WRONG STYLE (most critical fix):
   All input fields currently have 4-sided box borders. This violates the design system.
   
   Change ALL inputs, textareas, and the select dropdown to:
   - Remove all border/outline/ring styling
   - Remove background box if it's white-with-border
   - Apply ONLY a bottom border: border-bottom: 2px solid #2E2E2E
   - Background: transparent (sits on #FAFAFA page background)
   - Padding: pb-3 (bottom only)
   - On focus: background shifts to #D7D9D0, still bottom-border only, no outline ring
   - Font: Inter, 16px, #2E2E2E
   - Placeholder text: #C6C7C0
   
   Apply this to: Full Name, Email, Based?, What do you do?, 
   What are you building?, Relevant Link, Why join?, and the Select dropdown.

2. NAVBAR — VERIFY:
   Confirm navbar shows: About · Events · People · Blog · Apply (Apply should be active)
   CTA button: "JOIN COMMUNITY" — bg #5C5F58, white, font-bold, sharp.
   If it's showing Research/Community/Journal/Archive — replace with the correct links above.

3. SUBMIT BUTTON — SPACING:
   Add more top margin above the Submit button (mt-12 minimum).
   Button text should read: "Submit Application →" — not just "SUBMIT APPLICATION".
   Style: bg #5C5F58, white, font-black, uppercase, px-10 py-5, sharp. 
   Hover: bg #2E2E2E instant.

4. SIDEBAR BENEFITS LIST:
   Each benefit item should have NO bullet points or icons — pure text rows.
   Separate each item with: border-top: 1px solid #C6C7C0 at 30% opacity (ghost line).
   Padding: py-6 each item.
   Item label (e.g. "COMPUTE ACCESS", "CLOSED WORKSHOPS"): label-sm, uppercase, 
   font-bold, #5C5F58. Description below: 14px, #2E2E2E, font-regular.

5. "WHAT HAPPENS NEXT" STEP NUMBERS:
   The large ghost numbers (01, 02, 03) should be:
   color: #E8E6E1 (very light, almost invisible against the white bg — ghost effect)
   font-size: 80px, font-black.
   They sit ABOVE the step title, not beside it.

6. FOOTER:
   - Brand: "FA\R" (not any other name)
   - Copyright: "© 2025 FAIR Community. All rights reserved."
   - Nav columns: NAVIGATION | LEGAL | SOCIAL (as per standard FAIR footer)
   - Background: #E8E6E1

Output: The corrected full Apply Page HTML. Same layout — only the above 6 issues fixed.

FIX PROMPT 4 — Events Page (minor polish) : Polish the following minor issues on the FAIR Events Page. 
The page is mostly correct — only apply these small fixes.

FIXES:

1. EVENT CARD HEIGHTS — INCONSISTENT:
   All event cards in the grid must have equal fixed height.
   Set every card to: min-height: 280px with flex flex-col justify-between.
   This ensures the "RSVP →" link always anchors to the bottom regardless of content length.

2. "SOLD OUT" STATE — WRONG COLOR:
   The "SOLD OUT" text on the last card uses a color that's too red/bright.
   Replace with: color #8A5A44 (muted terracotta — stays within the monochrome feel).
   The "RSVP →" on that card should be hidden and replaced with the SOLD OUT label only.
   Card background on the sold-out card: bg #E8E6E1 (lighter than normal cards) to 
   subtly signal unavailability.

3. EMAIL NOTIFY STRIP — INPUT STYLE:
   The email input in the "Don't miss the next one." CTA strip should follow the 
   design system: bottom-border only (2px solid white, since it's on a dark bg).
   Remove any 4-sided box styling. Background transparent on the dark strip.
   Placeholder color: white at 50% opacity.

4. ARCHIVE SECTION — CATEGORY CHIPS:
   Each chip in the archive list (WORKSHOP, TALK, SPRINT, etc.) should be:
   bg #E8E6E1, text #2E2E2E, label-sm, uppercase, font-bold, sharp, px-3 py-1.
   They currently look too rounded or incorrectly colored on some rows — enforce 0px radius.

5. FOOTER COPYRIGHT:
   Update "© 2024 FAIR COMMUNITY" → "© 2025 FAIR COMMUNITY"

Output: The corrected full Events Page HTML. Same layout — only the above 5 fixes applied.

FIX PROMPT 5 — Homepage (final refinements) : Apply final polish to the FAIR Homepage. Do not redesign. Only apply these fixes.

FIXES:

1. SOCIAL PROOF ROW:
   The dots between "250+ Members · Pune, India · Est. 2025" must be changed to 
   a "/" slash character, color #5C5F58. Remove the filled circle dots completely.

2. MARQUEE STRIP:
   Remove the border-top and border-bottom lines from the marquee strip.
   The strip boundary is defined solely by its background color bg #E8E6E1 — 
   no explicit borders needed. Delete any border-y or border-t/border-b classes.

3. STAT CARDS:
   All three stat cards must have the same background: bg #E8E6E1.
   Remove the alternating #F3F2EF background on the middle card.
   "Pune & Online" text in the third card — if it overflows, reduce font-size to 36px 
   and let it wrap to two lines naturally. Keep font-black and tracking-[-0.04em].

4. PEOPLE SECTION SCROLLBAR:
   The horizontal scroll row must completely hide the scrollbar on all browsers.
   Add these styles to the scroll container:
   -ms-overflow-style: none;
   scrollbar-width: none;
   And add ::-webkit-scrollbar { display: none; } in a <style> block.

5. FOOTER COPYRIGHT:
   Change "© 2024" to "© 2025"

6. NAVBAR BACKGROUND:
   The navbar should be plain bg #FAFAFA with NO tonal override class. 
   Remove any bg-[#E8E6E1] or tonal-shift class applied to the nav element.
   On scroll, add a subtle border-bottom: 1px solid #C6C7C0 via a JS scroll listener.

Output: The corrected full Homepage HTML. Same layout — only these 6 fixes applied.