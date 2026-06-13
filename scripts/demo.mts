// Hello-world demo for the 时空星火 (Spacetime Spark) card-game data repo.
// Exercises core data: loads the typed card module + enemy JSON, builds a
// starter deck for a chosen class, and sets up a first battle encounter.
// Run with: npm run demo

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { characterClasses, type Card, type ClassType } from "../cards_data";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

interface Enemy {
  name: string;
  nameEn: string;
  type: string;
  stage: number;
  hp: string;
  intents: string[];
}

const enemies: Enemy[] = JSON.parse(
  readFileSync(join(root, "enemies_data.json"), "utf8"),
);

console.log("=== 时空星火 (Spacetime Spark) — data demo ===\n");
console.log(`Loaded ${characterClasses.length} playable classes and ${enemies.length} enemies.\n`);

// --- Hello-world action: pick a class and build its starter deck ---
const chosenId: ClassType = "physicist";
const hero = characterClasses.find((c) => c.id === chosenId);
if (!hero) throw new Error(`Class "${chosenId}" not found`);

const starterDeck: Card[] = hero.cards.filter((c) => c.type === "初始牌");

console.log(`> Selected class: ${hero.name} (${hero.id})`);
console.log(`  Core mechanic: ${hero.coreMechanic}`);
console.log(`  Starter deck (${starterDeck.length} cards):`);
for (const card of starterDeck) {
  console.log(`    [${card.cost}] ${card.name} (tier ${card.tier}) — ${card.description}`);
}

// --- Set up a first encounter: pick the first Stage 1 enemy ---
const firstFoe = enemies.find((e) => e.stage === 1);
if (!firstFoe) throw new Error("No Stage 1 enemy found");

console.log(`\n> First encounter: ${firstFoe.name} (${firstFoe.nameEn}) — ${firstFoe.type}, HP ${firstFoe.hp}`);
console.log(`  Possible intents:`);
for (const intent of firstFoe.intents) {
  console.log(`    • ${intent}`);
}

console.log("\nDemo complete: battle is set up and ready.");
