# AI Tool Setup

This repository supports optional AI tooling for current documentation lookup,
usage tracking, and bounded context packing.

These tools are opt-in. Do not configure external tools, API keys, telemetry, or
submission workflows without user approval.

## Trigger During Repository Analysis

When a user starts with an analysis prompt such as `Analiza el repo.`, the agent
should include an AI tooling check after reading the project docs:

1. Check `.agents.env` when present.
2. If `AGENTS_CONTEXT_MODE=baseline`, report that optional AI tooling is
   disabled for measurement and skip setup.
3. Read `docs/AI_TOOLS.md`, `docs/AI_CLIENTS.md`, and this file when present.
4. Detect the active client when possible.
5. Report whether Context7, Tokscale, Repomix CLI, and MCP examples are present.
6. Ask before writing local config, adding secrets, generating
   `repomix-output.md`, starting MCP servers, logging in, or submitting usage
   data.
7. Continue normal project analysis even when optional tooling is missing.

## Measurement Mode

Use `.agents.env` for non-secret experiment flags:

```bash
cp .agents.env.example .agents.env
cp .ai-usage-log.example.md .ai-usage-log.md
```

Supported modes:

- `AGENTS_CONTEXT_MODE=baseline`: skip optional `lean-context` accelerators and
  AI tool bootstrap unless the user explicitly asks.
- `AGENTS_CONTEXT_MODE=lean-context`: use the normal template workflow and ask
  before enabling optional tools.

See `docs/AI_MEASUREMENT.md` for the full A/B workflow.

## Automation

Use the local automation script to run every active tool:

```bash
scripts/ai-tools.sh check
scripts/ai-tools.sh run
```

The script reads `.agents.env` and runs only tools marked as `on`.

Supported flags:

```text
AGENTS_CONTEXT7=on
AGENTS_REPOMIX=on
AGENTS_TOKSCALE=on
AGENTS_MCP=ask
AGENTS_AUTO_RUN_ON_COMMIT=off
AGENTS_USAGE_REPORT=on
AGENTS_USAGE_REPORT_TARGET=docs/AI_USAGE_REPORT.md
```

Outputs:

- Raw local logs: `.ai-runs/<timestamp>/`.
- Optional aggregate report: `docs/AI_USAGE_REPORT.md`.

Agents should run `scripts/ai-tools.sh run` at the end of an iteration when
tools are active. Raw logs remain ignored; only aggregate summaries should be
committed.

## Commit Hook Automation

Use the repository hook when each committed iteration should automatically run
the active tools:

```bash
scripts/ai-tools.sh install-hooks
```

Then set this local flag:

```text
AGENTS_AUTO_RUN_ON_COMMIT=on
```

When enabled, `.githooks/pre-commit` runs:

```bash
scripts/ai-tools.sh run-and-stage
```

This executes active tools, writes raw outputs to `.ai-runs/`, appends the
aggregate usage report when enabled, and stages the report target. The hook does
not push commits, tags, reports, or raw logs.

## Local Secret Policy

- Store real keys only in ignored local files or the user's tool-specific secret
  store.
- Never commit `.env`, `.codex/config.toml`, personal usage logs, or generated
  token reports.
- Rotate any API key that was pasted into a chat, ticket, commit, or shared log.

## Context7

Use Context7 when the agent needs current framework, package, SDK, API, or CLI
documentation.

Recommended local setup for this repository:

```bash
cp .env.example .env
cp .codex/config.example.toml .codex/config.toml
```

Then edit the local files and set `CONTEXT7_API_KEY`.

Alternative setup through the Context7 CLI:

```bash
npx -y ctx7@latest setup --codex --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
```

Validation:

```bash
CONTEXT7_API_KEY="<CONTEXT7_API_KEY>" \
  npx -y ctx7@latest docs /vitejs/vite "How to configure the dev server port?"
```

The Context7 setup may also install `.agents/skills/context7-mcp/SKILL.md`.
Keep the skill versioned when it contains reusable behavior, but never version a
file containing the real API key.

## Tokscale

Tokscale is usage observability. It can show local Codex usage and help compare
baseline sessions against `lean-context` sessions, but it does not reduce token
usage by itself.

Local commands:

```bash
npx -y tokscale@latest clients
npx -y tokscale@latest --client codex --today models
npx -y tokscale@latest --client codex --today report
```

Remote Tokscale login and submission are optional:

```bash
npx -y tokscale@latest login
npx -y tokscale@latest submit
```

Only run submission commands after the user approves sharing usage data.

## Repomix

Repomix is the default token-reduction tool for bounded repository context
packs. Use it after local search identifies relevant paths.

Example:

```bash
rg --files README.md AGENTS.md docs presets templates \
  | npx -y repomix@latest --stdin --config presets/lean-context/files/repomix.config.json
```

Use `--token-count-tree` or the configured token count tree before sharing large
context packs.

## MCP Tool Overhead

If many MCP servers are enabled, MCP tool descriptions can increase the prompt
input before the agent reads project files. Consider `mcp-compressor` or a tool
router only after measuring that MCP overhead is material.
