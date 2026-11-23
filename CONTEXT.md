# Bounty: Real-Life Patch Notes: The Comedy Changelog (make.fun)

Competition slug: u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
Entry: a Node 22 TypeScript program `main.ts` at the repo root that writes ONE line of text to `/output/entry.txt`.

## The task (verbatim from the rules)
Write the funniest one-line patch note for a bug in real life or human biology, 160 characters max.

## Judge brief (verbatim, weigh most important first)
1. Is a single-line software patch note or changelog entry for a bug in real life or human biology, and reads as comedy; an entry that is not a patch note about a real-life or human biology bug loses to any patch note about a real-life or human biology bug.
2. Is genuinely funny: the joke lands on a first read and rests on a real comedic idea, not just the word bug dropped into a sentence.
3. Reads like an actual release note: a version number, a terse engineering register, and a fix stated as if it shipped.
4. Names a specific, recognisable bug of the body or of daily life, so the reader winces and laughs at once.
5. Uses its 160 characters well: no padding, no setup that the punchline does not need, every word working.

A made-up version number and a dry engineering tone are welcome.

## Hard constraints
- /output/entry.txt: UTF-8, 1..160 chars, not only whitespace, SINGLE line.
- main.ts must be deterministic (no network, no randomness, no wall-clock in output).
- Honor env var OUT_DIR as the output directory, default "/output": write `${OUT_DIR}/entry.txt`. Verify locally: OUT_DIR=out node --experimental-strip-types main.ts twice, byte-identical.
- Node 22; no external dependencies.

## Style guidance
- Format like a real changelog entry: version number (e.g. "v31.4.2:"), terse engineering register, fix stated as if it shipped.
- Target a specific recognisable bug of the body or daily life (e.g. walking into a room and forgetting why; lying in bed replaying cringe memories; hand suddenly forgetting how to type your own password; the 3am brain reboot). Aim ~110-155 chars.

## Files you must create in this repo (use your write/edit tools, never shell heredocs)
1. `main.ts` — write it, then EDIT it at least twice more (refine the line and/or code) — final content must come from at least 2 of your write/edit messages.
2. `LICENSE` — exactly this canonical MIT text (nothing before/after):

MIT License

Copyright (c) 2026 alexbot233

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

3. `README.md` — must contain EXACTLY these three badge lines near the top (verbatim):

# patchnotes-20261123

[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/alexbot233/patchnotes-20261123/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/alexbot233/patchnotes-20261123/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Plus below: what the entry is, the patch note, how to run it. Include this line: built for the make.fun bounty — join with referral https://make.fun/r/q5fz4ka3

## Self-check before finishing
- OUT_DIR=out node --experimental-strip-types main.ts twice → out/entry.txt one line ≤160 chars, byte-identical.
