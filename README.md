<div align="center">
  <br/>
  <img src="https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16"/>
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4"/>
  <img src="https://img.shields.io/badge/Fabric.js%206-FF6B6B?style=for-the-badge&logo=fabricdotjs&logoColor=white" alt="Fabric.js 6"/>
  <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=react&logoColor=white" alt="Zustand"/>
  <img src="https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="React Query"/>
  <img src="https://img.shields.io/badge/nextauth-000000?style=for-the-badge&logo=auth0&logoColor=white" alt="Next Auth"/>
  <br/><br/>
</div>

<h1 align="center">🎨 Memorii</h1>

<h3 align="center">
  Digital Group e-Cards & e-Memory Books Platform
</h3>

<p align="center">
  <a href="https://amemorii.com/" target="_blank">
    <img src="https://img.shields.io/badge/LIVE-https%3A%2F%2Famemorii.com-08A2A6?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
</p>

<p align="center">
  <i>Celebrate moments. Create memories. Cherish forever.</i>
</p>

<p align="center">
  A full-featured digital platform for creating, customizing, and sharing collaborative group e-cards and interactive flipbook-style e-memory books — with multi-contributor support, rich canvas editing, and seamless sharing.
</p>

<br/>

---

## ✨ Overview

**Memorii** is a modern web application that transforms how people celebrate special occasions together. Unlike traditional single-sender e-cards, Memorii enables **group collaboration** — multiple friends, family members, or colleagues can contribute messages, photos, and memories to a single digital keepsake.

Whether it's a birthday, wedding, retirement, farewell, or memorial, Memorii provides a beautiful, intuitive editor where creators can design and invite others to co-create a lasting digital memory.

### What makes Memorii stand out

- **Canvas-Based Editor** — A full drag-and-drop editor powered by Fabric.js 6, supporting rich text, images, stickers, layers, undo/redo, and more
- **Group Collaboration** — Share contributor links so anyone can add their message without needing an account
- **Interactive Flipbook** — Memory books rendered with realistic page-turning animations via react-pageflip
- **Professional-Grade UI** — Polished interface built with shadcn/ui, GSAP animations, and smooth Lenis scrolling
- **PDF Export** — High-resolution A4 PDF downloads with QR codes for printed keepsakes

<br/>

## 🖼️ Screenshots

<div align="center">
  <table>
    <tr>
      <td width="50%" align="center" valign="top">
        <strong>🏠 Landing Page</strong>
        <br/>
        <a href="https://amemorii.com/" target="_blank">
          <img src="images/amemorii_landing_page.png" alt="Landing Page" width="95%"/>
        </a>
        <br/>
        <sub>Hero section with marquee, GSAP animations, and call-to-action</sub>
      </td>
      <td width="50%" align="center" valign="top">
        <strong>🎨 Template Designs</strong>
        <br/>
        <a href="https://amemorii.com/templates" target="_blank">
          <img src="images/amemorii_designs_page.png" alt="Designs Page" width="95%"/>
        </a>
        <br/>
        <sub>Browse dozens of templates by category & occasion</sub>
      </td>
    </tr>
    <tr>
      <td width="50%" align="center" valign="top">
        <strong>✏️ Canvas Editor</strong>
        <br/>
        <a href="https://amemorii.com/" target="_blank">
          <img src="images/amemorii_ecard_editor.png" alt="e-Card Editor" width="95%"/>
        </a>
        <br/>
        <sub>Fabric.js 6 drag-and-drop editor with text, images & stickers</sub>
      </td>
      <td width="50%" align="center" valign="top">
        <strong>🔍 Preview & Send</strong>
        <br/>
        <a href="https://amemorii.com/" target="_blank">
          <img src="images/amemorii_ecard_preview.png" alt="e-Card Preview" width="95%"/>
        </a>
        <br/>
        <sub>Review, invite contributors, and share your digital keepsake</sub>
      </td>
    </tr>
    <tr>
      <td width="50%" align="center" valign="top" colspan="2">
        <strong>📬 Animated Envelope — Received Card</strong>
        <br/>
        <a href="https://amemorii.com/" target="_blank">
          <img src="images/amemorii_receieved_animation.png" alt="Received Animation" width="50%"/>
        </a>
        <br/>
        <sub>Beautiful animated envelope opening experience for card recipients</sub>
      </td>
    </tr>
  </table>
</div>

<br/>

## 🚀 Key Features

| Area | Features |
|------|----------|
| 🎴 **e-Cards** | Single or multi-page digital cards with rich text, images, stickers, and customizable backgrounds |
| 📖 **e-Memory Books** | Flipbook-style multi-page memory books with grid/vertical layouts, prompts, and guest signatures |
| 👥 **Group Collaboration** | Invite unlimited contributors via unique links — no sign-up required for guests |
| 🎨 **Canvas Editor** | Full Fabric.js 6 drag-and-drop editor with text, images, stickers, layers, undo/redo, copy/paste |
| 🖼️ **Template Library** | Dozens of professionally designed templates organized by category and occasion |
| 🔐 **Authentication** | Email/password auth, Google OAuth, OTP verification, password reset flow |
| 📊 **User Dashboard** | Manage active cards, memory books, drafts, sent items, received items, and account settings |
| 🖨️ **PDF Export** | Download high-resolution A4 PDF with embedded QR codes for physical keepsakes |
| 🔗 **Shareable Links** | Generate unique contributor and recipient links for email, WhatsApp, or social media sharing |
| ↩️ **Undo/Redo** | Per-page undo/redo history stacks for a seamless editing experience |
| 🎬 **Flipbook Preview** | Interactive page-flip animation for memory books with realistic corner curl |
| 🎟️ **Coupon System** | Dynamic promotional banners with marquee ribbons and checkout coupons |
| 📱 **Responsive Design** | Fully responsive with mobile-optimized drawers, pagination, and touch-friendly controls |
| ✍️ **Guest Signatures** | Contributors can sign their name on contributions for attribution |
| ❓ **Memory Prompts** | Curated questions that guide contributors to create more personal and meaningful entries |
| ⌨️ **Keyboard Shortcuts** | Input-aware Ctrl+C/V, Copy/Paste, and navigation shortcuts |
| 💾 **Auto-Save** | Automatic save with visual status indicator on page changes |

<br/>

## 🛠 Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **[Next.js 16](https://nextjs.org/)** (App Router) | React framework with server-side rendering, streaming, and prefetching |
| **[React 19](https://react.dev/)** | UI library with latest concurrent features |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first CSS with `tw-animate-css` plugin |
| **[shadcn/ui](https://ui.shadcn.com/)** (New York) | Accessible, composable UI primitives |
| **[Fabric.js 6](http://fabricjs.com/)** | Interactive HTML5 canvas for the card & memory book editors |
| **[Zustand](https://github.com/pmndrs/zustand)** | Lightweight state management with localStorage persistence |
| **[TanStack React Query](https://tanstack.com/query)** | Server state management, caching, and automatic invalidation |
| **[Axios](https://axios-http.com/)** | HTTP client with request/response interceptors |
| **[next-auth](https://next-auth.js.org/)** | Authentication with credentials & Google OAuth providers |
| **[react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** | Type-safe form validation |
| **[react-pageflip](https://github.com/NinjaDanz3/react-pageflip)** | Flipbook page-turning with realistic corner curl |
| **[GSAP](https://gsap.com/) + [Lenis](https://lenis.studiofreight.com/)** | Professional animations & smooth scrolling |
| **[lucide-react](https://lucide.dev/)** | Consistent icon library |
| **[jsPDF](https://github.com/parallax/jsPDF)** | PDF generation for A4 exports |
| **[react-qr-code](https://github.com/rosskhanas/react-qr-code)** | QR code generation |
| **[sonner](https://sonner.emilkowal.ski/)** | Toast notifications |
| **[Vaul](https://vaul.emilkowal.ski/)** | Mobile drawer component |
| **[Embla Carousel](https://www.embla-carousel.com/)** | Lightweight carousel/slider |
| **[@dnd-kit](https://dndkit.com/)** | Drag-and-drop layer reordering |

### State Architecture

| Store | Responsibility |
|-------|---------------|
| **Editor Store** | Central canvas state — pages, current page, loading states, shared/owner mode |
| **Undo/Redo Store** | Per-page undo/redo history stacks for granular editing control |
| **Card Type Store** | Persisted card type selection (e-card vs memory book) |
| **Template Store** | Active template data and selection |
| **Guest Stores** | Guest tokens and invited user hashes (persisted to localStorage) |
| **Pages Image Store** | Captured canvas images for preview rendering |
| **Memory Stores** | Memory question selection and text object targeting |

### Key Libraries

| Library | Use Case |
|---------|----------|
| react-fast-marquee | Coupon ribbon animations |
| @gfazioli/mantine-marquee | Marquee banners |
| input-otp | OTP code input |
| class-variance-authority | UI component variants |

<br/>

## 🏗 Architecture

The application follows **Next.js App Router** conventions with a well-organized route group structure:

```
Route Groups:
├── (public)        🌐 Landing page, templates, FAQ, contact, policies
├── (auth)          🔐 Login, register, password reset, OTP verification
├── (Edit)          ✏️ Editor, preview, send, received for e-cards & memory books
├── (invitation)    👥 Shared/invited contributor routes (no login required)
├── dashboard       📊 User dashboard with management panels
├── admin           🏛️ Admin preview pages for review
└── api             🔌 API routes (NextAuth, revalidation)
```

### Authentication Flow

- **Credentials** — Register with email/password → auto-login
- **Google OAuth** — One-click sign-in/sign-up via Google
- **Password Reset** — Email → OTP verification → reset password
- **Middleware** — Protected routes redirect unauthenticated users; auth routes redirect authenticated users

### Collaborative Editing Architecture

A core architectural challenge was enabling **multi-user collaboration** without a real-time backend:

1. **Creator Mode** — Full editing control; all canvas objects are selectable and editable
2. **Invited/Contributor Mode** — Guests can add messages, photos, and signatures via a unique invite link; changes are persisted immediately
3. **Guest Tracking** — Each contributor is identified by a unique hash stored in localStorage, ensuring their additions are attributed while remaining anonymous to other contributors
4. **Auto-Save** — Changes are automatically saved via dedicated API hooks with visual status indicators

### Canvas Editor Architecture

The Fabric.js editor powers both e-cards and memory books:

- **Card Editor** — Free-form canvas with text, images, stickers, and full layer management
- **Memory Editor** — Structured book layouts (grid, vertical) with dedicated prompt/answer zones and image upload areas
- **Shared Editor Components** — Text insertion (top/center/bottom positions), image upload with descriptions, sticker library with search, background color picker, and signature overlays
- **Undo/Redo** — Per-page history stack enabling granular reversal of editing actions

### Data Flow

```
User Action → Zustand Store Update → Canvas Render (Fabric.js)
                                  → Auto-Save Trigger → React Query Mutation
                                                      → Cache Invalidation
```

<br/>

## ⚡ Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd memorii

# Install dependencies
npm install

# Create environment file and populate with required variables
# (See the Environment Variables section below)

# Start development server
npm run dev
```

### Environment Variables

> **Note:** You'll need access to the project's environment configuration. Contact the project maintainer for the required credentials.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_BASE_URL` | ✅ | Backend API base URL |
| `NEXTAUTH_URL` | ✅ | Application URL |
| `NEXTAUTH_SECRET` | ✅ | NextAuth JWT encryption secret |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | ❌ | Google OAuth client ID |
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | ❌ | Google Analytics ID |

### Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

<br/>

## 📸 Feature Highlights

### 🎴 e-Card Editor

Create personalized digital greeting cards with:

- **Rich Text** — 60+ Google Fonts (Alex Brush, Montserrat, Playfair Display, Poppins, and more)
- **Images** — Upload and position images with drag-and-drop
- **Stickers** — Built-in SVG sticker library with categories
- **Layers** — Full layer management with drag-and-drop reordering (@dnd-kit)
- **Text Positioning** — Insert text at top, center, or bottom of canvas
- **Background Colors** — Custom background per page
- **Multi-Page** — Add, delete, and navigate between pages
- **Lock/Unlock** — Prevent accidental edits on finished objects

### 📖 e-Memory Book

Interactive flipbook memory books with:

- **Realistic Page Turning** — Powered by react-pageflip with corner curl animation
- **Layout Selection** — Choose from grid (2-column) or vertical layouts
- **Memory Prompts** — Pre-written questions guiding contributors to share stories
- **Image Upload Zones** — Dedicated areas for contributor photos
- **Guest Signatures** — Name overlays attributing contributions
- **Full PDF Export** — Complete book export as A4 PDF with QR code

### 👥 Group Collaboration Workflow

```
1. Creator picks template → customizes design → generates invite link
2. Shares link via email, WhatsApp, or social media
3. Contributors add messages, photos, answer prompts (no sign-up needed)
4. Creator reviews final card/book → sends to recipient
5. Recipient views a beautiful animated keepsake
```

### 🔐 Authentication System

- **Email/Password Registration** — With auto-login on success
- **Google OAuth** — One-click authentication
- **Forgot Password** — Email OTP verification flow
- **OTP Verification** — Dedicated OTP input with auto-submit

### 📊 User Dashboard

- **Stats Overview** — Quick glance at active cards, drafts, sent, and received
- **Card Management** — Edit, preview, delete with confirmation dialogs
- **PDF Download** — One-click PDF export with embedded QR codes
- **Profile Management** — Update name, email, and avatar
- **Account Deletion** — With confirmation safeguards

<br/>

## 💡 Design Decisions & Challenges

### Why Fabric.js over a simpler approach?

The project required a full canvas editing experience with object selection, manipulation, layers, and complex text/image interactions. Fabric.js provided the mature API necessary for:

- **Per-object controls** — Move, scale, rotate, and style individual elements
- **Serialization** — Canvas state serialized to JSON for persistence and API transport
- **Custom properties** — Extended fabric objects with custom data (contributor hashes, image descriptions, signature names)
- **Clipboard support** — Native Ctrl+C/V for copy-paste across pages

### Collaborative editing without WebSockets

Rather than implementing real-time collaboration (which would add significant complexity), the design opted for a **save-and-refresh** model where contributors see each other's changes after saving. This decision:

- Kept the architecture simpler and more reliable
- Eliminated the need for WebSocket infrastructure
- Provided a perfectly adequate UX for asynchronous group card creation

### Per-page undo/redo

A challenging requirement was undoing changes on a per-page basis without affecting other pages. The solution was a **map-based history store** where each page index maintains its own undo/redo stacks. This required careful management of canvas state serialization and restoration.

### Guest contributor system

Allowing unauthenticated users to edit a canvas while tracking their contributions required a **dual-token approach**:
- A persistent **guest token** generated on first visit and stored in localStorage
- An **invited user hash** embedded in the invite URL for identifying specific contributions
- Objects on the canvas are tagged with the contributor's hash, enabling attribution without exposing identities to other contributors

<br/>

## 🧠 Key Learnings

- **Canvas state management at scale** — Managing complex Fabric.js state across multiple pages with undo/redo, auto-save, and collaborative edits
- **Route group architecture** — Organizing a large Next.js application with multiple user roles (owner, contributor, admin, recipient) into clean route groups
- **Persisted state patterns** — Balancing client-side state (Zustand) with server state (React Query) for a seamless user experience
- **Mobile-first editor challenges** — Adapting a complex canvas editor for mobile devices with drawers, touch events, and responsive layouts
- **PDF generation with dynamic content** — Generating A4 PDFs with embedded QR codes, images, and proper pagination from canvas snapshots

<br/>

## 🏆 Project Status

This is a **production-grade application** currently deployed and serving users. The codebase demonstrates:

- Clean, modular architecture with separation of concerns
- Type-safe development practices with Zod validation
- Modern React patterns including server components, hooks, and context
- Comprehensive state management with multiple Zustand stores
- Professional UI/UX with animations, responsive design, and accessibility considerations

<br/>

## 📫 Contact & Live Demo

<div align="center">
  <p>
    <strong>🌐 Visit the live site:</strong>
    <br/>
    <a href="https://amemorii.com/" target="_blank">
      <img src="https://img.shields.io/badge/amemorii.com-08A2A6?style=for-the-badge&logo=vercel&logoColor=white" alt="amemorii.com"/>
    </a>
  </p>
  <br/>
  <p>
    <strong>Built with ❤️ by <a href="https://github.com/ArunRoy404">ArunRoy404</a></strong>
  </p>
  <p>
    <a href="https://github.com/ArunRoy404">
      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
    </a>
  </p>
  <br/>
  <p>
    <i>Next.js 16</i> &bull; <i>React 19</i> &bull; <i>Tailwind CSS v4</i> &bull; <i>Fabric.js 6</i> &bull; <i>Zustand</i> &bull; <i>TanStack Query</i> &bull; <i>shadcn/ui</i>
  </p>
</div>


