# AGENTS.md

## Cursor Cloud specific instructions

This repository (`EOA`) is a **content/data + art-asset repo** for the 时空星火 ("Spacetime Spark")
card game — it is *not* a runnable application. The only code-like files are:

- `cards_data.ts` — a self-contained, typed TypeScript module exporting `characterClasses`
  (6 classes, ~198 cards), `cardTypeColors`, and `tierColors`. It has no runtime imports.
- `enemies_data.json` — an array of 130 enemy records (5 stages). Image fields are absolute
  URLs (GitHub raw / `/manus-storage/...`), so this data is consumed by a separate external app.
- The remaining tracked files are images (`card_art/`, `characters/`, `enemies/`, `events/`,
  `scenes/`, `assets/intent_icons/`).

There is no server, web UI, or original test suite. "Developing" here means editing the data and
keeping it valid. A minimal Node/TypeScript dev harness is provided in `package.json`:

- Lint / typecheck: `npm run typecheck` (alias `npm run lint`) — runs `tsc --noEmit`.
- Test / validate: `npm run validate` (or `npm test`) — typechecks and validates
  `enemies_data.json` structure/coverage via `scripts/validate.mjs`.
- Run (hello-world demo): `npm run demo` — loads the typed card module + enemy JSON, builds a
  starter deck for a class and sets up a first encounter (`scripts/demo.mts`, runs via `tsx`).
- Build: `npm run build` — emits compiled JS to `dist/` (gitignored; not normally needed).

Notes / gotchas:

- Requires Node 18+ (developed on Node 22). `node_modules/` and `dist/` are gitignored.
- The TypeScript imports in `scripts/` are extensionless (e.g. `from "../cards_data"`) so both
  `tsc` (node resolution) and `tsx` resolve the `.ts`/`.mts` files; keep them extensionless.
- The data files contain CJK (Chinese) identifiers and string values — this is expected, not a
  corruption issue.
