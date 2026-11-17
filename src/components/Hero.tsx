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
              <img src="/assets/icon.png" alt="" width="34" height="34" />
              <span>Biblia</span>
            </a>
            <div className="nav-links">
              <a href="#app">La app</a>
              <a href="#lectura">Lectura</a>
              <a href="#descargar">Descargar</a>
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
            <h1 id="hero-title">La Palabra.</h1>
            <p className="lead">
              La Biblia completa, Reina-Valera 1909, para Android. Sin cuentas, sin anuncios y sin
              conexión.
            </p>
            <div className="hero-actions">
              <DownloadButton className="btn btn-primary" label="Descargar APK" />
              <a className="link link--light" href="#lectura">
                Ver las pantallas
              </a>
            </div>
            <p className="hero-meta">Versión {release.version}. Gratis.</p>
          </div>

          <div className="hero-visual" aria-hidden="true">
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
