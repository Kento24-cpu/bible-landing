import { useLatestRelease } from '../lib/useLatestRelease';
import DownloadButton from './DownloadButton';
import { BookmarkIcon } from './Icons';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const release = useLatestRelease();

  return (
    <section className="hero-shell" aria-labelledby="hero-title">
      <div className="hero">
        <nav className="nav" aria-label="Principal">
          <div className="nav__inner">
            <a className="brand" href="#contenido">
              <img src="/assets/icon.png" alt="" width="38" height="38" />
              <span>Biblia</span>
            </a>
            <div className="nav-links">
              <a href="#funciones">Funciones</a>
              <a href="#lectura">Lectura</a>
              <a href="#descargar">Descarga</a>
            </div>
            <DownloadButton
              className="nav-cta"
              label="Descargar"
              ariaLabel="Descargar la app para Android"
            />
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Reina-Valera 1909 · Android</p>
            <h1 id="hero-title">
              La Palabra.<em>Sin distracciones.</em>
            </h1>
            <p className="lead">
              Los 66 libros de la Biblia Reina-Valera 1909 en una app rápida y sencilla. Sin
              cuentas, sin anuncios y sin conexión.
            </p>
            <div className="hero-actions">
              <DownloadButton className="btn btn-primary" label="Descargar para Android" />
              <a className="btn btn-ghost" href="#funciones">
                Conocer la app
              </a>
            </div>
            <p className="hero-meta" aria-label={`Versión ${release.version}, APK, gratis`}>
              <span className="dot" />v{release.version}
              <span className="dot" />APK<span className="dot" />Gratis
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <span className="orbit orbit--one" />
            <span className="orbit orbit--two" />

            <PhoneMockup screen="library" />

            <div className="float-card">
              <span className="float-card__icon">
                <BookmarkIcon />
              </span>
              <span>
                <small>Continuar leyendo</small>
                <strong>Salmos 23:1</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
