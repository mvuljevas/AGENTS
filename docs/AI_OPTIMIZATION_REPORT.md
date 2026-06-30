# AI Optimization Report

This file records aggregate, non-sensitive optimization observations for this
repository. It combines Tokscale usage data, bounded Repomix context size, and
client coverage notes. Raw local logs stay under `.ai-runs/` and must not be
committed.

Real token savings must only be claimed after matched baseline and optimized
runs exist for the same task.

## 2026-06-30 - Optimization Run 20260630T152740Z

Measured usage:

- Tokscale clients: `codex,cursor,antigravity,claude,gemini,warp`.
- Measured tokens: 11176426.
- Measured cost: 9.534127.
- Tokscale graph export: `.ai-runs/20260630T152740Z/tokscale-graph.json`.

Context size:

- Optimized Repomix pack: 118 files, 112,427 tokens, 435,400 chars.
- Unoptimized baseline: not available unless a matched baseline run is captured.
- Estimated savings: not claimed without matched baseline and optimized runs.

Coverage:

- Codex and selected clients: ok: see .ai-runs/20260630T152740Z/tokscale-clients-before.txt.
- Cursor: sync failed: Cursor not authenticated.
- Antigravity: sync ok: no sessions detected.
- Warp: sync failed: Warp not authenticated.
- Ollama: not directly supported by Tokscale; measure through the invoking agent or a separate telemetry layer.

## 2026-06-30 - Optimization Run 20260630T153154Z

Measured usage:

- Tokscale clients: `codex,cursor,antigravity,claude,gemini,warp`.
- Measured tokens: 13228343.
- Measured cost: 11.021008.
- Tokscale graph export: `.ai-runs/20260630T153154Z/tokscale-graph.json`.

Context size:

- Optimized Repomix pack: 118 files, 113,121 tokens, 437,978 chars.
- Unoptimized baseline: not available unless a matched baseline run is captured.
- Estimated savings: not claimed without matched baseline and optimized runs.

Coverage:

- Codex and selected clients: ok: see .ai-runs/20260630T153154Z/tokscale-clients-before.txt.
- Cursor: sync failed: Cursor not authenticated.
- Antigravity: sync ok: no sessions detected.
- Warp: sync failed: Warp not authenticated.
- Ollama: not directly supported by Tokscale; measure through the invoking agent or a separate telemetry layer.
