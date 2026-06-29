# AI Tool Setup

This template supports optional AI tooling for current documentation lookup,
usage tracking, and bounded context packing.

These tools are opt-in. Do not configure external tools, API keys, telemetry, or
submission workflows without user approval.

## Trigger During Repository Analysis

When a user starts with an analysis prompt such as `Analiza el repo.`, the agent
should include an AI tooling check after reading the project docs:

1. Read `docs/AI_TOOLS.md`, `docs/AI_CLIENTS.md`, and this file when present.
2. Detect the active client when possible.
3. Report whether Context7, Tokscale, Repomix CLI, and MCP examples are present.
4. Ask before writing local config, adding secrets, generating
   `repomix-output.md`, starting MCP servers, logging in, or submitting usage
   data.
5. Continue normal project analysis even when optional tooling is missing.

## Context7

Use Context7 when the agent needs current framework, package, SDK, API, or CLI
documentation.

Project setup examples:

```bash
cp .env.example .env
cp .codex/config.example.toml .codex/config.toml
cp .cursor/mcp.example.json .cursor/mcp.json
cp .mcp.example.json .mcp.json
```

Use only the config file for the active client.

Alternative setup through the Context7 CLI:

```bash
npx -y ctx7@latest setup --codex --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
npx -y ctx7@latest setup --cursor --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
npx -y ctx7@latest setup --claude --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
npx -y ctx7@latest setup --gemini --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
npx -y ctx7@latest setup --antigravity --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
npx -y ctx7@latest setup --opencode --mcp --project --stdio --api-key "<CONTEXT7_API_KEY>"
```

## Tokscale

Tokscale is usage observability. It can help compare baseline sessions against
`lean-context` sessions, but it does not reduce token usage by itself.

Local commands:

```bash
npx -y tokscale@latest clients
npx -y tokscale@latest --client codex --today models
npx -y tokscale@latest --client codex --today report
```

Change `--client codex` to the active client when Tokscale supports it. Run
login or submission commands only after user approval.

## Repomix

Repomix is the default token-reduction tool for bounded repository context
packs. Use it after local search identifies relevant paths.

```bash
rg --files README.md AGENTS.md docs src app routes tests package.json composer.json manifest.json \
  | npx -y repomix@latest --stdin --config repomix.config.json
```

For local models or agents without MCP support, provide the generated
`repomix-output.md` as bounded context.

## MCP Tool Overhead

If many MCP servers are enabled, MCP tool descriptions can increase prompt input
before project files are read. Consider `mcp-compressor` or a tool router only
after measuring that MCP overhead is material.
