# Agent Workflow

This React/Vite project uses the AGENTS workflow and `lean-context`.

## Core Rules

- Work in small, traceable blocks.
- Read `README.md`, `AGENTS.md`, `docs/AI_CONTEXT.md`, and recent snapshots
  before making changes.
- Use `docs/AI_SEARCH.md` before opening broad directories.
- Keep app code in `src/`.
- Keep public static files in `public/`.
- Do not add large dependencies without clear need.
- Update docs when commands, routes, architecture, roadmap, or debt changes.
- Do not push commits or tags without explicit user approval.

## Lean Context Loading

- Search before opening files.
- Prefer file slices over complete files.
- Respect `.aiignore` and `.rgignore`.
- Avoid `node_modules`, `dist`, caches, lockfiles, and generated output unless
  directly needed.

## Versioning

- Use Semantic Versioning: `X.Y.Z`.
- Use tags formatted as `vX.Y.Z`.
- Keep `package.json.version` synchronized with the matching tag.
- If the package manager updates lockfile metadata, keep it synchronized too.
