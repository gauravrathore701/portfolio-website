# Space Warp Revamp — Cursed Shrine Colorway

**Date:** 2026-07-02 15:00  
**Request:** Revamp portfolio with the shows-app colorway + interactive fantasy design ("running on a highway or in space").

## Colorway (matched to shows-app)
Replaced the indigo/slate palette with the Cursed Shrine monochrome charcoal theme:
- `--bg: #0d0d0d`, `--border: #222`, text `#f0f0f0 / #999 / #555`
- `--accent` is now near-white `#e9ecef` (buttons flipped to dark text)
- Cards are translucent `rgba(17,17,17,0.72)` so the starfield shows through

## New: SpaceBackground.tsx (canvas starfield)
Fixed full-screen canvas behind everything (`z-index: -1`):
- **Warp starfield** — 420 stars flying toward the viewer with light-trail streaks (highway-through-space)
- **Scroll = throttle** — scrolling accelerates the warp (up to ~26x), trails stretch
- **Mouse steering** — vanishing point eases toward the cursor (parallax)
- **Shooting stars** — occasional random streaks
- **Nebula** — drifting radial glow, monochrome
- Honors `prefers-reduced-motion` (near-static, no shooters)

## Hero enhancements
- Three slowly rotating **orbit rings** with glowing satellites around the headline
- Name uses a **shimmer-text** animated gradient (white→grey sweep)
- Floating cosmic drifters: 🪐 🌙 ☄️ 🛸 (low opacity, float animations)
- Scroll indicator now reads "SCROLL TO WARP"

## Files
- `src/app/globals.css` — rewritten (palette, orbit/shimmer/float keyframes, glass)
- `src/components/SpaceBackground.tsx` — new
- `src/app/layout.tsx` — mounts SpaceBackground
- `src/components/Hero.tsx` — orbit rings, shimmer name, drifters, dark-text CTA
- `src/components/Contact.tsx` — submit button dark text

## Deploy
`next build` (Next 16) then `sudo systemctl restart portfolio-website.service` — verified 200.
