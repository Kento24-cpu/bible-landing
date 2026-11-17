export const RELEASES_URL = 'https://github.com/Kento24-cpu/bible-app/releases/latest';
export const FALLBACK_APK_URL =
  'https://expo.dev/artifacts/eas/wVV8RgnxoKxDoSpExVZe8mv8cUc7PoMnfwg4ZZ8R1Rw.apk';
export const FALLBACK_VERSION = '1.0.1';

export type Release = {
  url: string;
  version: string;
  source: 'github' | 'fallback';
};

export const FALLBACK_RELEASE: Release = {
  url: FALLBACK_APK_URL,
  version: FALLBACK_VERSION,
  source: 'fallback',
};

type GitHubRelease = {
  tag_name?: string;
  assets?: { name?: string; browser_download_url?: string }[];
};

const API_URL = 'https://api.github.com/repos/Kento24-cpu/bible-app/releases?per_page=1';
let cached: Promise<Release> | null = null;

export function parseRelease(data: GitHubRelease): Release | null {
  const apk = data.assets?.find((asset) => asset.name?.toLowerCase().endsWith('.apk'));

  if (!apk?.browser_download_url) {
    return null;
  }

  return {
    url: apk.browser_download_url,
    version: (data.tag_name ?? FALLBACK_VERSION).replace(/^v/, ''),
    source: 'github',
  };
}

async function fetchLatestRelease(): Promise<Release> {
  try {
    const response = await fetch(API_URL, {
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!response.ok) {
      return FALLBACK_RELEASE;
    }

    const releases = (await response.json()) as GitHubRelease[];
    return parseRelease(releases[0] ?? {}) ?? FALLBACK_RELEASE;
  } catch {
    return FALLBACK_RELEASE;
  }
}

export function getLatestRelease(): Promise<Release> {
  cached ??= fetchLatestRelease();
  return cached;
}
