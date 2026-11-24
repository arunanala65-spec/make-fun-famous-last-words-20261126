// Famous Last Words at 1 Percent — make.fun entry
// One line: the funniest last words a phone would say when its battery
// hits 1 percent. Run with: node main.ts
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt (default: /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Tell my charger I loved it. Tell the flashlight I finally saw the light. Tell the 47 open tabs... I never read a single one.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);
