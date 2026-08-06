<div align="center">

<img width="100%" src="https://mir-cdn.behance.net/v1/rendition/project_modules/fs/0cd13781706499.5d07e15263a89.png" alt="Siddhartha Vanasthali School website preview" />

# Siddhartha Vanasthali School

<!-- interactive-readme-standard:start -->

> [!NOTE]
> **Branch-specific documentation:** this section is maintained for [`master`](https://github.com/Nischhalsubba/Siddhartha-Vanasthali-School/tree/master). It is generated from the files present on this branch and preserves the project-authored README below.

<details open>
<summary><strong>Interactive repository guide</strong></summary>

## Branch overview

| Item | Value |
|---|---|
| Repository | [`Nischhalsubba/Siddhartha-Vanasthali-School`](https://github.com/Nischhalsubba/Siddhartha-Vanasthali-School) |
| Branch | [`master`](https://github.com/Nischhalsubba/Siddhartha-Vanasthali-School/tree/master) |
| Detected stack | Sass, HTML |
| Detected manifests | No standard manifest detected |
| Documentation policy | Every maintained branch must explain purpose, setup, structure, architecture, flows, testing, delivery, security, and ownership. |

## Repository structure

```mermaid
flowchart TD
    ROOT["Siddhartha-Vanasthali-School / master"]
    ROOT --> P0[".github/"]
    ROOT --> P1["scss/"]
    ROOT --> P2["about.html"]
    ROOT --> P3["index.html"]
    ROOT --> P4["llms.txt"]
    ROOT --> P5["page_gallery.html"]
    ROOT --> P6["page_school.html"]
    ROOT --> P7["robots.txt"]
```

The diagram is generated from the branch's actual top-level files and directories. Use the branch link above for complete source navigation.

## Website or application structure

```mermaid
flowchart TD
    APP["Siddhartha-Vanasthali-School"]
    APP --> SOURCE["No conventional route directory detected"]
    SOURCE --> VERIFY["Inspect the project-specific documentation below"]
```

## Application and responsibility flow

```mermaid
flowchart LR
    ACTOR["User / contributor"]
    ACTOR --> A0["Delivery: .github"]
    A0 --> DELIVERY["Delivery: GitHub Actions"]
```

## Change-to-delivery flow

```mermaid
flowchart LR
    CHANGE["Change on master"]
    CHECK["Validate: Project-specific validation"]
    REVIEW["Review documentation and architecture impact"]
    RELEASE["Merge, release, or deploy according to this branch"]
    CHANGE --> CHECK --> REVIEW --> RELEASE
```

## README requirements for this branch

- Explain what this branch contains and how it differs from the default branch.
- Keep installation, configuration, usage, testing, deployment, security, support, and license information accurate.
- Document repository, website or application, API, data, authentication, background-job, and deployment flows when they exist.
- Prefer Mermaid diagrams and expandable `<details>` sections for visual navigation.
- Link diagrams and modules to real source paths; never invent missing components.
- Preserve project-specific documentation and update diagrams whenever architecture or major paths change.
- Treat secrets, private infrastructure, customer data, and credentials as prohibited README content.

</details>

<!-- interactive-readme-standard:end -->

### Lightweight School Website Redesign

**A modern, responsive school website redesign for Siddhartha Vanasthali School in Kathmandu, Nepal — focused on readability, lightweight frontend performance, WordPress customization direction, modular SCSS, ES6 JavaScript, Gulp workflow automation, carousel UI, and scroll animations.**

![HTML](https://img.shields.io/badge/HTML-Static%20Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Modular%20Styles-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![Gulp](https://img.shields.io/badge/Gulp-Workflow-CF4647?style=for-the-badge&logo=gulp&logoColor=white)
![School](https://img.shields.io/badge/Use%20Case-School%20Website-0F766E?style=for-the-badge)

</div>

---

## ✨ Overview

**Siddhartha Vanasthali School** is a private institute in Kathmandu, Nepal. This repository contains a redesigned version of the school website with a modern layout, improved readability, responsive structure, and a future direction toward a dynamic WordPress implementation.

The original goal was to improve the school’s old static website and move it toward a more flexible, customizable experience.

**Demo:**  
`https://nischhalsubba.github.io/Siddhartha-Vanasthali-School/`

---

## 🧭 Table of Contents

- [Project Goals](#-project-goals)
- [Designer’s Perspective](#-designers-perspective)
- [What Changed](#-what-changed)
- [Technology Used](#-technology-used)
- [Key Features](#-key-features)
- [WordPress Direction](#-wordpress-direction)
- [Quality Checklist](#-quality-checklist)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🎯 Project Goals

The redesign was focused on:

- improving readability
- making the layout feel more modern
- keeping the website lightweight
- improving responsive behavior
- avoiding unnecessary heavy frameworks
- preparing the structure for future WordPress conversion
- making content easier for the client to manage later

---

## 🎨 Designer’s Perspective

A school website should feel credible, clear, and easy for parents, students, and staff to navigate.

Important UX priorities:

- clear school identity
- readable content hierarchy
- strong homepage sections
- accessible navigation
- mobile-friendly layout
- lightweight loading experience
- easy future content editing

This project reflects an early but thoughtful design-to-code process: visual redesign first, frontend implementation next, and WordPress customization as the future target.

---

## 🔁 What Changed

Previous website:

```text
http://www.svi.edu.np/
```

Redesign improvements:

- implemented a modern layout with higher readability
- moved toward converting the static website into a dynamic WordPress website
- created a lighter frontend structure
- used modular SCSS for easier future updates
- avoided relying on heavy design frameworks

---

## 🛠 Technology Used

| Tool | Purpose |
|---|---|
| Gulp | Workflow automation |
| SCSS | Modular and maintainable styling |
| ES6 JavaScript | Modern interaction logic |
| Glide.js | Carousel/slider interaction |
| Scroll-Out.js | Scroll-based animation |
| GitHub Pages | Static demo deployment |

---

## 🌟 Key Features

| Feature | Description |
|---|---|
| Lightweight CSS | Main CSS file was kept under 25KB directionally |
| Responsive layout | Designed to work across device sizes |
| No heavy UI framework | Layout does not depend on Bootstrap or similar frameworks |
| ES6-based scripts | Avoids jQuery dependency direction |
| Carousel support | Glide.js used for website carousel behavior |
| Scroll animation | Scroll-Out.js used for reveal-style motion |
| WordPress-ready thinking | Future plan to make the site customizable through WordPress frontend customizer |

---

## 🧩 WordPress Direction

The future WordPress implementation goal was to make the website highly customizable through the WordPress Customizer, so the client would not need to rely heavily on backend editing.

Ideal WordPress goals:

- editable homepage sections
- customizable colors and typography
- editable carousel content
- editable notices/news/events
- frontend-friendly customization
- simple admin experience for school staff

---

## ✅ Quality Checklist

### Design QA

- [ ] Homepage hierarchy is clear.
- [ ] School identity is visible.
- [ ] Mobile layout is readable.
- [ ] Carousel content is easy to scan.
- [ ] Animation does not distract from content.
- [ ] Parent/student CTAs are clear.

### Technical QA

- [ ] Gulp workflow runs.
- [ ] SCSS compiles correctly.
- [ ] ES6 scripts work.
- [ ] Glide.js carousel works.
- [ ] Scroll-Out animations initialize.
- [ ] Main CSS remains lightweight.
- [ ] Demo deploy works on GitHub Pages.

---

## 🗺 Roadmap

- Convert static frontend into a WordPress theme.
- Add Customizer controls for homepage content.
- Add news/events management.
- Add school gallery management.
- Add SEO metadata.
- Add accessibility audit.
- Add performance audit.
- Replace any outdated links/content.

---

## 📜 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

<div align="center">

A lightweight school website redesign focused on readability, performance, and future WordPress customization.

</div>
