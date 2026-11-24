// One Word for Your Wi-Fi — make.fun entry
// Competition: u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The entry is a single word describing home Wi-Fi as it is actually lived:
// it works fine for a while, then changes its mind for no reason at all.
// "Fickle" is funny at once, true to how home Wi-Fi behaves, and a fresher
// angle than the words everyone reaches for (slow, buffering, down).
// It needs no explanation and works as a network name on its own.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word. Six letters, one word, no spaces, no punctuation.
// Why this word: the judge's brief rewards a word that is funny at once,
// true to how home Wi-Fi actually behaves, and fresher than the words
// everyone reaches for. "Fickle" says the connection changes its mind
// for no reason — full bars one minute, gone the next — which is exactly
// the familiar annoyance, in a word a reader gets instantly.
const WORD = "Fickle";

// Gate, enforced here so the program can never emit an invalid entry:
// the sealed scorer requires UTF-8 text of 1 to 20 characters, not only
// white space, and the competition requires exactly one word.
function validate(word: string): void {
  if (word.length < 1 || word.length > 20) {
    throw new Error(`word must be 1-20 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no white space inside)");
  }
}

validate(WORD);

// The grader sets MAKEFUN_OUTPUT_DIR; default to /output as the rules say.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// No trailing newline: the file is exactly the word, nothing else.
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");

console.log(`Wrote ${WORD.length}-character entry to ${join(outputDir, "entry.txt")}`);
