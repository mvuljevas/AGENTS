# AI Search

```bash
rg "\"manifest_version\"|\"version\"|\"permissions\"" manifest.json
rg "chrome\\.runtime|chrome\\.storage|chrome\\.tabs|chrome\\.action" .
rg "content_scripts|service_worker|web_accessible_resources" manifest.json
rg "ShadowRoot|attachShadow|textContent|innerHTML" *.js
```

Prefer slices over whole files.
