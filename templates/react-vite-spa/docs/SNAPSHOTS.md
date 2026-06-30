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

- Define the app idea and first user workflow.
