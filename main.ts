import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUT_DIR ?? "/output";
const entry: string =
  "v12.3.0: Fixed doorway-induced cache invalidation; entering a room no longer wipes why you went in. Standing in the doorway, confused, is now deprecated.";

if (entry.length > 160) {
  throw new Error(`entry exceeds 160 characters: ${entry.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
