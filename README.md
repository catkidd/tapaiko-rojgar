# Tapaiko Rojgar — तपाईंको रोजगार

<div align="center">

![Tapaiko Rojgar Banner](assets/images/hero-mockup.png)

**Nepal's Most Trusted Corporate Job Portal & Recruitment Platform**

[![GitHub repo](https://img.shields.io/badge/GitHub-tapaiko--rojgar-002244?style=for-the-badge&logo=github)](https://github.com/catkidd/tapaiko-rojgar)
[![Live Site](https://img.shields.io/badge/Live%20Site-tapaikorojgar.com.np-d4af37?style=for-the-badge&logo=globe)](https://tapaikorojgar.com.np)
[![License: MIT](https://img.shields.io/badge/License-MIT-b8860b?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Brand Identity](#-brand-identity)
- [Project Structure](#-project-structure)
- [Pages & Sections](#-pages--sections)
- [Getting Started](#-getting-started)
- [SEO Implementation](#-seo-implementation)
- [JavaScript Features](#-javascript-features)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Tapaiko Rojgar** (translated from Nepali as _"Your Employment"_) is a high-authority digital recruitment platform dedicated to connecting Nepal's most ambitious professionals with verified top employers across all industries.

The platform bridges global recruitment standards with local execution — designed to project elite corporate authority, data-verified job safety, and career progression at every touchpoint.

> **"Every Nepali professional deserves an employment platform that treats their career with the respect and data-driven precision it deserves."**
> — Aarav Pradhan, Co-Founder & CEO

---

## 🔗 Live Demo

| Environment | URL |
|-------------|-----|
| Production  | [https://tapaikorojgar.com.np](https://tapaikorojgar.com.np) |
| GitHub Pages | [https://catkidd.github.io/tapaiko-rojgar](https://catkidd.github.io/tapaiko-rojgar) |

---

## ✨ Key Features

### For Job Seekers
- 🔍 **Advanced Job Search** — Filter by keyword, location, category, salary, and job type simultaneously
- 🛡️ **Verified Listings** — Every job undergoes a 3-step employer verification process
- 📊 **Career Progress Tracker** — Visual dashboard tracking applications and profile views
- 💾 **Save Jobs** — Persistent bookmark system using localStorage
- 📱 **Mobile-First Design** — Fully responsive across all screen sizes

### For Employers
- 📝 **Free First Job Post** — Zero cost to list your first position
- 🤖 **AI Candidate Matching** — Smart algorithm matching based on skills and experience
- 👥 **Candidate Database** — Access to 420,000+ pre-verified professionals
- 📈 **HR Analytics Dashboard** — Real-time hiring metrics and pipeline tracking
- 🏢 **Company Profile Pages** — Branded employer presence

### Platform Features
- ⚡ **Animated Counters** — IntersectionObserver-driven number animations
- 🎯 **Scroll Animations** — Smooth fade-in-up effects on scroll
- 🔔 **Toast Notifications** — Non-intrusive user feedback system
- 📍 **Sticky Navigation** — Scroll-aware navbar with shrink effect
- ♿ **WCAG Accessible** — ARIA labels and semantic HTML throughout
- 🔎 **Schema.org SEO** — JSON-LD structured data for rich search results

---

## 🛠️ Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| **Markup**   | HTML5 (Semantic)                   |
| **Styling**  | CSS3 (Custom Properties + Vanilla CSS) |
| **Framework**| Bootstrap 5.3.3                   |
| **Scripting**| Vanilla JavaScript (ES6+)         |
| **Icons**    | Font Awesome 6.5.1                |
| **Fonts**    | Google Fonts (Montserrat + Inter) |
| **Maps**     | Google Maps Embed API             |

> **No build tools required.** This is a pure static site — open `index.html` directly in any browser.

---

## 🎨 Brand Identity

Tapaiko Rojgar follows a strict corporate design system defined in the Brand Guidelines document. All UI decisions must comply with these specifications.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-blue` | `#002244` | Navbar, hero headings, footer, buttons |
| `--accent-gold-light` | `#D4AF37` | CTA highlights, gold text, star ratings |
| `--accent-gold` | `#B8860B` | Gradient end, border accents |
| `--slate-grey` | `#475569` | Form outlines, muted icons |
| `--white` | `#FFFFFF` | Canvas background, card fills |
| `--bg-light` | `#F8FAFC` | Section backgrounds |
| `--text-dark` | `#0F172A` | Body text |

### Typography

| Level | Font | Weight | Use |
|-------|------|--------|-----|
| H1–H3 | Montserrat | 700, 800 | Section titles, hero |
| H4–H6 | Montserrat | 600 | Card titles, labels |
| Body | Inter | 400, 500 | Text, forms, badges |
| UI | Inter | 600 | Buttons, nav links |

### Design Principles
- **No neon colors.** Stick strictly to the approved palette.
- **Card radius:** Always `8px` border-radius
- **Shadows:** Soft, layered shadows — never harsh or flat
- **Gold CTAs:** Executive Metallic Gold gradient on all primary action buttons
- **Navy Sections:** Deep Navy for nav, hero, footer, and CTA banners

---

## 📁 Project Structure

```
tapaiko_rojgar/
│
├── index.html                  # Homepage
├── jobs.html                   # Job listings page with filters
├── about.html                  # About, mission, team
├── contact.html                # Contact form, FAQ
│
├── assets/
│   ├── css/
│   │   └── style.css           # Master stylesheet (900+ lines)
│   ├── js/
│   │   └── main.js             # Core JavaScript (350+ lines)
│   └── images/
│       └── hero-mockup.png     # AI-generated hero UI mockup
│
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
└── Tapaiko_Rojgar_Brand_Guidelines.md  # Official brand document
```

---

## 📄 Pages & Sections

### `index.html` — Homepage

| Section | Description |
|---------|-------------|
| **Sticky Navbar** | Logo (left), nav links (center), Sign In + Post a Job (right) |
| **Hero** | Split layout — search filters (left), animated profile+chart cards (right) |
| **Stats Strip** | 4 animated counters: Jobs, Companies, Candidates, Success Rate |
| **Featured Jobs** | 6-card responsive grid with bookmark, salary, badges, apply CTA |
| **Categories** | 8-category icon grid linking to filtered job listings |
| **How It Works** | 3-step process with gold dashed connector line |
| **Testimonials** | 3 testimonial cards on navy background |
| **Employer CTA** | Navy gradient card with feature list and free job post offer |
| **Footer** | 4-column layout: brand, quick links, for employers, contact |

### `jobs.html` — Browse Jobs

| Section | Description |
|---------|-------------|
| **Jobs Hero** | Navy search bar section |
| **Filter Sidebar** | Checkboxes: Job Type, Category, Experience, Salary range |
| **Job Listings** | 12 list-style cards with real-time JS filtering |
| **Toolbar** | Count display + sort dropdown |
| **Pagination** | Bootstrap pagination (284 pages for 28,400 jobs) |

### `about.html` — About Us

| Section | Description |
|---------|-------------|
| **Hero + Stats** | 4 stat mini-cards on navy hero |
| **Mission & Vision** | Two-column layout with quote card |
| **Core Values** | 4-card grid: Integrity, Innovation, Inclusion, Impact |
| **Team** | 4 leadership team cards |
| **CTA** | Navy CTA to browse jobs |

### `contact.html` — Contact

| Section | Description |
|---------|-------------|
| **Hero** | Simple navy heading |
| **Contact Form** | Full-featured form with consent checkbox and JS submission handler |
| **Contact Info Card** | Address, phone, email, hours, embedded Google Map |
| **FAQ Accordion** | Bootstrap accordion with 4 questions |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optionally: VS Code with Live Server extension

### Local Development

```bash
# Clone the repository
git clone https://github.com/catkidd/tapaiko-rojgar.git

# Navigate into the project
cd tapaiko-rojgar

# Open in browser (no build step required!)
# Option 1: Double-click index.html
# Option 2: Use VS Code Live Server (right-click → Open with Live Server)
# Option 3: Python simple server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Production Deployment

This is a pure static site — deploy anywhere:

```bash
# GitHub Pages
git push origin main
# Enable Pages in GitHub repo settings → Source: main branch

# Netlify
# Drag and drop the project folder to netlify.com/drop

# Vercel
npx vercel --prod
```

---

## 🔍 SEO Implementation

| Feature | Implementation |
|---------|---------------|
| **Title Tags** | Unique, descriptive titles on every page |
| **Meta Descriptions** | Compelling 150-160 character descriptions |
| **Open Graph** | Full og: tags for social sharing on all pages |
| **Twitter Cards** | `summary_large_image` Twitter card meta tags |
| **JSON-LD** | Schema.org `WebSite` with `SearchAction` on homepage |
| **Canonical URLs** | `<link rel="canonical">` on all pages |
| **Semantic HTML** | `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| **ARIA Labels** | `aria-label`, `role`, and `aria-expanded` on interactive elements |
| **Heading Hierarchy** | Single `<h1>` per page, logical H2/H3 structure |
| **Image Alt Text** | Descriptive alt text on all images |

---

## ⚙️ JavaScript Features

All JavaScript is in [`assets/js/main.js`](assets/js/main.js):

| Function | Description |
|----------|-------------|
| `initNavbar()` | Sticky shrink on scroll, active link detection |
| `initScrollTop()` | Scroll-to-top button visibility toggle |
| `initCounters()` | IntersectionObserver-based animated number counters |
| `initScrollAnimations()` | Scroll-triggered fade-in-up animations |
| `initJobSearch()` | Hero search form → redirect to jobs.html with query params |
| `initBookmarks()` | localStorage-based save/unsave jobs with persistence |
| `initJobFilters()` | Real-time client-side job filtering by type, category, keyword |
| `initChartBars()` | CSS height animation triggered on scroll |
| `initSmoothLinks()` | Smooth anchor scrolling with offset |
| `showToast()` | Non-blocking toast notification system |

---

## 🌐 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 90+ |
| Firefox | 88+ |
| Safari  | 14+ |
| Edge    | 90+ |
| Opera   | 76+ |

> Internet Explorer is **not supported** (uses CSS custom properties and modern JS APIs).

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Follow** the Brand Guidelines strictly — no color deviations
4. **Test** on multiple screen sizes before submitting
5. **Commit** with clear messages: `git commit -m "Add: job alert subscription form"`
6. **Push** to your fork: `git push origin feature/your-feature-name`
7. **Open** a Pull Request with a description of your changes

### Commit Convention

```
Add:    New feature or file
Update: Modification to existing feature  
Fix:    Bug fix
Style:  CSS/design changes
Docs:   Documentation updates
Refactor: Code restructuring without feature changes
```

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Tapaiko Rojgar Pvt. Ltd.**

- 🌐 Website: [tapaikorojgar.com.np](https://tapaikorojgar.com.np)
- 📧 Email: [info@tapaikorojgar.com.np](mailto:info@tapaikorojgar.com.np)
- 📍 Address: 4th Floor, Trade Tower, Durbar Marg, Kathmandu 44600, Nepal
- 📞 Phone: +977-1-4567890

---

<div align="center">

**Built with ❤️ for Nepal's professional community**

*Tapaiko Rojgar — तपाईंको रोजगार — Your Employment*

[![Made in Nepal](https://img.shields.io/badge/Made%20in-Nepal-002244?style=flat-square)](https://tapaikorojgar.com.np)
[![Brand Version](https://img.shields.io/badge/Brand%20Version-1.0-d4af37?style=flat-square)](Tapaiko_Rojgar_Brand_Guidelines.md)

</div>
