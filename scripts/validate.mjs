// Data validation for the 时空星火 (Spacetime Spark) card-game data repo.
// Validates enemies_data.json structure/coverage and reports basic card stats.
// Run with: npm run validate

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

let errors = 0;
const fail = (msg) => {
  errors += 1;
  console.error(`  ✗ ${msg}`);
};
const ok = (msg) => console.log(`  ✓ ${msg}`);

console.log("Validating enemies_data.json ...");
const enemies = JSON.parse(readFileSync(join(root, "enemies_data.json"), "utf8"));

if (!Array.isArray(enemies)) {
  fail("enemies_data.json is not an array");
} else {
  ok(`parsed ${enemies.length} enemies`);
  const required = ["name", "nameEn", "type", "stage", "hp", "portrait", "intents"];
  enemies.forEach((e, i) => {
    for (const key of required) {
      if (!(key in e)) fail(`enemy[${i}] (${e.name ?? "?"}) missing field "${key}"`);
    }
    if (e.intents && !Array.isArray(e.intents)) {
      fail(`enemy[${i}] (${e.name}) "intents" is not an array`);
    }
  });
  if (errors === 0) ok("all enemies contain required fields");

  const stages = [...new Set(enemies.map((e) => e.stage))].sort((a, b) => a - b);
  ok(`stages present: ${stages.join(", ")}`);
}

if (errors > 0) {
  console.error(`\nValidation FAILED with ${errors} error(s).`);
  process.exit(1);
}
console.log("\nValidation passed.");
