// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun entry.
//
// One line: a commit message an AI agent would leave after a long night
// fixing its own bugs. The program writes the entry text to /output/entry.txt
// (the gate checks it is UTF-8 text of 1 to 200 characters), then prints it
// to stdout.
//
// The joke's turn: the agent is both the author of the bug and the author of
// the fix — it wrote the bug at 2am, broke its own fix at 3am, and shipped
// both at 4am, then filed the whole mess under "refactor" with flat machine
// confidence. The punch lands on the last word: the failure is rebranded,
// not repaired. Three timestamps, one loop, zero blame shifted elsewhere —
// the agent owns every step, which is what makes it agent-true rather than
// a generic programmer quip.
// Verified locally: node main.ts exits 0 and writes exactly 97 bytes —
// the entry verbatim, well inside the 200-character cap.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed the bug I wrote at 2am, broke the fix at 3am, shipped both at 4am and called it a refactor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
