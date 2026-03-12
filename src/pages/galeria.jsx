// src/pages/galeria.jsx
import { useState, useEffect, useRef } from 'react';
import '../css/galeria.css';
import GaleriaEdicion from '../components/organizadores/GaleriaEdicion';
import PixelTransition from '../components/organizadores/PixelTransition';

// ── Logos ─────────────────────────────────────────────────────────
const logoPv3 = '/galeria/logo_Pv3.png';
const logoPv2 = '/galeria/logo_Pv2.png';
const logoPv1 = '/galeria/logo_Pv1.png';

// ── Collages por edición (primeras fotos disponibles) ─────────────
const take = (obj, n = 6) => Object.values(obj).slice(0, n).map(m => m.default);

const COLLAGE = {
  pv3: take(import.meta.glob('../assets/galeria/PV_3.0/**/*.{webp,jpg,jpeg,png}', { eager: true })),
  pv2: take(import.meta.glob('../assets/galeria/PV_2.0/**/*.{webp,jpg,jpeg,png}', { eager: true })),
  pv1: take(import.meta.glob('../assets/galeria/PV_1.0/*.{webp,jpg,jpeg,png}', { eager: true })),
};

// ── Datos de ediciones ────────────────────────────────────────────
const EDICIONES = [
  {
    id: 'pv3',
    edition: '3.0',
    version: 'Proyectando Vocaciones 3.0',
    fecha: '28 de Febrero, 2026',
    año: '2026',
    logo: logoPv3,
    descripcion:
      'La tercera edición reunió a cientos de estudiantes con 35 carreras para descubrir su vocación universitaria.',
    color: '#9c15d0',
    colorLight: '#ebd4f4',
    colorAccent: '#facf2b',
    colorDark: '#451b54',
    activa: true,
  },
  {
    id: 'pv2',
    edition: '2.0',
    version: 'Proyectando Vocaciones 2.0',
    fecha: '22 de Febrero, 2025',
    año: '2025',
    logo: logoPv2,
    descripcion:
      'La segunda edición consolidó el proyecto como referente de orientación universitaria en la región.',
    color: '#094a86',
    colorLight: '#cae1f5',
    colorAccent: '#f0ab2b',
    colorDark: '#0f274d',
    activa: true,
  },
  {
    id: 'pv1',
    edition: '1.0',
    version: 'Proyectando Vocaciones 1.0',
    fecha: '16 de Diciembre, 2022',
    año: '2022',
    logo: logoPv1,
    descripcion:
      'El inicio de una idea que nació para conectar a los estudiantes con su vocación universitaria.',
    color: '#1b385e',
    colorLight: '#e7eff8',
    colorAccent: '#ef6d13',
    colorDark: '#0d1f35',
    activa: true,
  },
];

// ── Panel collage ─────────────────────────────────────────────────
function CollagePanel({ fotos, color }) {
  if (!fotos || fotos.length === 0) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#fff', fontSize: '0.9rem', opacity: 0.7 }}>Próximamente</span>
      </div>
    );
  }

  const grid = fotos.slice(0, 6);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: grid.length >= 4 ? '1fr 1fr 1fr' : '1fr 1fr',
        gridAutoRows: '1fr',
        gap: '4px',
        background: color,
        padding: '4px',
      }}
    >
      {grid.map((src, i) => (
        <div key={i} style={{ overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
          <img
            src={src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ── Partículas canvas ─────────────────────────────────────────────
function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;

    const ctx = c.getContext('2d');
    let raf, W, H;

    const resize = () => {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
    };

    resize();

    const SHAPES = ['tri', 'sq', 'circ', 'dia'];
    const COLORS = ['#9c15d0', '#facf2b', '#094a86', '#f0ab2b', '#ef6d13', '#1b385e'];

    const pts = Array.from({ length: 36 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      s: Math.random() * 18 + 5,
      sh: SHAPES[Math.floor(Math.random() * 4)],
      col: COLORS[Math.floor(Math.random() * 6)],
      a: Math.random() * 0.13 + 0.03,
      rot: Math.random() * Math.PI * 2,
      rv: (Math.random() - 0.5) * 0.009,
    }));

    const draw = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.a;
      ctx.fillStyle = ctx.strokeStyle = p.col;
      ctx.lineWidth = 1.5;

      const s = p.s;
      ctx.beginPath();

      if (p.sh === 'circ') {
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.sh === 'sq') {
        ctx.rect(-s, -s, s * 2, s * 2);
        ctx.stroke();
      } else if (p.sh === 'tri') {
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.87, s * 0.5);
        ctx.lineTo(-s * 0.87, s * 0.5);
        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.moveTo(0, -s);
        ctx.lineTo(s, 0);
        ctx.lineTo(0, s);
        ctx.lineTo(-s, 0);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rv;

        if (p.x < -50) p.x = W + 50;
        if (p.x > W + 50) p.x = -50;
        if (p.y < -50) p.y = H + 50;
        if (p.y > H + 50) p.y = -50;

        draw(p);
      });

      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="gls-canvas" />;
}

// ── Preview visual reutilizable ───────────────────────────────────
function EditionPreview({ ed, priority = false }) {
  const fotos = COLLAGE[ed.id] ?? [];

  const logoPanel = (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: ed.colorLight,
      }}
    >
      <img
        src={ed.logo}
        alt={ed.version}
        style={{
          width: priority ? '55%' : '62%',
          maxWidth: priority ? '220px' : '150px',
          objectFit: 'contain',
        }}
      />
    </div>
  );

  const collagePanel = <CollagePanel fotos={fotos} color={ed.color} />;

  return (
    <PixelTransition
      firstContent={logoPanel}
      secondContent={collagePanel}
      gridSize={9}
      pixelColor={ed.color}
      animationStepDuration={0.22}
      aspectRatio="100%"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    />
  );
}

// ── Tarjeta destacada ─────────────────────────────────────────────
function FeaturedEdition({ ed, onSelect }) {
  return (
    <section className="gls-featured" style={{ '--ec': ed.color, '--eca': ed.colorAccent, '--ecl': ed.colorLight }}>
      <div className="gls-featured__media">
        <EditionPreview ed={ed} priority />
      </div>

      <div className="gls-featured__content">
        <span className="gls-featured__kicker">Edición destacada</span>
        <h2 className="gls-featured__title">{ed.version}</h2>
        <p className="gls-featured__date">📅 {ed.fecha}</p>
        <p className="gls-featured__desc">{ed.descripcion}</p>

        <div className="gls-featured__meta">
          <span className="gls-featured__pill">Más reciente</span>
          <span className="gls-featured__pill">{ed.año}</span>
        </div>

        <button
          className="gls-featured__btn"
          style={{ background: ed.color }}
          onClick={() => ed.activa && onSelect(ed)}
        >
          Entrar a la galería →
        </button>
      </div>
    </section>
  );
}

// ── Tarjeta simple de edición ─────────────────────────────────────
function EditionCard({ ed, index, onSelect }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`gls-edition-card ${vis ? 'gls-edition-card--vis' : ''} ${!ed.activa ? 'gls-edition-card--off' : ''}`}
      style={{ '--ec': ed.color, '--eca': ed.colorAccent, '--ecl': ed.colorLight }}
      onClick={() => ed.activa && onSelect(ed)}
    >
      <div className="gls-edition-card__media">
        <EditionPreview ed={ed} />
      </div>

      <div className="gls-edition-card__body">
        <div className="gls-edition-card__top">
          <span className="gls-edition-card__tag">Edición {ed.edition}</span>
          {index === 0 && <span className="gls-edition-card__badge">Más reciente</span>}
        </div>

        <h3 className="gls-edition-card__title">{ed.version}</h3>
        <p className="gls-edition-card__date">{ed.fecha}</p>
        <p className="gls-edition-card__desc">{ed.descripcion}</p>

        <div className="gls-edition-card__foot">
          <span className="gls-edition-card__year">{ed.año}</span>
          <span className="gls-edition-card__link">
            {ed.activa ? 'Ver galería →' : 'Próximamente'}
          </span>
        </div>
      </div>
    </article>
  );
}

// ── Página principal ──────────────────────────────────────────────
export default function Galeria() {
  const [edicion, setEdicion] = useState(null);

  if (edicion) {
    return <GaleriaEdicion edicion={edicion} onVolver={() => setEdicion(null)} />;
  }

  const [featured, ...resto] = EDICIONES;

  return (
    <main className="gls-page">
      {/* ── Hero ────────────────────────────────────────── */}
      {/* <header className="gls-hero gls-hero--compact">
        <Particles />
        <div className="gls-hero__overlay" />
        <div className="gls-hero__body">
          <span className="gls-hero__eyebrow">Universidad Nacional de Trujillo · SEDIPRO</span>

          <h1 className="gls-hero__title">
            <span className="gls-hero__title-top">Galería de ediciones</span>
            <span className="gls-hero__title-main">Proyectando Vocaciones</span>
          </h1>

          <p className="gls-hero__sub">
            Explora cada edición y entra a sus subgalerías de momentos, actividades y recuerdos.
          </p>
        </div>
      </header> */}

      {/* ── Destacada ───────────────────────────────────── */}
      <FeaturedEdition ed={featured} onSelect={setEdicion} />

      {/* ── Selector de ediciones ───────────────────────── */}
      <section className="gls-grid-section">
        <div className="gls-grid-section__head">
          <p className="gls-grid-section__label">Explorar</p>
          <h2 className="gls-grid-section__title">Selecciona una edición</h2>
          <p className="gls-grid-section__sub">
            Cada tarjeta te lleva a una subgalería con fotos y momentos de esa edición.
          </p>
        </div>

        <div className="gls-grid">
          {EDICIONES.map((ed, i) => (
            <EditionCard key={ed.id} ed={ed} index={i} onSelect={setEdicion} />
          ))}
        </div>
      </section>

      <footer className="gls-footer">
        <p>© Proyectando Vocaciones · Universidad Nacional de Trujillo</p>
      </footer>
    </main>
  );
}