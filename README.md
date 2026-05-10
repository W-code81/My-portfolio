# W-code81 — Personal Portfolio

A modern, responsive personal portfolio built with React and Tailwind CSS v4. Designed with a dark neon purple aesthetic to showcase projects, skills, and personality as a developer and UI/UX designer.

---

## Tech Stack

- **React** — component-based UI
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **Vite** — build tool and dev server
- **Lucide React** — icon library
- **React Icons** — extended icon set (Font Awesome, VSCode icons)
- **Custom Fonts** — Chillax (display), JetBrains Mono (monospace)

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/W-code81/portfolio.git

# Navigate into the project
cd portfolio

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
│   ├── Navbar.jsx      # Fixed floating pill navbar with active state
│   ├── ProjectCard.jsx # Project card with image, tags, and links
│   ├── TerminalCard.jsx# Fake terminal UI used in the About section
│   ├── SocialLinks.jsx # Row of social icon buttons
│   └── Contact.jsx     # Contact CTA section
│
├── sections/           # Full page sections assembled in Home
│   ├── Hero.jsx        # Landing hero with headline, badge, and CTA buttons
│   ├── AboutTeaser.jsx # Two-column about preview with terminal card
│   ├── WorkTeaser.jsx  # Selected projects grid
│   └── Contacts.jsx    # Contact and social links footer section
│
├── pages/              # Routed pages
│   ├── Home.jsx        # Assembles all home sections
│   ├── AboutMain.jsx   # Full about page
│   ├── Github.jsx      # GitHub projects and contribution activity
│   └── Resume.jsx      # Resume page
│
├── data/               # Static data arrays
│   ├── projects.js     # Project info (title, description, image, tags, links)
│   ├── navLinks.js     # Navbar link definitions
│   └── socialLinks.js  # Social media links and icons
│
├── App.jsx             # Root component and router
├── main.jsx            # Entry point
└── index.css           # Tailwind imports, theme tokens, custom utilities
```

---

## Section Breakdown

### Navbar
Floating pill-shaped navigation fixed to the top of every page. Contains the W-code81 logo, icon-based nav links, and an active state indicator using React `useState`. Fully responsive across all screen sizes.

### Hero
Full viewport landing section with an availability badge, large headline, subtext, and two CTA buttons (Contact Me, Download CV). Features a radial purple glow blob and a subtle grid background pattern.

### Selected Works
A three-column responsive grid of real project cards. Each card displays a project screenshot, tech stack badges, title, description, and links to the live demo and source code. Data is pulled from `data/projects.js`.

### About Teaser
A two-column section with a personal bio and stats on the left, and a terminal-style card on the right showing a `whoami` and `cat mission.txt` interaction. Links through to the full About page.

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
- `.neon-sm/md/lg/xl` — box shadow glow levels
- `.hide-scrollbar` — hidden scrollbar for horizontal scroll sections

---

## Author

**Aderogba Oluwadamilola John**
Nigerian Developer & UI/UX Designer
[GitHub](https://github.com/W-code81) · [LinkedIn](#) · [Twitter/X](#)

---

## License

This project is open source and available under the [MIT License](LICENSE).
