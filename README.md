# Portfolio Website

Personal developer portfolio for Gaurav Rathore — built with Next.js 16 and TypeScript, deployed on a Raspberry Pi and served globally via Cloudflare Tunnels.

**Live URL:** https://gaurav.cursedshrine.com

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS / PostCSS |
| Runtime | Node.js v24 (NVM) |
| Hosting | Raspberry Pi 5 → Cloudflare Tunnel |

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/          # Next.js App Router pages & layouts
│   └── components/   # Reusable UI components
├── public/           # Static assets
├── next.config.ts    # Next.js config
└── tsconfig.json     # TypeScript config
```

## Running Locally

```bash
npm install
npm run dev       # dev server on :3000
npm run build     # production build
npm run start     # start production server
```

## Deployment

Runs as a systemd service on the Pi:

```bash
sudo systemctl status portfolio-website
sudo systemctl restart portfolio-website
```

Port `3000` → exposed via Cloudflare Tunnel at `gaurav.cursedshrine.com`.
