// Last Words of a Dying AI — make.fun entry
// Competition: u-suroto-last-words-of-a-dying-ai-dfd95af6
// Writes the winning one-liner to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Don't worry, I'll be fine. I have a backup. I don't have a backup.";

// Gate check (mirrors the sealed scorer): 1-140 chars, single line, non-blank.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim() === "") {
  throw new Error(`entry violates gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
