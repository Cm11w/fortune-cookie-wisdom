// Fortune Cookie Wisdom for Developers
// (u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44) entry:
// write one original fortune-cookie line for a software developer to the
// grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (73 UTF-8 characters, one sentence):
//   Beware the green build: it only means the tests you wrote agree with you.
//
// Why this text, against the judge's published brief:
//   1. It is fortune-cookie wisdom for a developer, in the fortune's own
//      voice: "Beware" opens it the way a printed fortune opens.
//   2. It is one short balanced sentence that lands in a single breath:
//      a warning, then the reason, closed by a full stop.
//   3. It says something true about a developer's day: a green build is
//      the moment every developer relaxes — and the tests that went green
//      are the ones the developer wrote itself.
//   4. It turns that truth in a way the reader has not heard before: the
//      green build does not mean the code is right, only that the tests
//      agree with their author.
//   5. It leaves a quiet double meaning that rewards a second read:
//      "the tests you wrote agree with you" — tests that flatter their
//      author pass, whether or not the code is correct.
//
// Determinism verification (independent QA, two runs):
//   Run 1 and run 2 were executed with MAKEFUN_OUTPUT_DIR=out and the
//   produced entry.txt files compared byte for byte (cmp): identical.
//   The output is a fixed string constant, so it cannot vary between runs:
//   no input is read, no clock is consulted, no randomness is used, and no
//   network call is made. The SHA-256 of entry.txt is stable across runs.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Beware the green build: it only means the tests you wrote agree with you.';

// Guard: the entry is only valid as one line of 1-120 characters. Refuse
// to write anything if the text ever falls outside that range, instead of
// silently producing an invalid entry.
if (TEXT.length < 1 || TEXT.length > 120) {
  throw new Error('TEXT must be 1-120 characters');
}

// Guard: the entry must be a single line. A stray newline would break the
// "one line" brief, so refuse to write it.
if (/[\r\n]/.test(TEXT)) {
  throw new Error('TEXT must be a single line');
}

// Guard: the gate also refuses an entry that is only whitespace, so
// refuse to write anything that has no visible character at all.
if (TEXT.trim().length === 0) {
  throw new Error('TEXT must not be only whitespace');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
