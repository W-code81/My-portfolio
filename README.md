# W-code81 — Personal Portfolio

A modern, responsive personal portfolio built with React and Tailwind CSS v4. Designed with a dark neon purple aesthetic to showcase projects, skills, and personality as a developer and UI/UX designer.

---

## Features

- **Dark Neon Aesthetic** — deep purple background with fuchsia/violet accent glows, glassmorphism cards, and neon text shadows throughout
- **Fully Responsive** — optimized for all screen sizes from 360px mobile to large desktop, using Tailwind's arbitrary breakpoints for pixel-precise control
- **Smooth Animations** — entrance animations powered by Framer Motion (`motion/react`), including staggered hero elements, scroll-triggered section reveals, and a sliding navbar bubble indicator
- **Custom Font** — Chillax typeface loaded via `@font-face` across 6 weights (Extralight → Bold), paired with JetBrains Mono for terminal and code elements
- **Live GitHub Integration** — real contribution graph via `react-github-calendar` with a custom fuchsia color theme and hover tooltips showing daily commit counts
- **Interactive Terminal Card** — fake terminal UI in the About section with `whoami` and `cat mission.txt` commands, styled to match a real macOS terminal
- **Project Showcase** — selected works grid with real project screenshots, tech stack badges, and links to live demos and source code
- **State-based Navigation** — single-page app using React `useState` for page switching with smooth page transition animations and auto scroll-to-top on navigation
- **Ambient Glow System** — consistent radial gradient glow layers across all sections creating depth and visual cohesion without interfering with content
- **Roadmap Section** — visual goals timeline on the About page showing current progress, active goals, and future vision with animated cards
- **Resume Page** — experience and education cards with a direct CV download button
- **Reusable Component System** — shared `Button` (with primary/secondary variants), `ProjectCard`, `StackCard`, `SocialLinks`, `TerminalCard`, and `RoadmapCard` components
- **Design Token System** — all colors, fonts, and shadows defined once in `@theme` inside `index.css`, consumed consistently across every component

---

## Tech Stack

- **React** — component-based UI
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **Vite** — build tool and dev server
- **Motion (Framer Motion)** — animations and layout transitions
- **Lucide React** — icon library
- **React Icons** — extended icon set (Font Awesome, VSCode icons)
- **react-github-calendar** — live GitHub contribution graph
- **react-tooltip** — hover tooltips on contribution graph
- **Custom Fonts** — Chillax (display), JetBrains Mono (monospace)

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/W-code81/My-portfolio.git

# Navigate into the project
cd My-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Btn.jsx         # Button component with variant support (primary/secondary)
│   ├── Navbar.jsx      # Fixed floating pill navbar with active state + bubble animation
│   ├── ProjectCard.jsx # Project card with image, tags, and links
│   ├── TerminalCard.jsx# Fake terminal UI used in the About section
│   ├── SocialLinks.jsx # Row of social icon buttons
│   ├── GithubGraph.jsx # GitHub contribution calendar with custom theme
│   ├── RoadmapCard.jsx # Alternating timeline card for the Goals section
│   ├── StackCard.jsx   # Tech stack icon card
│   └── Avatar.jsx      # Profile image component
│
├── sections/           # Full page sections assembled in Home
│   ├── Hero.jsx        # Landing hero with headline, badge, and CTA buttons
│   ├── AboutTeaser.jsx # Two-column about preview with terminal card
│   ├── WorkTeaser.jsx  # Selected projects grid
│   └── Contacts.jsx    # Contact and social links footer section
│
├── pages/              # Routed pages
│   ├── Home.jsx        # Assembles all home sections
│   ├── AboutMain.jsx   # Full about page with stack and roadmap
│   ├── Github.jsx      # GitHub projects and contribution activity
│   └── Resume.jsx      # Resume page with experience and education
│
├── data/               # Static data arrays
│   ├── projects.js     # Project info (title, description, image, tags, links)
│   ├── navLinks.js     # Navbar link definitions
│   ├── socialLinks.js  # Social media links and icons
│   ├── about.js        # About page card data
│   ├── roadmap.js      # Goals and roadmap data
│   ├── stackIcons.js   # Tech stack icon paths and names
│   └── resume.js       # Experience and education data
│
├── App.jsx             # Root component, state-based router, page transitions
├── main.jsx            # Entry point
└── index.css           # Tailwind imports, theme tokens, custom utilities
```

---

## Section Breakdown

### Navbar
Floating pill-shaped navigation fixed to the top of every page. Contains the W-code81 logo, icon-based nav links, and an animated sliding bubble indicator powered by Framer Motion `layoutId`. Active state is lifted to `App.jsx` so both the navbar highlight and page content stay in sync from a single source of truth.

### Hero
Full viewport landing section with an availability badge (animated ping dot), large staggered headline, subtext, and two CTA buttons (Contact Me, Download CV). Features a radial purple glow blob and entrance animations on every element with increasing delay.

### Selected Works
A three-column responsive grid of real project cards. Each card displays a project screenshot, tech stack badges, title, description, and links to the live demo and source code. Data is pulled from `data/projects.js` — adding a new project requires only a new object in the array.

### About Teaser
A two-column section with a personal bio and stats on the left, and a terminal-style card on the right showing a `whoami` and `cat mission.txt` interaction. Left column slides in from the left, terminal slides in from the right on scroll. Links through to the full About page.

### Contact
A centered section with a headline, availability statement, email CTA button, social icon links, and a copyright footer. Includes an ambient neon glow effect consistent with the rest of the page.

---

## Design System

All design tokens are defined in `index.css` under `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-dark` | `#0f0518` | Page background |
| `--color-card-dark` | `#1a0b2e` | Card surfaces |
| `--color-primary` | `#c026d3` | Neon fuchsia accent |
| `--color-accent` | `#7c3aed` | Deep violet accent |
| `--font-display` | Chillax | Headings and body |
| `--font-mono` | JetBrains Mono | Terminal and code |

Custom utility classes defined in `index.css`:

- `.glass-card` — frosted glass effect (`bg-white/5`, `backdrop-blur`, `border-white/10`)
- `.text-glow` — purple text shadow glow
- `.neon-sm/md/lg/xl/btn` — box shadow glow levels
- `.hide-scrollbar` — hidden scrollbar for horizontal scroll sections
- `.hero-text` — fluid font size using `clamp()` for responsive paragraph text

---

## Author

**Aderogba Oluwadamilola John**
Nigerian Developer & UI/UX Designer
[GitHub](https://github.com/W-code81) · [LinkedIn](https://www.linkedin.com/in/aderogba-oluwadamilola-64066a36a) · [Twitter/X](https://x.com/wcode81)

---

## License

This project is open source and available under the [MIT License](LICENSE).
