@AGENTS.md

# Personal Website — GitHub Repo Clone

A personal website built to visually mimic a GitHub repository page in light mode.

## Stack

- **Next.js 16** (App Router, `src/` directory structure)
- **React + TypeScript**
- **Tailwind CSS v4** with `@theme inline` for custom design tokens
- **`@primer/octicons-react`** for GitHub SVG icons (NOT `@primer/react` — it has SSR compatibility issues with App Router)

## Architecture

All GitHub Primer light-mode color tokens are mapped to `--color-gh-*` CSS custom properties in `src/app/globals.css`. Components are server components (no `'use client'` needed since octicons are just SVGs).

**Layout pattern:**
- Header + tabs: full-width with `bg-gh-canvas-subtle`, content padded with `px-4`
- Repo header + main content: constrained to `max-w-[1280px] px-4`

**Key components:**
- `src/components/GitHubHeader.tsx` — Top nav bar (hamburger, logo, breadcrumb, search, avatar)
- `src/components/RepoNav.tsx` — Tab navigation (Code, Issues, PRs, etc.)
- `src/components/RepoHeader.tsx` — Repo name + action buttons (Watch/Fork/Star)
- `src/components/FileExplorer.tsx` — Branch bar, commit bar, file list, README panel
- `src/components/Sidebar.tsx` — About, Releases, Deployments, Packages

## Reference Images

Three reference screenshots live in `.claude/` for visual comparison:
- `github-reference-bare.png` — Clean GitHub repo page, primary pixel-comparison reference
- `github-reference-circled.png` — Same page with key components circled
- `others-repo.png` — Additional reference showing another user's repo

## Visual Verification Workflow

Use Playwright CLI to take headless screenshots and compare against reference images:

```bash
# Start dev server first
npm run dev

# Take a screenshot (always save to ~/.claude/tmp/)
npx playwright screenshot http://localhost:3000 ~/.claude/tmp/current.png --full-page

# Compare side-by-side with reference
# Open both ~/.claude/tmp/current.png and .claude/github-reference-bare.png
```

Always save screenshots to `~/.claude/tmp/` (create if needed), not `/tmp`.

## Status

The header area (GitHubHeader + RepoNav) has been extensively refined to closely match the reference screenshots. Pixel-level adjustments have been made to spacing, padding, colors, font sizes, and border details. The remaining components (FileExplorer, Sidebar, RepoHeader) have rough implementations that need similar polish.
