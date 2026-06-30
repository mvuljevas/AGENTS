# Snapshots

## 0000-00-00 - Block 001: Project Foundation

Branch:

- `main`

Current state:

- React/Vite starter created.

Decisions:

- Use `package.json` as version source.

Risks:

- Product scope is not defined yet.

Next suggested step:

- Define the app idea and first user workflow.

## 2026-06-30 - Block 002: Tokscale Coverage Defaults

Branch:

- `main`

Current state:

- The template includes optional Context7, Repomix, Tokscale, Tokless, usage reporting, optimization reporting, and multi-client tracking.
- Tokscale submit defaults to `dry-run`; users can opt into `on` or choose `off`.
- `scripts/ai-tools.sh` supports guided machine setup and local dashboard
  commands.
- Template version has been updated to `0.10.0`.

Decisions:

- Keep raw usage data ignored and commit only aggregate reports.
- Do not claim token savings until matched baseline and optimized runs exist.

Risks:

- Client-specific Tokscale integrations may need user login before coverage is
  complete.

Next suggested step:

- Define the app idea and first user workflow.

## 2026-06-30 - Block 003: AGENTS CLI Tooling

Branch:

- `main`

Current state:

- The template includes AGENTS CLI documentation and optional project tooling.
- `package.json` includes AGENTS scripts where useful.
- The safe dashboard wrapper is available without replacing normal project scripts.
- Template version has been updated to `0.11.0`.

Decisions:

- Use `agents` as the public setup and dashboard command.
- Keep all external tools optional and user-confirmed.

Risks:

- `@mvuljevas/agents` must be published or linked before package install works from a clean external project.

Next suggested step:

- Run `npm run agents:doctor` after creating a project from this template.

## 2026-06-30 - Block 004: CLI Documentation Cleanup

Branch:

- `main`

Current state:

- CLI documentation lists only supported `agents` commands.
- Unsupported flag variants are no longer documented as a user-facing concept.
- Template version has been updated to `0.11.1`.

Decisions:

- Keep generated project documentation focused on valid commands and setup
  paths.

Risks:

- `@mvuljevas/agents` must be published or linked before package install works
  from a clean external project.

Next suggested step:

- Run `npm run agents:doctor` after creating a project from this template.
