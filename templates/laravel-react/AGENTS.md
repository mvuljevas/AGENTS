# Agent Workflow

This Laravel React project uses the AGENTS workflow and `lean-context`.

## Core Rules

- Follow existing Laravel, Blade, React, Vite, Eloquent, and test conventions.
- Read `README.md`, `AGENTS.md`, `docs/AI_CONTEXT.md`, and recent snapshots
  before changing files.
- Use `docs/AI_SEARCH.md` before opening broad directories.
- Keep domain logic out of views when it affects pricing, permissions, security,
  or persistence.
- Add or update tests for business behavior, auth, permissions, PDFs, emails,
  migrations, and important frontend workflows.
- Do not push commits or tags without explicit user approval.

## Interactive Start

When the user asks to analyze the repository, read `docs/AI_TOOLS.md` and
`docs/AI_CLIENTS.md` when present. Report whether Context7, Tokscale, Repomix
CLI, and MCP config examples are available, then ask before enabling tools,
writing secrets, generating context packs, or submitting usage data.

## Lean Context Loading

- Search before opening files.
- Prefer slices over complete files.
- Avoid `vendor`, `node_modules`, build output, caches, secrets, and lockfiles
  unless directly relevant.
- Treat `docs/AI_TOOLS.md` as optional setup guidance for MCPs, tracking, and
  compression. Ask the user before enabling any external tool.

## AI Tool Automation

- Run `scripts/ai-tools.sh check` during repository analysis when AI tooling is
  relevant.
- Run `scripts/ai-tools.sh run` at the end of an iteration when `.agents.env`
  marks one or more tools as `on`.
- When `.githooks/pre-commit` exists and the user wants automatic iteration
  closure, run `scripts/ai-tools.sh install-hooks` once and set
  `AGENTS_AUTO_RUN_ON_COMMIT=on` in `.agents.env`.
- With commit automation enabled, the pre-commit hook runs
  `scripts/ai-tools.sh run-and-stage` before the iteration commit.
- Keep raw outputs under `.ai-runs/`; commit only aggregate, non-sensitive
  summaries.

## Versioning

- Use Semantic Versioning.
- Use tags formatted as `vX.Y.Z`.
- Use the existing project version source when one exists; otherwise use
  `VERSION`.

## Next-Step Fallback

At the end of every iteration, suggest the next logical step from
`docs/ROADMAP.md`. If roadmap is missing or not actionable, use
`docs/TECHDEBT.md`. If neither provides a clear next action, ask the user how
they would like to proceed.
