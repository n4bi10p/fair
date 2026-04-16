PROJECT: FAIR Web App — Folks in AI and Research
TYPE: Full-stack web application with public site + admin CMS
STACK: Next.js 14 (App Router) + Supabase + Tailwind CSS

---

ARCHITECTURE OVERVIEW:

Public Routes (no auth):
  /                    → Homepage
  /events              → Events listing
  /events/[slug]       → Single event page
  /people              → Members page
  /blog                → Blog listing
  /blog/[slug]         → Single blog post
  /apply               → Application form

Protected Routes (admin only):
  /admin               → Admin dashboard (redirect to /admin/login if not authed)
  /admin/login         → Admin login page (email + password, no public signup)
  /admin/events        → List all events, create/edit/delete
  /admin/events/new    → Create new event
  /admin/events/[id]   → Edit existing event
  /admin/blog          → List all blog posts, create/edit/delete
  /admin/blog/new      → Create new blog post
  /admin/blog/[id]     → Edit existing blog post

---

SUPABASE SETUP:

Auth:
  - Email + password auth only. No OAuth/social login.
  - Only ONE admin user (manually created in Supabase dashboard).
  - No public signup — /admin/login is the only entry point.
  - Use Supabase Auth with middleware to protect all /admin/* routes.
  - Middleware: if user is not logged in and hits /admin/* → redirect to /admin/login.
  - If already logged in and hits /admin/login → redirect to /admin dashboard.

Database Tables:

  TABLE: events
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
    title       text NOT NULL
    slug        text UNIQUE NOT NULL  ← auto-generated from title
    description text
    body        text  ← rich content / markdown
    event_date  timestamp NOT NULL
    location    text  ← "Pune, India" or "Online" or "Hybrid"
    format      text  ← "WORKSHOP" | "TALK" | "PAPER CIRCLE" | "BUILD SPRINT" | "LAB"
    rsvp_link   text  ← external URL (Lu.ma, Meetup, etc.)
    is_sold_out boolean DEFAULT false
    is_published boolean DEFAULT false
    cover_image text  ← Supabase Storage URL (optional)
    created_at  timestamp DEFAULT now()

  TABLE: blog_posts
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
    title       text NOT NULL
    slug        text UNIQUE NOT NULL
    excerpt     text  ← 1-2 sentence summary shown in listing
    body        text  ← markdown content
    author_name text
    author_role text
    cover_image text  ← Supabase Storage URL (optional)
    tags        text[]  ← array: ["NLP", "Research", "Engineering"]
    is_published boolean DEFAULT false
    published_at timestamp
    created_at  timestamp DEFAULT now()

  RLS POLICIES:
    - events: public SELECT where is_published = true
              admin full access (all operations) when authenticated
    - blog_posts: public SELECT where is_published = true
                  admin full access when authenticated

  Supabase Storage:
    - Bucket: "fair-media" (public bucket)
    - Used for event cover images and blog post images
    - Admin uploads images via the admin panel

---

ADMIN PANEL UI:

Style: Keep the FAIR design system (same colors, fonts, zero border-radius).
The admin panel is minimal and functional — not a full redesign.

Admin Dashboard (/admin):
  - Simple stats row: Total Events | Published Events | Total Posts | Published Posts
  - Two sections: "Recent Events" list + "Recent Posts" list
  - Each item has: Title | Status chip (PUBLISHED/DRAFT) | Edit button | Delete button
  - "New Event" button and "New Post" button — prominent, top right

Admin Login (/admin/login):
  - Centered card on dark (#2E2E2E) full-page background
  - "FA\R" wordmark top center
  - "Admin Access" label-sm below
  - Email field (bottom-border only style) + Password field (bottom-border only)
  - "Sign In →" button — bg #5C5F58, white, full-width, font-bold
  - No "Forgot password", no "Sign up" link — nothing else on this page

Event Form (/admin/events/new and /admin/events/[id]):
  Fields:
  - Title (text input)
  - Slug (auto-generated from title, but editable — show greyed out helper)
  - Event Date & Time (datetime-local input)
  - Location (text input)
  - Format (select: WORKSHOP / TALK / PAPER CIRCLE / BUILD SPRINT / LAB)
  - RSVP Link (url input)
  - Short Description (textarea, 2-3 lines — shown on event card)
  - Body / Full Details (markdown textarea — shown on single event page)
  - Cover Image (file upload → Supabase Storage)
  - Is Sold Out? (toggle/checkbox)
  - Published? (toggle — draft by default)
  
  Save button: "Save Draft" (is_published: false) and 
               "Publish" (is_published: true) — two separate buttons

Blog Post Form (/admin/blog/new and /admin/blog/[id]):
  Fields:
  - Title (text input)
  - Slug (auto-generated, editable)
  - Author Name (text input)
  - Author Role (text input — "ML Engineer at FAIR")
  - Excerpt (textarea, 2 lines max — shown in blog listing)
  - Tags (text input, comma-separated → stored as array)
  - Cover Image (file upload → Supabase Storage, optional)
  - Body (markdown textarea — large, main writing area)
  - Published? (toggle — draft by default)
  - Published Date (auto-set to now() when first published)
  
  Save button: "Save Draft" and "Publish" — two buttons same as events form

---

PUBLIC PAGES — DATA FETCHING:

All public pages fetch from Supabase directly using the Supabase JS client.

Homepage (/):
  - Fetch latest 4 events where is_published = true, ordered by event_date ASC
  - Fetch latest 3 blog posts where is_published = true, ordered by published_at DESC

Events page (/events):
  - Fetch all events where is_published = true
  - Separate into upcoming (event_date >= now) and past (event_date < now)
  - Upcoming: ordered by event_date ASC
  - Past: ordered by event_date DESC

Single event (/events/[slug]):
  - Fetch single event by slug where is_published = true
  - Render body as markdown (use react-markdown or marked)
  - Show RSVP button if rsvp_link exists and is not sold out

Blog listing (/blog):
  - Fetch all posts where is_published = true, ordered by published_at DESC
  - Show: title, excerpt, author, published_at, tags

Single post (/blog/[slug]):
  - Fetch post by slug where is_published = true
  - Render body as markdown with syntax highlighting (use react-markdown + rehype-highlight)
  - Show: title, author, published_at, tags, cover_image if exists

Apply page (/apply):
  - Static page — form submits to a Supabase table "applications"
  - TABLE: applications (id, name, email, location, role, building, link, 
    how_heard, why_join, created_at, status DEFAULT 'pending')
  - Admin can view applications in /admin/applications (stretch goal — 
    can be a simple table view)

---

FILE STRUCTURE (Next.js App Router):

fair-website/
├── app/
│   ├── layout.tsx              ← root layout with Inter font
│   ├── page.tsx                ← homepage
│   ├── events/
│   │   ├── page.tsx            ← events listing
│   │   └── [slug]/page.tsx     ← single event
│   ├── blog/
│   │   ├── page.tsx            ← blog listing
│   │   └── [slug]/page.tsx     ← single post
│   ├── people/page.tsx
│   ├── apply/page.tsx
│   └── admin/
│       ├── layout.tsx          ← admin layout (checks auth)
│       ├── login/page.tsx
│       ├── page.tsx            ← admin dashboard
│       ├── events/
│       │   ├── page.tsx        ← list events
│       │   ├── new/page.tsx    ← create event
│       │   └── [id]/page.tsx   ← edit event
│       └── blog/
│           ├── page.tsx        ← list posts
│           ├── new/page.tsx    ← create post
│           └── [id]/page.tsx   ← edit post
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── EventCard.tsx
│   ├── BlogRow.tsx
│   └── admin/
│       ├── AdminNav.tsx
│       └── MarkdownEditor.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts           ← browser client
│   │   └── server.ts           ← server client (for SSR)
│   └── utils.ts                ← slugify(), formatDate(), etc.
├── middleware.ts               ← protects /admin/* routes
└── .env.local                  ← NEXT_PUBLIC_SUPABASE_URL, SUPABASE_ANON_KEY

---

KEY PACKAGES:

  next@14
  @supabase/supabase-js
  @supabase/ssr           ← for server-side auth + middleware
  react-markdown          ← render markdown body on public pages
  rehype-highlight        ← syntax highlighting in blog posts
  lucide-react            ← minimal icons (use sparingly)
  tailwindcss

---

ENVIRONMENT VARIABLES (.env.local):
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

---

DESIGN SYSTEM (same as before — enforce on ALL pages including admin):
  Font: Inter
  bg: #FAFAFA | text: #2E2E2E | brand: #5C5F58 | surface: #E8E6E1 | ghost: #C6C7C0
  border-radius: 0px everywhere
  No shadows. No gradients. Instant hover states.
  Primary button hover: #5C5F58 → #2E2E2E instantly.
  Form inputs on public site: bottom-border only.
  Admin form inputs: can use full border (bg #E8E6E1) for better usability.

---

START ORDER FOR CODING AGENT:
1. Set up Next.js project + Tailwind + Supabase client
2. Create middleware.ts for admin route protection
3. Build Navbar and Footer components
4. Build public pages (homepage first, then events, blog, people, apply)
5. Build admin login page
6. Build admin dashboard
7. Build event CRUD forms
8. Build blog post CRUD forms
9. Connect all public pages to Supabase data fetching
10. Test auth flow end to end