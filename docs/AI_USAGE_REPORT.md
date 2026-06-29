# AI Usage Report

This file records aggregate, non-sensitive AI usage observations for this
repository. Personal logs, raw transcripts, local dashboard data, API keys, and
tool credentials must stay out of version control.

## 2026-06-29 - Initial lean-context Measurement

Scope:

- Repository: AGENTS.
- Local mode: `AGENTS_CONTEXT_MODE=lean-context`.
- Experiment ID: `agents-repo-token-measurement`.
- Run: `lean-context-local-001`.
- Client: Codex.

Local configuration:

- `.agents.env` configured locally and ignored.
- `.ai-usage-log.md` configured locally and ignored.
- `.env` configured locally for Context7 CLI use and ignored.
- `.codex/config.toml` remains ignored for Context7 MCP use.

Tool state:

- Context7: available through local CLI validation.
- Tokscale: available for local Codex usage reporting.
- Repomix: available for bounded context packs.
- MCP: Context7 local config exists; active MCP tools may require client reload.

Measurements:

| Source | Result |
| --- | --- |
| Tokscale task report | `Work on AGENTS`: 1 session, approximately 1.9M tokens, approximately $30.28. |
| Tokscale all local Codex report | 17 sessions, approximately 297.7M tokens, approximately $1668.33. |
| Repomix bounded repository pack | 106 files, 48,012 tokens, 200,871 characters, no suspicious files detected. |
| Context7 CLI validation | Successfully returned Vite documentation for a dev-server configuration query. |

Interpretation:

- Tokscale is useful for local observability, but task grouping is approximate
  and should not be treated as a precise per-repository invoice.
- Repomix gives a concrete context ceiling for the current repository: a broad
  bounded pack is about 48K tokens.
- This run establishes the first `lean-context` measurement point. It does not
  prove savings until compared with a matching baseline run.

Next measurement:

- Clone or copy the same repository state.
- Set `AGENTS_CONTEXT_MODE=baseline` in `.agents.env`.
- Run the same prompt and task.
- Compare Tokscale task totals, Repomix context size, repeated context, and
  output quality.
