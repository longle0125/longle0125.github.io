# 🚀 My Personal Blog

This is my personal blog built using [AstroPaper](https://github.com/satnaing/astro-paper), a minimal, responsive, and SEO-friendly Astro theme. I use this space to share my technical projects, academic notes, and thoughts on technology.

## ✨ Features

Based on the AstroPaper foundation, this blog includes:
* **Type-safe Markdown:** High reliability for technical writing.
* **Super Fast Performance:** Optimized for speed and low-latency.
* **Accessibility:** Fully accessible for Keyboard and VoiceOver users.
* **Responsive Design:** Seamless experience across mobile and desktop.
* **Light & Dark Mode:** Support for user-preferred color schemes.
* **Fuzzy Search:** Quick and easy content discovery.
* **SEO-friendly:** Includes sitemaps, RSS feeds, and dynamic OG image generation.

## 🛠 Tech Stack

* **Main Framework:** [Astro](https://astro.build/)
* **Type Checking:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [TailwindCSS](https://tailwindcss.com/)
* **Static Search:** [FuseJS](https://fusejs.io/)
* **Icons:** [Tablers](https://tabler-icons.io/)

## 📂 Project Structure

The project follows the standard AstroPaper layout:
```python
/
├── public/              # Static assets (favicons, OG images)
├── src/
│   ├── assets/          # Icons and images
│   ├── components/      # Reusable UI components
│   ├── data/
│   │   └── blog/        # All .md blog posts are stored here
│   ├── layouts/         # Page templates
│   ├── pages/           # Site routes
│   └── config.ts        # Primary configuration file
└── astro.config.ts      # Astro settings
```