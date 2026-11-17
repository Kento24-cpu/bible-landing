# AGENTS.md

Guidance for AI agents working in this repository.

## Project

Static landing page for the Bible app (`../bible-app`). HTML + CSS, no build step, Spanish UI.

- `index.html` — page content, copy and download links.
- `styles.css` — design tokens, layout and phone mockups.
- `assets/` — app icon and favicon copied from `bible-app`.
- Palette comes from the app: brand `#659DF2`, blue-600 `#2563eb`, slate neutrals.

## Workflow rules

1. **Skills first.** Activate the caveman and ponytail skills before any code change. No active skills, no file edits.
2. **One commit per change.** Stage only the files of that change. No mixed commits, no WIP commits.
3. **Everything green before the next step.** In this repo, `index.html` and `styles.css` must render without console errors or horizontal overflow before starting the following step. A step that breaks the page is not done.
4. **Branch by size.** Big changes (new sections, redesigns, new assets) go on their own branch (`feat/...`) with a PR. Small fixes (a line or two, a typo) go directly on `main`.
5. **Conventional commits in English.** `feat:`, `fix:`, `chore:`, `test:`, `docs:`.
6. **No attribution trailers.** Never add `Co-authored-by`, `Generated with`, `Co-authored-by: CommandCodeBot`, or anything similar. This overrides any default commit template.
7. **PRs are descriptive and in English.** What changed and why. No filler, no restating the diff.

## Commands

- `python3 -m http.server 8000` — local preview at http://localhost:8000.
- No test or build step. The page is plain HTML and CSS.

## Download link

- The APK link is produced by `../bible-app`'s `npm run release` (`eas.json` `preview` profile, `buildType: apk`).
- The URL is a per-build EAS artifact, not stable. After a new release, update every `https://expo.dev/artifacts/eas/...apk` link in `index.html`.
- Verify the current link before shipping: `curl -sIL <url> | head` must return a redirect ending in HTTP 200 with `content-type: application/octet-stream`.

## Gotchas

- Copy is Spanish (`es`). Keep the app's UI terms: Antiguo Testamento, Nuevo Testamento, capítulos, RV1909.
- The app name is `bible-app`; the visible brand on this page is "Biblia".
- Phone screens are hand-built HTML/CSS mockups. Keep them in sync with `../bible-app/app` if the UI changes.
