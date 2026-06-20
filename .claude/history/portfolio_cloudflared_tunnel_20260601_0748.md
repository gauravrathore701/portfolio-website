# Cloudflared Tunnel Setup for cursedshrine.com → Portfolio Website

**Date:** 2026-06-01 07:48

## What was done

### 1. Created systemd service for the portfolio website
- File: `/etc/systemd/system/portfolio-website.service`
- Runs: `next start --port 3000` via nvm node at `/home/gaurav/.nvm/versions/node/v24.13.0/bin/node`
- Working directory: `/home/gaurav/Projects/portfolio-website`
- Enabled and started: `systemctl enable --now portfolio-website.service`

### 2. Updated cloudflared tunnel config
- File: `~/.cloudflared/config.yml`
- Added ingress rules for `cursedshrine.com` and `www.cursedshrine.com` → `http://localhost:3000`
- These were added **above** existing rules for jenkins and notification subdomains

### 3. Updated cloudflare-tunnel.service
- Updated description to mention cursedshrine.com
- Added `portfolio-website.service` as a `Wants=` dependency so it starts with the tunnel

### 4. Restarted the tunnel
- `cloudflare-tunnel.service` restarted to pick up new ingress config
- Tunnel has 4 active connections (bom03, bom06, bom08, bom11)

## Pending: DNS Records (manual step required)

The `cloudflared tunnel route dns` command couldn't authenticate for cursedshrine.com (the cert.pem is scoped to sharemarketstudies.com zone only).

**Option A — Cloudflare Dashboard (easiest):**
Go to: Cloudflare Dashboard → cursedshrine.com → DNS

Add two CNAME records:
| Type  | Name | Content                                                | Proxy |
|-------|------|--------------------------------------------------------|-------|
| CNAME | @    | `a9e04ab3-b606-439b-9de2-d80288c574ae.cfargotunnel.com` | Yes (orange) |
| CNAME | www  | `a9e04ab3-b606-439b-9de2-d80288c574ae.cfargotunnel.com` | Yes (orange) |

**Option B — Cloudflare re-login on Pi:**
```bash
cloudflared tunnel login
# Open the printed URL in browser, select cursedshrine.com zone
# Then run:
cloudflared tunnel route dns sharemarketstudies-app cursedshrine.com
cloudflared tunnel route dns sharemarketstudies-app www.cursedshrine.com
```

## Architecture

```
Internet → cursedshrine.com (CNAME → tunnel)
         → Cloudflare Tunnel (sharemarketstudies-app, ID: a9e04ab3-...)
         → Pi localhost:3000
         → portfolio-website.service (Next.js 16.2.6)
```

## Services involved
- `portfolio-website.service` — new, runs Next.js on port 3000
- `cloudflare-tunnel.service` — existing, updated to depend on portfolio service
