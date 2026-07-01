# Installation

AGENTS is currently developed as the scoped npm package `@mvuljevas/agents`.
The public package name and distribution channels are not final.

## Local Repository

From this repository:

```bash
npm run agents
npm run agents:help
npm run agents:setup
```

Direct CLI execution:

```bash
node cli/agents.js doctor
node cli/agents.js setup --dry-run
node cli/agents.js suggest --idea "React PWA"
```

## Local Package Test

Before publishing, test the package from a clean project:

```bash
npm pack
npm install -D ./mvuljevas-agents-*.tgz
npx agents doctor
```

## npm

Target experience after the package name is finalized:

```bash
npm install -D <agents-package-name>
npx <agents-binary> doctor
```

The unscoped `agents` npm name is already taken, so the package name must be
resolved before public npm distribution.

## System Package Managers

These channels are desirable but not implemented yet:

```bash
brew install <tap>/<agents-package-name>
choco install <agents-package-name>
sudo npm install -g <agents-package-name>
```

Additional future options:

- `winget` for Windows.
- `scoop` for Windows developer environments.
- Homebrew tap for macOS and Linux.
- GitHub Releases with standalone binaries.

Do not document any of these as available until a release channel exists.
