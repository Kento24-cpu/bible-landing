# bible-landing

Landing page for the Bible app, built with Astro and React.

## Commands

```bash
npm install --include=dev
npm run dev      # http://localhost:4321
npm run build    # typecheck + static build to dist/
npm run preview  # serve the built site
```

## Download

The APK buttons resolve the latest GitHub Release from `Kento24-cpu/bible-app` at runtime. If no release exists yet, they fall back to the last EAS preview APK.

The fallback is synced automatically: when `bible-app` publishes a release, its workflow sends a `repository_dispatch` here and `.github/workflows/sync-release.yml` updates `src/lib/release.ts`, checks the build and commits. That dispatch needs a `LANDING_SYNC_TOKEN` secret in `bible-app`.

## Structure

- `src/pages/index.astro` — page composition.
- `src/components/` — React islands and phone mockups.
- `src/lib/release.ts` — latest release resolution and fallback.
- `src/styles/global.css` — design tokens and layout.
- `public/assets/` — app icon and favicon.
