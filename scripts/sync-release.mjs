// Keeps the hardcoded fallback in src/lib/release.ts in sync with the latest
// app release. Run by .github/workflows/sync-release.yml on repository_dispatch.
// Usage: node scripts/sync-release.mjs <version> [apk-url]
import { readFileSync, writeFileSync } from 'node:fs';

const [version, apkArg] = process.argv.slice(2);

if (!/^\d+\.\d+\.\d+$/.test(version ?? '')) {
  console.error(`invalid version: ${version}`);
  process.exit(1);
}

// Same asset naming the app's release workflow uploads.
const apkUrl = apkArg?.trim()
  ? apkArg
  : `https://github.com/Kento24-cpu/bible-app/releases/download/v${version}/bible-app-${version}.apk`;

const response = await fetch(apkUrl, { method: 'HEAD', redirect: 'follow' });
const contentType = response.headers.get('content-type') ?? '';

if (!response.ok || !contentType.includes('application/octet-stream')) {
  console.error(`unreachable APK: ${apkUrl} -> ${response.status} ${contentType}`);
  process.exit(1);
}

const file = new URL('../src/lib/release.ts', import.meta.url);
const source = readFileSync(file, 'utf8');
const next = source
  .replace(/FALLBACK_APK_URL =\s*'[^']*'/, `FALLBACK_APK_URL =\n  '${apkUrl}'`)
  .replace(/FALLBACK_VERSION = '[^']*'/, `FALLBACK_VERSION = '${version}'`);

if (next === source) {
  console.log(`release.ts already at ${version}`);
} else {
  writeFileSync(file, next);
  console.log(`release.ts fallback updated to ${version}`);
}
