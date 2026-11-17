import { MotionConfig, motion } from 'motion/react';

import { EASE } from '../lib/animations';
import { useLatestRelease } from '../lib/useLatestRelease';
import DownloadButton from './DownloadButton';

export default function Download() {
  const release = useLatestRelease();

  return (
    <MotionConfig reducedMotion="user">
      <section className="download-shell" id="descargar" aria-labelledby="descargar-title">
        <div className="download">
          <motion.div
            className="download__copy"
            data-reveal
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}>
            <p className="kicker kicker--light">Descarga</p>
            <h2 id="descargar-title">
              Lleva la Palabra<em>contigo.</em>
            </h2>
            <p>
              Descarga la app para Android y empieza a leer en menos de un minuto. Gratis y sin
              registro.
            </p>
            <div className="hero-actions">
              <DownloadButton className="btn btn-primary" label="Descargar APK" />
              <a
                className="btn btn-ghost"
                href="https://github.com/Kento24-cpu/bible-app"
                target="_blank"
                rel="noopener">
                Ver el código
              </a>
            </div>
            <p className="download__meta">Versión {release.version} · APK · Android</p>
          </motion.div>

          <motion.div
            className="download__badge"
            aria-hidden="true"
            data-reveal
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}>
            <img src="/assets/icon.png" alt="" width="132" height="132" />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
