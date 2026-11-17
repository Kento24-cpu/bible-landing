import { useLatestRelease } from '../lib/useLatestRelease';
import DownloadButton from './DownloadButton';

export default function Download() {
  const release = useLatestRelease();

  return (
    <section className="download-shell" id="descargar" aria-labelledby="descargar-title">
      <div className="download">
        <div className="download__copy">
          <h2 id="descargar-title">Descarga una vez. Lee siempre.</h2>
          <p className="download__intro">
            La Biblia completa para Android, sin conexión y sin cuentas.
          </p>
          <div className="download__actions">
            <DownloadButton className="btn btn-primary" label="Descargar APK" />
            <a
              className="link"
              href="https://github.com/Kento24-cpu/bible-app"
              target="_blank"
              rel="noopener">
              Ver el código
            </a>
          </div>
          <p className="download__meta">APK para Android, versión {release.version}.</p>
          <p className="download__note">Las actualizaciones llegan dentro de la app.</p>
        </div>

        <div className="download__icon" aria-hidden="true">
          <img src="/assets/icon.png" alt="" width="88" height="88" />
        </div>
      </div>
    </section>
  );
}
