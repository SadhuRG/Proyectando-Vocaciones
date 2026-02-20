import { scrollToSection } from '../lib/utils';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaFire, FaArrowDown } from 'react-icons/fa';
import '../css/home.css';

const Home = () => {
  return (
    <main>
      {/* Sección Hero Principal */}
      <section id="home" className="hero-section">
        {/* Círculos decorativos del fondo */}
        <div className="bg-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>

        <div className='hero-container'> 
          {/* Badge de edición */}
          <div className="edition-badge">
            <FaFire className="fire-icon" />
            <span>3ª Edición • SEDIPRO UNT</span>
          </div>

          {/* Título principal */}
          <h1 className="hero-title">
            <span className="title-yellow">Proyectando</span>
            <br />
            <span className="title-white">Vocaciones </span>
            <span className="title-yellow">3.0</span>
          </h1>

          {/* Subtítulo */}
          <p className='hero-subtitle'>¡Un paso firme hacia tu futuro profesional!</p>

          {/* Información del evento */}
          <div className="event-info">
            <div className="info-item">
              <FaCalendarAlt className="info-icon" />
              <span>Sábado 28 de Febrero, 2026</span>
            </div>
            <div className="info-item">
              <FaClock className="info-icon" />
              <span>8:30 am - 1:45 pm</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Universidad Nacional de Trujillo</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className='hero-buttons'>
            <a href="#inscripcion" className='btn btn-primary'>¡Inscríbete Ahora!</a>
            <button onClick={() => scrollToSection('objetivos')} className="btn btn-secondary">
              Más Información
            </button>
          </div>

          {/* Flecha scroll hacia abajo */}
          <div className="scroll-indicator" onClick={() => scrollToSection('objetivos')}>
            <FaArrowDown className="bounce-arrow" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;