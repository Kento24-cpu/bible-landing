import { useEffect, useState } from 'react';

import { FALLBACK_RELEASE, getLatestRelease, type Release } from './release';

export function useLatestRelease(): Release {
  const [release, setRelease] = useState<Release>(FALLBACK_RELEASE);

  useEffect(() => {
    let active = true;

    void getLatestRelease().then((next) => {
      if (active) {
        setRelease(next);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return release;
}
