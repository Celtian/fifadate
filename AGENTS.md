# Repository Guidance

## Project Overview

- This repository publishes `fifadate`, a TypeScript library that adds FIFA date conversion and date utility methods
  to the native `Date` API.
- `src/index.ts` contains the implementation, global type declarations, and public exports.
- `test/` contains the Vitest test suite.
- `scripts/` contains package preparation scripts for npm and GitHub Package Registry publishing.
- The package is built into separate CommonJS and ES module targets under `dist/`.

## Environment and Package Manager

- Use the Node.js version declared in `.nvmrc`; run `nvm install` and `nvm use` before project commands.
- Use Bun 1.3.14 and keep `bun.lock` authoritative.
- Install dependencies with `bun install --frozen-lockfile`.
- Do not run version, release, publish, or vulnerability-fix scripts unless the user explicitly asks.

## Common Commands

- Build both package targets: `bun run build`
- Run tests: `bun run test`
- Run tests with CI coverage: `bun run test --coverage --run`
- Format-check changed files: `bunx --no-install prettier --check <files>`

## Change Guidelines

- Keep changes focused and preserve the existing public API unless the task explicitly requires an API change.
- Add or update tests in `test/` when changing behavior in `src/`.
- Keep the runtime implementation and the global `Date`/`DateConstructor` declarations synchronized.
- Follow the repository's Prettier settings: two spaces, single quotes, semicolons, and no trailing commas.
- Do not edit generated output under `dist/` or coverage output under `coverage/`.
- Keep GitHub Actions on current supported major versions. Node setup in workflows must use
  `node-version-file: .nvmrc` rather than duplicating the Node version.

## Validation

- For source, test, packaging, or workflow changes, run `bun run build` and `bun run test --coverage --run`.
- For documentation-only changes, validate the affected Markdown.
- Before handoff, run `git diff --check` and report the validation commands that were executed.
