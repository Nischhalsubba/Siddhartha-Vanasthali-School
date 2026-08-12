<div align="center">

# Siddhartha Vanasthali School

**A school website project for presenting Siddhartha Vanasthali School information, programs, student/parent resources, admissions context, and contact paths.**

![Top language](https://img.shields.io/github/languages/top/Nischhalsubba/Siddhartha-Vanasthali-School?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/Siddhartha-Vanasthali-School?style=flat-square)
![Repo size](https://img.shields.io/github/repo-size/Nischhalsubba/Siddhartha-Vanasthali-School?style=flat-square)

[Browse source](https://github.com/Nischhalsubba/Siddhartha-Vanasthali-School/tree/master) · [Issues](https://github.com/Nischhalsubba/Siddhartha-Vanasthali-School/issues)

</div>

## Overview

This repository is documented as a school-information experience. Parents, students, staff, designers, and developers should all be able to understand the site without translating between technical architecture and institutional language.

<details open>
<summary><strong>🏗️ Interactive school-site architecture</strong></summary>

```mermaid
flowchart LR
    VISITOR["Parent / student / visitor"] --> SITE["School website"]
    VERIFIED["Verified school content"] --> SITE
    SITE --> ABOUT["School information"]
    SITE --> PROGRAMS["Programs / academics"]
    SITE --> STUDENT["Student / parent information"]
    SITE --> ADMISSION["Admissions"]
    SITE --> CONTACT["Contact / location"]
```

</details>

## Visitor flow

```mermaid
flowchart TD
    LAND["Open school website"] --> GOAL{"What do you need?"}
    GOAL --> PROGRAM["Programs / academics"]
    GOAL --> ADMISSION["Admissions"]
    GOAL --> INFO["School / student information"]
    PROGRAM --> CONTACT["Contact / next step"]
    ADMISSION --> CONTACT
    INFO --> CONTACT
```

## Audience guide

| Audience | Focus |
|---|---|
| Parents / students | Academics, admissions, notices, location and contact |
| School staff | Accurate dates, programs, policies and contact information |
| Developers | Page structure, assets, interactions and delivery |
| Designers | Information hierarchy, trust, responsive use and accessibility |

## Getting started

```bash
git clone https://github.com/Nischhalsubba/Siddhartha-Vanasthali-School.git
cd Siddhartha-Vanasthali-School
```

Use the repository project files to determine the current runtime and development commands.

## Design & accessibility

School information must be readable on phones, keyboard-accessible, clearly dated when time-sensitive, and available as text rather than only images/PDF posters. Use meaningful link labels, alt text, focus states and clear admissions/contact CTAs.

## SEO & discoverability

Use the verified school name, location and real academic/admissions terminology in titles, descriptions and visible text. Maintain semantic headings, canonical URLs, School/Organization structured data, accessible images, sitemap/robots configuration where appropriate, and social-preview metadata. Do not invent rankings, results, awards or admissions claims.

## Contribution flow

```mermaid
flowchart LR
    UPDATE["School content / UI change"] --> VERIFY["Verify information"] --> BUILD["Implement"] --> ACCESS["Responsive + accessibility review"] --> SEO["Metadata / dates check"] --> PR["Pull request"]
```
