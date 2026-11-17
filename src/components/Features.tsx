import type { ComponentType } from 'react';
import { MotionConfig, motion } from 'motion/react';

import { EASE, fadeUp, stagger } from '../lib/animations';
import { BookOpenIcon, ListIcon, TypeIcon, WifiOffIcon } from './Icons';

type Feature = {
  title: string;
  text: string;
  Icon: ComponentType;
};

const FEATURES: Feature[] = [
  {
    title: '66 libros',
    text: 'Antiguo y Nuevo Testamento completos, de Génesis a Apocalipsis.',
    Icon: BookOpenIcon,
  },
  {
    title: '1.189 capítulos',
    text: 'Todo el texto organizado por libro y capítulo, fácil de recorrer.',
    Icon: ListIcon,
  },
  {
    title: 'Reina-Valera 1909',
    text: 'La traducción clásica en español, con texto de dominio público.',
    Icon: TypeIcon,
  },
  {
    title: 'Sin conexión',
    text: 'El texto vive dentro de la app. Lee donde estés, sin datos ni wifi.',
    Icon: WifiOffIcon,
  },
];

export default function Features() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="section" id="funciones" aria-labelledby="funciones-title">
        <motion.div
          className="section-head"
          data-reveal
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}>
          <p className="kicker">Funciones</p>
          <h2 id="funciones-title">
            Todo lo esencial,<em>nada de más.</em>
          </h2>
          <p>Una app para leer la Biblia, y solo para eso. Sin registro, sin suscripción y sin ruido.</p>
        </motion.div>

        <motion.div
          className="feature-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
          {FEATURES.map(({ title, text, Icon }) => (
            <motion.article
              className="feature"
              key={title}
              variants={fadeUp}
              data-reveal
              whileHover={{ y: -4 }}>
              <span className="feature__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}
