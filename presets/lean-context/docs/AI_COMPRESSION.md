# AI Compression

Compression tools can reduce context size, but they do not replace disciplined
retrieval.

Use compression only after deciding what context is relevant.

## TOON

TOON is useful for compact structured data, especially repeated objects and
tables that would be verbose as JSON.

Recommended use:

- Issue lists.
- Label inventories.
- Snapshot summaries.
- Repeated records with shared fields.

Avoid TOON when exact JSON compatibility is required.

Reference: https://github.com/aj-geddes/toon

## Repomix

Repomix can package repository context for AI tools. Use it only with strict
include and ignore rules.

Recommended use:

- Small documentation packs.
- Focused subsystem reviews.
- Sharing a bounded context package outside the local environment.

Avoid full-repository packs by default.

Reference: https://repomix.com/

Token reduction features to consider:

- `--compress` for structure-focused code extraction.
- `--token-count-tree` before packing large repositories.
- `--remove-comments` and `--remove-empty-lines` only when comments and spacing
  are not needed for the task.
- `--stdin` with `rg --files` or `git ls-files` for narrow file selection.

When available, Repomix MCP can expose packing tools to an MCP-compatible
client. Keep it opt-in and run estimates before returning packed output.

Reference: https://repomix.com/guide/mcp-server

## MCP Tool Compression

If a user enables multiple MCP servers, tool descriptions can become a
significant input-token cost before any file is read.

Recommended optional tools:

- `mcp-compressor` for reducing MCP tool-description overhead.
- ToolHive MCP Optimizer or equivalent tool routers when the user manages many
  MCP servers and wants only relevant tools exposed per request.

Use these only after the user confirms they want an MCP optimization layer. They
add moving parts and should be measured with the same usage-tracking workflow as
other optimizations.

References:

- https://github.com/atlassian-labs/mcp-compressor
- https://docs.stacklok.com/toolhive

## Caveman Mode

Caveman Mode means asking the agent to respond tersely and skip nonessential
prose.

Recommended use:

- Status updates.
- Repeated implementation loops.
- Low-risk confirmations.

Do not use it for requirements discovery, legal/security decisions, migration
plans, or user-facing documentation drafts.

## Tokenless / Tokless-Style Tools

Tokenless or Tokless-style compression tools may be useful when the user has
verified the implementation and accepts the tradeoffs.

Recommended policy:

- Treat as optional.
- Test on non-sensitive context first.
- Compare compressed output against source for lost constraints.
- Do not compress secrets or credentials.
- Do not rely on compressed context as the only source for high-risk changes.

## Compression Rule

Compress after filtering, not before.

The preferred sequence is:

1. Ignore irrelevant paths.
2. Search locally.
3. Select the smallest relevant context.
4. Estimate token impact.
5. Summarize, compress, or encode only that context.
