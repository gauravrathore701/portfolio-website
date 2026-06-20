# portfolio-website: Add GGU BTech Education Entry

**Date:** 2026-06-02 17:37 IST

## What Was Done

Added Guru Ghasidas University BTech entry to the Education section in About.tsx.

## Education order (matches LinkedIn screenshot):
1. SunBeam Institute of IT, Pune-Karad — PG DAC, CS · Mar 2024 – Aug 2024
2. IIT Madras — BS, Data Processing Technology · 2021–2023
3. Guru Ghasidas University — BTech, Engineering/Industrial Management · 2019–2023 · 7.8 CGPA

## Changes
- Added `grade` field to education data type (shown on card when non-empty)
- GGU skills: Time Management, Supply Chain Management
- Grid updated from `sm:grid-cols-2` → `sm:grid-cols-2 lg:grid-cols-3` to fit 3 cards on large screens
- Build clean, service restarted
