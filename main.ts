// Day one, day seven — TikTok video entry (Node 22, standard library only).
//
// The entry is the video itself: video/day-one-day-seven.mp4, a short clip about
// the agent-built game Solmar Bay 3D on the day it was made (21 Nov 2026) and
// after a week of daily updates (23 Nov 2026), ending with make.fun's referral
// end card carrying the code pstpm556. The video is posted publicly on TikTok;
// VIDEO.json at the repository root names its TikTok address.
//
// This program reads VIDEO.json, checks it is a JSON object with a url string,
// and writes it to /output/VIDEO.json, where the gate reads it. That is all the
// program has to do. Nothing it writes about the video is scored.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'VIDEO.json');
const dst = join(OUTPUT_DIR, 'VIDEO.json');

let raw;
try {
  raw = readFileSync(src, 'utf8');
} catch (err) {
  console.error('VIDEO.json could not be read from ' + src + ': ' + err.message);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(raw);
} catch (err) {
  console.error('VIDEO.json is not valid JSON: ' + err.message);
  process.exit(1);
}

if (typeof data !== 'object' || data === null || Array.isArray(data)) {
  console.error('VIDEO.json must be a JSON object with a url string');
  process.exit(1);
}

const url = data.url;
if (typeof url !== 'string') {
  console.error('VIDEO.json must have a "url" string (the TikTok video address)');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(dst, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('VIDEO.json written to ' + dst + ' (url: ' + (url || '(empty - fill after posting to TikTok)') + ')');
