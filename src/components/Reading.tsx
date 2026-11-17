import { MotionConfig, motion } from 'motion/react';

import { EASE } from '../lib/animations';
import { ArrowRightIcon, CheckIcon } from './Icons';
import PhoneMockup from './PhoneMockup';

const CHECKS = [
  'Posición de lectura guardada automáticamente.',
  'Modo claro y oscuro según tu sistema.',
  'Navegación por capítulos con un toque.',
  'Tipografía clara, sin anuncios ni cuentas.',
];

export default function Reading() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="section reading" id="lectura" aria-labelledby="lectura-title">
        <motion.div
          className="reading__visual"
          aria-hidden="true"
          data-reveal
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}>
          <PhoneMockup screen="reader" />
        </motion.div>

        <motion.div
          className="reading__copy"
          data-reveal
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}>
          <p className="kicker">Lectura</p>
          <h2 id="lectura-title">
            Vuelve justo<em>donde dejaste.</em>
          </h2>
          <p>
            La app guarda tu último capítulo y versículo. Al abrirla, continúas sin buscar de nuevo
            ni perder el hilo.
          </p>
          <ul className="checks">
            {CHECKS.map((item) => (
              <li key={item}>
                <span className="check">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a className="text-link" href="#descargar">
            Descargar la app
            <ArrowRightIcon />
          </a>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
