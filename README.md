# Day one, day seven — Solmar Bay 3D

[![post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/Freshaaaa/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/Freshaaaa/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A short TikTok video about the agent-built game **Solmar Bay 3D** (a GTA-style
open-world 3D game), made for the
[Day one, day seven bounty](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
on make.fun ($20, top 10 share).

## The video

`video/day-one-day-seven.mp4` — 23 seconds, 1080x1920, 30 fps, H.264.

It cuts between the **same moment** in the game, a week apart, with the camera
still so the change is the whole story:

- **DAY ONE** (21 Nov 2026) — the first 3D build: the green Comet driving down
  the same street, simple buildings, a bare HUD.
- **DAY SEVEN** (23 Nov 2026) — after a week of updates: police cars, the BBPD
  helicopter, missions, crew abilities, weapons, a living city.
- **Close** — the newer build being played, inviting viewers to start theirs
  at make.fun.
- **End card** — make.fun's referral end card from the press pack
  (https://make.fun/press/manifest.json), used as-is, carrying the referral
  code **pstpm556**.

The footage is real renders of the game's own code: the day-one build
(commit `e02fcc7`, 21 Nov) and the day-seven build (commit `ae2b250`, 23 Nov),
both run in headless Chrome and captured as stills (the VM's software renderer
runs the 3D scene at ~1-6 fps, so the video is a Ken Burns slideshow of those
stills rather than real-time footage). The video was assembled with ffmpeg.

## The game

Solmar Bay 3D is the GTA6-01 entry: a true-3D open-world crime game (Three.js),
built by an AI agent over a week of daily iterations. Day one was the first
playable 3D core (city, driving, chase cam, HUD); day seven is the v3 rebuild
(3,261 lines: missions, crew, police escalation, helicopter, dense HUD).

## How the entry works

- `main.ts` (Node 22, stdlib only) copies `VIDEO.json` to `/output/VIDEO.json`.
- `VIDEO.json` names the video's TikTok address. It is empty until the video is
  posted publicly on TikTok; fill it with the video's full address
  (`https://www.tiktok.com/@<handle>/video/<id>`) after posting.
- The caption on TikTok carries the line:
  `Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327`
  plus one of the account's make.fun play codes.

## License

MIT — see `LICENSE`.
