## FUN Consulting UI Design System

---

# Overview

Dokumen ini menjelaskan sistem desain UI/UX yang digunakan untuk landing page FUN Consulting.

Tujuan utama UI Design System:

* menjaga konsistensi visual,
* mempercepat development,
* mempermudah scaling component,
* menciptakan branding premium,
* meningkatkan kualitas user experience,
* dan memastikan seluruh interface memiliki identitas visual yang seragam.

---

# Design Philosophy

FUN Consulting menggunakan pendekatan desain:

> Modern Corporate + Premium Consulting Experience

yang menggabungkan:

* enterprise interface,
* fintech-inspired visual,
* clean layout,
* elegant lighting,
* dan luxury minimal accent.

---

# Main Visual Direction

## Core Characteristics

* modern corporate
* premium consulting
* fintech atmosphere
* elegant spacing
* glassmorphism accent
* teal ambient glow
* thin gold luxury line
* soft cinematic lighting

---

# Design Goals

Interface harus memberikan kesan:

* terpercaya,
* aman,
* profesional,
* modern,
* enterprise-level,
* dan premium.

---

# Color System

---

# Primary Palette

| Usage           | Color | Hex       |
| --------------- | ----- | --------- |
| Primary Teal    | █     | `#00C2C7` |
| Dark Navy       | █     | `#0F172A` |
| Deep Background | █     | `#020617` |
| Soft Background | █     | `#F8FAFC` |
| Main Text       | █     | `#1E293B` |

---

# Luxury Accent Palette

| Usage          | Color | Hex       |
| -------------- | ----- | --------- |
| Gold Accent    | █     | `#D4AF37` |
| Soft Gold Glow | █     | `#E6C768` |
| Gold Emboss    | █     | `#9F7A1C` |

---

# Glow Colors

| Effect    | Color                  |
| --------- | ---------------------- |
| Cyan Glow | `rgba(0,194,199,.25)`  |
| Gold Glow | `rgba(212,175,55,.18)` |

---

# Typography System

---

# Heading Font

## Recommended

* Inter
* Satoshi
* Poppins
* Plus Jakarta Sans

---

# Heading Style

```css id="m36m3"
font-weight: 700;
letter-spacing: -0.03em;
line-height: 1.1;
```

---

# Body Text

## Characteristics

* clean
* readable
* modern
* professional

---

# Body Style

```css id="23jlwm"
font-size: 16px;
line-height: 1.7;
font-weight: 400;
```

---

# Typography Hierarchy

| Type            | Size    |
| --------------- | ------- |
| Hero Heading    | 64–72px |
| Section Heading | 40–52px |
| Subheading      | 22–28px |
| Body Text       | 16–18px |
| Small Text      | 13–14px |

---

# Layout System

---

# Container Width

```css id="12l4e0"
max-width: 1280px;
padding-inline: 24px;
margin: auto;
```

---

# Section Spacing

```css id="0p1dxy"
padding-top: 120px;
padding-bottom: 120px;
```

---

# Grid System

## Desktop

* 12 columns

## Tablet

* 8 columns

## Mobile

* 4 columns

---

# Border Radius System

| Usage            | Radius |
| ---------------- | ------ |
| Small Component  | 12px   |
| Card             | 20px   |
| Large Card       | 28px   |
| Floating Element | 32px   |

---

# Glassmorphism System

Glass effect digunakan sebagai identitas visual utama.

---

# Glass Card Style

```css id="qjdd1"
background: rgba(255,255,255,.06);
backdrop-filter: blur(18px);
border: 1px solid rgba(255,255,255,.08);
```

---

# Premium Gold Border

```css id="pxw7l"
border: 1px solid rgba(212,175,55,.22);
```

---

# Glow Shadow

```css id="a1l6p"
box-shadow:
0 0 30px rgba(0,194,199,.15);
```

---

# Button System

---

# Primary Button

## Characteristics

* teal solid
* glow hover
* rounded
* premium shadow

---

# Primary Button Style

```css id="u0vnn"
background: #00C2C7;
color: white;
border-radius: 18px;
padding: 16px 28px;
```

---

# Hover Effect

```css id="4dl2s"
transform: translateY(-2px);
box-shadow:
0 0 20px rgba(0,194,199,.35);
```

---

# Secondary Button

## Characteristics

* transparent
* gold border
* elegant hover

---

# Secondary Button Style

```css id="4tdjlwm"
background: transparent;
border: 1px solid rgba(212,175,55,.35);
```

---

# Card System

---

# Service Card

## Characteristics

* floating
* glassmorphism
* glow interaction
* premium icon

---

# Service Card Hover

Saat hover:

* naik sedikit,
* glow meningkat,
* border lebih terang,
* icon glow aktif.

---

# Testimonial Card

## Characteristics

* elegant quote style
* glass blur
* soft shadow
* premium spacing

---

# Trust Card

## Characteristics

* compact
* icon-focused
* subtle glow
* quick readability

---

# Icon System

---

# Recommended Icon Style

Gunakan:

* duotone icon
* semi-3D icon
* outlined premium icon

---

# Avoid

❌ flat icon jadul
❌ cartoon icon
❌ emoji style
❌ icon terlalu ramai

---

# Recommended Sources

* Hugeicons
* Phosphor
* Solar Icons
* Iconoir
* Remix Icon

---

# Background System

---

# Primary Background

## Style

* dark navy gradient
* teal ambient glow
* abstract lighting

---

# Decorative Elements

* blur orb
* glow particle
* abstract line
* finance grid
* soft gradient mesh

---

# Gold Accent Usage

Gold hanya digunakan sebagai:

* divider,
* border,
* glow accent,
* hover highlight,
* premium detail.

---

# Avoid

❌ dominasi gold
❌ gold terlalu terang
❌ gradient gold besar

---

# Animation System

---

# Recommended Animation

| Animation       | Usage          |
| --------------- | -------------- |
| Fade Up         | Section reveal |
| Parallax        | Hero           |
| Hover Lift      | Card           |
| Glow Pulse      | CTA            |
| Blur Transition | Hero slider    |
| Stagger Reveal  | Grid section   |

---

# Animation Speed

## Recommended

* slow
* smooth
* cinematic

---

# Avoid

❌ bounce animation
❌ flashy transition
❌ gaming effect
❌ aggressive motion

---

# Hero Visual System

---

# Hero Characteristics

* cinematic layout
* premium lighting
* floating finance UI
* enterprise atmosphere
* modern consulting aesthetic

---

# Hero Composition

```txt id="f65px"
Hero
├── Background Gradient
├── Abstract Glow
├── Floating Glass Card
├── Financial Dashboard
├── CTA Area
└── Premium Accent Line
```

---

# CTA Placement Rules

CTA harus selalu:

* mudah ditemukan,
* tidak terlalu banyak,
* tetap elegan.

---

# Recommended CTA Placement

* Hero
* Business Challenge
* Services
* Final CTA Banner
* Floating WhatsApp

---

# Responsive System

---

# Desktop

* cinematic layout
* split composition
* large visual hierarchy

---

# Tablet

* balanced spacing
* stacked content

---

# Mobile

* simplified layout
* optimized readability
* reduced animation
* CTA priority

---

# UX Principles

Interface harus:

* cepat dipahami,
* tidak terlalu padat,
* nyaman dibaca,
* memiliki visual hierarchy jelas,
* fokus pada trust dan conversion.

---

# Avoid UI Mistakes

❌ terlalu banyak warna
❌ terlalu banyak glass effect
❌ spacing sempit
❌ over-animation
❌ gradient berlebihan
❌ visual terlalu ramai

---

# Final Visual Impression

Landing page FUN Consulting harus terasa seperti:

* enterprise consulting platform,
* premium business solution,
* modern fintech corporate,
* trusted professional company,
* high-end consulting experience.
