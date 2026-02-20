import { editions } from '../lib/routes';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEditionChange = (e) => {
    if (e.target.value) {
      navigate(`/ediciones/${e.target.value}`);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      navigate('/home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (hash) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/' || location.pathname === '/home') {
      // Ya estamos en home, solo hacer scroll
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navegar a home y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        {/* Logo y nombre */}
        <div className="logo-container">
          <div className="logo-circle">PV</div>
          <span className="logo-text">Proyectando Vocaciones</span>
        </div>

        {/* Navegación */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleHomeClick}>Inicio</a>
          <a href="#nosotros" onClick={(e) => { e.preventDefault(); handleNavClick('quienes-somos'); }}>Nosotros</a>
          <a href="#objetivos" onClick={(e) => { e.preventDefault(); handleNavClick('objetivos'); }}>Objetivos</a>
          <a href="#evento" onClick={(e) => { e.preventDefault(); handleNavClick('evento'); }}>Evento</a>
          <a href="/carreras" onClick={() => { setIsMobileMenuOpen(false); navigate('/carreras'); }}>Carreras</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNavClick('contacto'); }}>Contacto</a>
        </nav>

        {/* Acciones header */}
        <div className="header-actions">
          {/* Dropdown de ediciones */}
          <div className="edition-dropdown">
            <select onChange={handleEditionChange} className="edition-select">
              <option value="">Ediciones</option>
              {editions.map(ed => (
                <option key={ed.value} value={ed.value}>
                  {ed.label}
                </option>
              ))}
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>

          {/* Botón inscríbete */}
          <a href="#inscripcion" className="btn-inscribete">¡Inscríbete!</a>

          {/* Hamburguesa para móvil */}
          <FaBars className="hamburger" onClick={toggleMobileMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;