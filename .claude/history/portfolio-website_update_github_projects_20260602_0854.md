# portfolio-website: Update projects with real GitHub repos

**Date:** 2026-06-02 08:54 IST

## What was done

Replaced all placeholder/fake projects in the portfolio with Gaurav's actual GitHub repositories (https://github.com/gauravrathore701).

### Projects.tsx — full project list overhaul

**Featured projects (3):**
- **EvergreenEstate** — React + Spring Boot + MySQL real estate app (SOLID principles, JWT auth)
- **Mail-Service** — Production Rust/Axum email microservice, live on cursedshrine.com (status: Live)
- **CSV DataReader** — Electron desktop app for reading/visualizing CSV files

**Other projects (5 small cards):**
- SpeechtoText — React + Web Speech API, supports English & Hindi, live demo linked
- TicTacToe-React — React hooks exercise, live demo linked
- User Auth System — Full auth flow with Node.js
- VillaFormZH — HTML/CSS booking form, live demo linked
- Leetcode Problems — Python algorithm solutions

All GitHub links updated to actual repo URLs. Demo links point to GitHub Pages where available.

### Hero.tsx
- Fixed GitHub social link from `https://github.com` → `https://github.com/gauravrathore701`

### Contact.tsx
- Fixed GitHub social link from `https://github.com` → `https://github.com/gauravrathore701`

### About.tsx — skills updated to reflect real stack
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Vite, HTML/CSS
- **Backend:** Spring Boot, Rust (Axum), Node.js, MySQL, PHP, REST APIs
- **Tools & Infrastructure:** Git, Electron, Linux/systemd, Cloudflare, Raspberry Pi

## Build & deploy
- `npm run build` — clean build, no errors
- `portfolio-website.service` restarted successfully
