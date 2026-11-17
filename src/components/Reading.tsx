import { MotionConfig, motion } from 'motion/react';

import { EASE } from '../lib/animations';
import PhoneMockup from './PhoneMockup';

const NOTES = [
  'Posición de lectura guardada.',
  'Tema claro u oscuro del sistema.',
  'Navegación por capítulos con un toque.',
];

export default function Reading() {
  return (
    <section className="reading" id="lectura" aria-labelledby="lectura-title">
      <div className="reading__copy">
        <h2 id="lectura-title">Vuelve justo donde dejaste.</h2>
        <p>
          La app guarda tu último capítulo y versículo. Al abrirla, continúas sin buscar de nuevo ni
          perder el hilo.
        </p>
        <ul className="reading__notes">
          {NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      <div className="reading__visual">
        <MotionConfig reducedMotion="user">
          <motion.figure
            className="reading__verse"
            data-reveal
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: EASE }}>
            <blockquote>
              <p>
                <span className="verse-num">1</span> Salmo de David. JEHOVÁ es mi pastor; nada me
                faltará.
              </p>
              <p>
                <span className="verse-num">2</span> En lugares de delicados pastos me hará yacer:
                junto á aguas de reposo me pastoreará.
              </p>
            </blockquote>
            <figcaption>Salmos 23:1–2, Reina-Valera 1909</figcaption>
          </motion.figure>
        </MotionConfig>

        <div className="reading__phone" aria-hidden="true">
          <PhoneMockup screen="reader" />
        </div>
      </div>
    </section>
  );
}
