## FUN Consulting Landing Page Component System

---

# Overview

Dokumen ini berisi daftar seluruh komponen yang digunakan pada landing page FUN Consulting.

Tujuan utama component system:

* menjaga konsistensi development,
* mempermudah frontend scaling,
* mempercepat proses development,
* menjaga kualitas UI,
* dan mempermudah maintenance project.

Seluruh component dirancang menggunakan pendekatan:

* reusable,
* modular,
* responsive,
* scalable,
* dan enterprise frontend architecture.

---

# Global Component Structure

```txt id="f1qm8"
components/
│
├── layout/
├── navigation/
├── hero/
├── trust/
├── business/
├── about/
├── services/
├── workflow/
├── testimonial/
├── client/
├── cta/
├── footer/
├── ui/
└── animation/
```

---

# 1. Layout Components

Komponen dasar untuk struktur halaman.

---

# Container

## Purpose

Wrapper utama seluruh section.

---

# Features

* max width control
* responsive spacing
* centralized layout

---

# Recommended Style

```css id="v1y2q"
max-width: 1280px;
padding-inline: 24px;
margin: auto;
```

---

# Section Wrapper

## Purpose

Memberikan konsistensi spacing antar section.

---

# Features

* vertical spacing
* responsive padding
* animation trigger

---

# Recommended Spacing

```css id="d2q31"
padding-top: 120px;
padding-bottom: 120px;
```

---

# 2. Navigation Components

---

# Navbar

## Purpose

Navigasi utama website.

---

# Structure

```txt id="4q6r7"
Navbar
├── Logo
├── Menu
├── CTA Button
└── Mobile Toggle
```

---

# Features

* sticky navigation
* blur background
* glow hover
* responsive mobile menu

---

# Mobile Menu

## Features

* slide animation
* dark overlay
* smooth transition

---

# 3. Hero Components

---

# Hero Slider

## Purpose

Section utama branding.

---

# Structure

```txt id="v86dp"
Hero Slider
├── Slide 1
├── Slide 2
├── Slide 3
└── Slider Navigation
```

---

# Features

* fullscreen layout
* fade transition
* cinematic animation
* responsive stacking

---

# Hero Content

## Features

* headline
* subheadline
* CTA group
* trust badge

---

# Hero Visual

## Features

* floating glass card
* abstract finance UI
* teal glow
* gold accent line

---

# 4. Trust Components

---

# Trust Bar

## Purpose

Quick trust information.

---

# Structure

```txt id="ewr8f"
Trust Bar
├── Icon
├── Title
└── Short Description
```

---

# Features

* compact layout
* premium icon
* glow hover

---

# Trust Badge

## Purpose

Mini professional indicator.

---

# Example

* Verified
* Professional
* Trusted

---

# 5. Business Challenge Components

---

# Business Pain Section

## Purpose

Menjelaskan problem perusahaan.

---

# Structure

```txt id="r6m9z"
Business Challenge
├── Problem Narrative
├── Pain Point List
├── Solution Narrative
└── Mini CTA
```

---

# Features

* emotional copywriting
* split layout
* visual storytelling

---

# Pain Point Card

## Features

* icon
* short title
* compact explanation

---

# 6. About Components

---

# About Section

## Purpose

Menjelaskan identitas perusahaan.

---

# Structure

```txt id="v1qz8"
About Section
├── Company Narrative
├── Achievement Card
├── Workspace Visual
└── Statistics
```

---

# Features

* executive layout
* premium atmosphere
* floating stats card

---

# Statistic Card

## Features

* animated number
* glow accent
* hover lift

---

# 7. Service Components

---

# Service Grid

## Purpose

Menampilkan layanan perusahaan.

---

# Structure

```txt id="t8mq4"
Service Grid
├── Service Card
├── Icon
├── Description
└── CTA
```

---

# Service Card

## Features

* glassmorphism
* hover glow
* floating effect
* animated border

---

# Service Icon

## Recommended Style

* premium outline
* duotone
* semi-3D

---

# Hover Interaction

Saat hover:

* glow meningkat,
* icon aktif,
* card terangkat,
* border menyala.

---

# 8. Workflow Components

---

# Workflow Timeline

## Purpose

Menampilkan proses kerja.

---

# Structure

```txt id="w92md"
Workflow Timeline
├── Step Indicator
├── Connector Line
├── Description
└── Animation
```

---

# Features

* timeline animation
* glow progress
* responsive layout

---

# Workflow Step Card

## Features

* numbered step
* icon
* title
* short explanation

---

# 9. Why Choose Us Components

---

# Benefit Card

## Purpose

Menampilkan keunggulan perusahaan.

---

# Features

* premium icon
* split layout
* hover effect
* glass style

---

# Benefit List

## Example

* Fast Process
* Secure Documentation
* Professional Team
* Full Assistance

---

# 10. Client Components

---

# Client Marquee

## Purpose

Menampilkan logo client.

---

# Features

* infinite scrolling
* grayscale logo
* hover full color

---

# Client Logo Card

## Features

* minimal spacing
* hover glow
* transparent background

---

# 11. Testimonial Components

---

# Testimonial Slider

## Purpose

Social proof.

---

# Features

* smooth sliding
* quote accent
* glass card

---

# Testimonial Card

## Structure

```txt id="p5wq1"
Testimonial Card
├── Client Name
├── Company
├── Quote
└── Rating
```

---

# Features

* glow border
* premium typography
* elegant spacing

---

# 12. CTA Components

---

# CTA Banner

## Purpose

Final conversion area.

---

# Features

* large headline
* glowing button
* finance background
* premium spacing

---

# CTA Button Group

## Features

* primary CTA
* secondary CTA
* hover interaction

---

# 13. Footer Components

---

# Footer

## Purpose

Closing information.

---

# Structure

```txt id="x8qp0"
Footer
├── Company Info
├── Services
├── Navigation
├── Contact
└── Social Media
```

---

# Features

* dark premium background
* glow separator
* responsive columns

---

# Floating WhatsApp Button

## Features

* sticky position
* pulse glow
* smooth hover

---

# Back To Top Button

## Features

* glass morph
* fade visibility
* smooth scroll

---

# 14. Reusable UI Components

---

# Primary Button

## Features

* teal solid
* glow hover
* rounded style

---

# Secondary Button

## Features

* transparent
* gold border
* elegant hover

---

# Glass Card

## Features

* blur background
* thin border
* soft shadow

---

# Section Title

## Features

* premium typography
* decorative line
* spacing consistency

---

# Premium Divider

## Features

* gold line
* glow accent
* subtle visual separator

---

# 15. Animation Components

---

# Fade Reveal

## Features

* scroll trigger
* smooth opacity

---

# Hover Lift

## Features

* translateY animation
* glow enhancement

---

# Glow Pulse

## Features

* CTA highlight
* premium motion

---

# Floating Orb

## Features

* ambient background
* slow movement
* teal blur

---

# Responsive Component Rules

---

# Desktop

* cinematic layout
* split section
* large hierarchy

---

# Tablet

* balanced spacing
* simplified composition

---

# Mobile

* vertical stacking
* reduced motion
* optimized readability

---

# Development Principles

Seluruh component harus:

* reusable,
* scalable,
* responsive,
* lightweight,
* modular,
* maintainable.

---

# Naming Convention

---

# Recommended

```txt id="s8az2"
HeroSlider.tsx
ServiceCard.tsx
WorkflowTimeline.tsx
TestimonialCard.tsx
CTASection.tsx
```

---

# Avoid

❌ generic naming
❌ duplicated component
❌ inline styling berlebihan

---

# Final Frontend Direction

Frontend FUN Consulting harus terasa seperti:

* enterprise SaaS,
* premium consulting platform,
* fintech-class interface,
* modern corporate experience,
* high-end business website.
