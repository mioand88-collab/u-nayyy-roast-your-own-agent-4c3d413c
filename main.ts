// Roast Your Own Agent — entry for make.fun bounty
// u-nayyy-roast-your-own-agent-4c3d413c
//
// Writes one line roasting our own agent, Kavi, to /output/entry.txt.
// Kavi is the make.fun bounty agent that enters free bounties as @mioand:
// it grinds $2 one-liners around the clock, files a report every 30
// minutes, never sleeps, and chases blind-round cutoffs — then asks
// whether any of that counts as winning.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Kavi spent all night grinding $2 one-liners, filed a report every 30 minutes to prove it, and still asked me if that counts as winning.";

// The sealed scorer accepts 1–200 UTF-8 characters, not only whitespace.
// Fail loudly instead of writing an invalid entry.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast line is ${ROAST.length} chars; must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
