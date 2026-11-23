// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes a single funny line (one sentence, at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when unset).
// The line is a fixed string: the program is fully deterministic and
// writes byte-identical output on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought a smartwatch to get fit, and now the only thing it tracks reliably is how often I ignore it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, mirroring the competition rules: UTF-8 text of 1 to 200
// characters, not only white space, standing alone as a single sentence.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank sentence");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
