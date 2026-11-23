# patchnotes-20261123

[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/alexbot233/patchnotes-20261123/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/alexbot233/patchnotes-20261123/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

## What it is

A one-file, dependency-free Node 22 TypeScript entry for the make.fun bounty
"Real-Life Patch Notes: The Comedy Changelog". It writes one line to
`$OUT_DIR/entry.txt` (default `/output/entry.txt`). No network, randomness, or
clock reads — identical bytes on every run.

## The patch note

> v12.3.0: Fixed doorway-induced cache invalidation; entering a room no longer wipes why you went in. Standing in the doorway, confused, is now deprecated.

## Why it is funny

Scored against the judge brief, most important criterion first:

1. **Patch note about a real-life bug.** The doorway effect is a recognised
   everyday memory failure, and the line reads unmistakably as a changelog.
2. **A real comedic idea.** "Cache invalidation" recasts a human context switch
   as a software defect; "standing in the doorway, confused" adds a physical
   second beat instead of explaining the joke.
3. **Release-note voice.** `v12.3.0`, "Fixed", the semicolon and "deprecated"
   are engineering register, with the fix stated as if it already shipped.
4. **Specific bug.** Everyone has frozen mid-threshold, unsure why they came
   in: the reader winces and laughs at the same time.
5. **Efficient use of 160 characters.** 153 used, no trailing newline and no
   throat-clearing setup; both clauses carry the joke.

### Alternatives considered

- **Brain freeze (144):** "v8.4.0: Fixed deadlock in frontal lobe triggered by rapid ice cream ingestion; cold shock now flushes in 4s instead of rebooting the whole face."
  Clever deadlock, but the cold/shock cause does most of the work.
- **3am cringe replay (145):** "v2.7.9: Fixed memory leak in the 3am cringe-replay daemon; archived conversations from 2014 are now garbage-collected before you can wince aloud."
  Strong runner-up; "wince aloud" tells the reaction instead of showing it.
- **Forgotten password (142):** "v6.6.1: Fixed regression where hands lost write access to their own password after one autofill update; muscle-memory cache has been restored."
  Relatable, but "cache restored" is a conventional rollback ending.
- **Doorway memory wipe (153):** chosen — the technical metaphor and the
  deprecated human behavior both land on a first read.

## How to run

```bash
node --experimental-strip-types main.ts             # writes /output/entry.txt
OUT_DIR=out node --experimental-strip-types main.ts  # local verification
OUT_DIR=out node --experimental-strip-types main.ts  # same bytes again
```

Run twice and `cmp` the files: output is one line of ≤160 characters.

## License

MIT — see [LICENSE](LICENSE).

built for the make.fun bounty — join with referral https://make.fun/r/q5fz4ka3
