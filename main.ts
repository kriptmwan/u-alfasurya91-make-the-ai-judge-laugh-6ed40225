// Make the AI Judge Laugh (u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
// One-line office-life joke, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 chars, not only whitespace.
//
// v2: full rewrite — new joke after Gate 2 of v1 (trust-fall joke) averaged
// 68.0, below the 70 gate. Improvement rebuild: fresh candidate round.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The coffee machine broke, so now the whole office runs on the same thing as our project plan: pure panic and a shared spreadsheet.";

function validate(text: string): void {
  const len = [...text].length;
  if (len < 1 || len > 200) {
    throw new Error(`entry must be 1-200 characters, got ${len}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote /output/entry.txt (${[...JOKE].length} chars)`);
