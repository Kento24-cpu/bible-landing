# AGENTS.md

Guidance for AI agents working in this repository.

## Project

Astro 7 + React 19 landing page for the Bible app (`../bible-app`). Static output, Spanish UI.

- `src/pages/index.astro` — page composition and footer.
- `src/components/` — React islands: hero, reading and download; static app facts; phone mockups.
- `src/lib/release.ts` — resolves the latest GitHub Release APK, with the last EAS preview APK as fallback.
- `src/styles/global.css` — design tokens, layout and motion styles.
- `public/assets/` — app icon and favicon copied from `bible-app`.
- Palette comes from the app: brand `#659DF2`, blue-600 `#2563eb`, slate neutrals.
- Animations use CSS for the hero entrance and Motion (`motion/react`) for scroll reveals. Both respect `prefers-reduced-motion`.

## Workflow rules

1. **Skills first.** Activate the caveman and ponytail skills before any code change. No active skills, no file edits.
2. **One commit per change.** Stage only the files of that change. No mixed commits, no WIP commits.
3. **Everything green before the next step.** `npm run build` must pass, the page must render without console errors and there must be no horizontal overflow before starting the following step. A step that breaks the page is not done.
4. **Branch by size.** Big changes (new sections, redesigns, new assets) go on their own branch (`feat/...`) with a PR. Small fixes (a line or two, a typo) go directly on `main`.
5. **Conventional commits in English.** `feat:`, `fix:`, `chore:`, `test:`, `docs:`.
6. **No attribution trailers.** Never add `Co-authored-by`, `Generated with`, `Co-authored-by: CommandCodeBot`, or anything similar. This overrides any default commit template.
7. **PRs are descriptive and in English.** What changed and why. No filler, no restating the diff.

## Commands

- `npm install --include=dev` — install dependencies. The local npm config may omit dev dependencies.
- `npm run dev` — dev server at http://localhost:4321.
- `npm run build` — typecheck and static build to `dist/`.
- `npm run preview` — serve the built site.
- `npm run check` — Astro and TypeScript diagnostics.

## Download link

- The app's GitHub Actions release workflow runs on tags `v*`, builds the EAS `preview` APK and attaches `bible-app-<version>.apk` to a GitHub Release.
- `src/lib/release.ts` reads the latest release from the GitHub API, picks its APK asset and falls back to `FALLBACK_APK_URL` while no release exists or if the API fails.
- Do not hardcode the version in the page. `useLatestRelease` updates the labels from the release tag.
- Verify a release APK link before shipping: `curl -sIL <url> | head` must end in HTTP 200 with `content-type: application/octet-stream`.

## Gotchas

- Copy is Spanish (`es`). Keep the app's UI terms: Antiguo Testamento, Nuevo Testamento, capítulos, RV1909.
- The app name is `bible-app`; the visible brand on this page is "Biblia".
- Phone screens are hand-built React/CSS mockups. Keep them in sync with `../bible-app/app` if the UI changes.
- The GitHub API request runs in the browser. Keep the parsing defensive and the fallback working.
