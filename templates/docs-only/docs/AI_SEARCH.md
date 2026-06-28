# AI Search

Use search before opening files.

```bash
rg --files
rg "^#|^##" README.md AGENTS.md docs
rg "TODO|Risk|Decision|Next suggested step" docs
rg "version|SemVer|tag" README.md AGENTS.md docs VERSION
```

Prefer file slices:

```bash
sed -n '1,160p' docs/SNAPSHOTS.md
```
