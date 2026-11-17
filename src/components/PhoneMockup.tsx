import { BookOpenIcon, SettingsIcon } from './Icons';

const BOOKS = [
  ['Génesis', 50],
  ['Éxodo', 40],
  ['Levítico', 27],
  ['Números', 36],
  ['Deuteronomio', 34],
] as const;

const VERSES = [
  {
    number: 1,
    text: 'Salmo de David. JEHOVÁ es mi pastor; nada me faltará.',
    selected: true,
  },
  {
    number: 2,
    text: 'En lugares de delicados pastos me hará yacer: junto á aguas de reposo me pastoreará.',
    selected: false,
  },
  {
    number: 3,
    text: 'Confortará mi alma; guiaráme por sendas de justicia por amor de su nombre.',
    selected: false,
  },
  {
    number: 4,
    text: 'Aunque ande en valle de sombra de muerte, no temeré mal alguno.',
    selected: false,
  },
];

function StatusBar() {
  return (
    <div className="status">
      <span>9:41</span>
      <span className="status__icons">
        <span className="bars">
          <i />
          <i />
          <i />
        </span>
        <span className="battery" />
      </span>
    </div>
  );
}

export default function PhoneMockup({ screen }: { screen: 'library' | 'reader' }) {
  return (
    <div
      className={`phone ${screen === 'library' ? 'phone--dark' : 'phone--light'}`}
      aria-hidden="true">
      <span className="phone__island" />
      <div className="phone__screen">
        <StatusBar />

        {screen === 'library' ? (
          <>
            <div className="screen-body">
              <p className="screen-title">Biblia</p>
              <div className="seg">
                <span className="on">Antiguo Testamento</span>
                <span>Nuevo Testamento</span>
              </div>
              <div className="book-list">
                {BOOKS.map(([name, chapters]) => (
                  <div className="book" key={name}>
                    <b>{name}</b>
                    <small>{chapters} capítulos</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="screen-tabs">
              <span className="tab on">
                <BookOpenIcon />
                Libros
              </span>
              <span className="tab">
                <SettingsIcon />
                Ajustes
              </span>
            </div>
          </>
        ) : (
          <div className="reader">
            <div className="reader__top">
              <span className="reader__back">Atrás</span>
              <span className="reader__badge">RV1909</span>
            </div>
            <p className="reader__title">Salmos 23</p>
            <div className="reader__verses">
              {VERSES.map((verse) => (
                <p className={`verse${verse.selected ? ' verse--on' : ''}`} key={verse.number}>
                  <b>{verse.number}</b> {verse.text}
                </p>
              ))}
            </div>
            <div className="reader__foot">
              <span>Anterior</span>
              <span>23 / 150</span>
              <span>Siguiente</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
