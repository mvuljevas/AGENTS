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

## Interactive Start

When the user asks to analyze the repository, read `docs/AI_TOOLS.md` and
`docs/AI_CLIENTS.md` when present. Report whether Context7, Tokscale, Repomix
CLI, and MCP config examples are available, then ask before enabling tools,
writing secrets, generating context packs, or submitting usage data.

## Lean Context Loading

- Search before opening files.
- Prefer file slices over complete files.
- Respect `.aiignore` and `.rgignore`.
- Avoid `node_modules`, `dist`, caches, lockfiles, and generated output unless
  directly needed.
- Treat `docs/AI_TOOLS.md` as optional setup guidance for MCPs, tracking, and
  compression. Ask the user before enabling any external tool.

## AI Tool Automation

- Run `scripts/ai-tools.sh check` during repository analysis when AI tooling is
  relevant.
- Run `scripts/ai-tools.sh run` at the end of an iteration when `.agents.env`
  marks one or more tools as `on`.
- Keep raw outputs under `.ai-runs/`; commit only aggregate, non-sensitive
  summaries.

## Versioning

- Use Semantic Versioning: `X.Y.Z`.
- Use tags formatted as `vX.Y.Z`.
- Keep `package.json.version` synchronized with the matching tag.
- If the package manager updates lockfile metadata, keep it synchronized too.

## Next-Step Fallback

At the end of every iteration, suggest the next logical step from
`docs/ROADMAP.md`. If roadmap is missing or not actionable, use
`docs/TECHDEBT.md`. If neither provides a clear next action, ask the user how
they would like to proceed.
