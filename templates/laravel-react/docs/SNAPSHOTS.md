# Snapshots

## 0000-00-00 - Block 001: Workflow Foundation

Branch:

- `main`

Current state:

- Laravel React workflow template applied.

Decisions:

- Use existing Laravel conventions.

Risks:

- Actual application architecture is not defined yet.

Next suggested step:

- Confirm app purpose, frontend pattern, and database target.

## 2026-06-30 - Block 002: Tokscale Coverage Defaults

Branch:

- `main`

Current state:

- The template includes default-on Context7, Repomix, Tokscale, usage reporting,
  optimization reporting, and multi-client tracking.
- Tokscale submit defaults to `on`; users can opt down to `dry-run` or `off`.
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

- Confirm app purpose, frontend pattern, and database target.
