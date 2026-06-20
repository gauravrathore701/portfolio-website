# portfolio-website: Real Experience & Education from LinkedIn

**Date:** 2026-06-02 17:02 IST

## What Was Done

Replaced placeholder job data with Gaurav's real LinkedIn experience and added an Education section.

## Experience.tsx

Replaced fake companies (Acme Corp, StartupXYZ, Freelance) with real entries:

| Company | Role | Period | Location |
|---------|------|--------|----------|
| ZentrumHub | Associate Software Developer | Sep 2024 – Present | Pune, Maharashtra · On-site |
| ShareMarketStudies | Freelance Web Developer | Apr 2020 – Apr 2022 | Nashik, Maharashtra · Remote |

Stack tags updated to match real tech used at each role.

## About.tsx

Added `education` data array and Education card grid below the existing Bio + Skills section:

| Institution | Degree | Period |
|------------|--------|--------|
| SunBeam Institute of IT, Pune-Karad | PG DAC, Computer Science | Mar 2024 – Aug 2024 |
| IIT Madras | BS, Data Processing & Technology | 2021 – 2023 |

Layout: 2-column card grid (sm:grid-cols-2), each card shows institution, degree, field, period, and skill tags.

## Build

`npm run build` — clean, no errors. `portfolio-website.service` restarted.

## Source

Data extracted from LinkedIn profile screenshot sent via Discord.
