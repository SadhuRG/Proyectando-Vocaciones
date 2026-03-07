import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/ediciones.css';

const EdicionesHistoria = () => {
  const edicionesData = [
    {
      id: 1,
      version: "1.0",
      year: 2024,
      title: "El Inicio",
      fecha: "16 de Diciembre 2022",
      description: "Proyectando Vocaciones busca orientar a los estudiantes pre universitarios de los distintos colegios y academias de la ciudad de Trujillo para que puedan escoger de manera adecuada la carrera universitaria que estudiarán. Contará con el apoyo de los integrantes de SEDIPRO UNT, quienes realizarán una feria laboral que se llevará a cabo el 18 y 19 de noviembre en las instalaciones de la Universidad Nacional de Trujillo.",
      objetivos: [
        "Dar a conocer las diferentes carreras profesionales que ofrece la Universidad Nacional de Trujillo.",
        "Ayudar a tomar una decisión informada con respecto a la carrera que elijan.",
        "Brindar motivación y ayudar a los jóvenes a despertar intereses profesionales."
      ],
      actividades: [
        {
          nombre: "Etapa 1: Apertura",
          descripcion: "Ceremonia de apertura de 20 minutos con palabras de la presidenta de Sedipro UNT y la Directora del Proyecto, además de indicaciones para el recorrido. Al finalizar, se realizará un test vocacional de 10 minutos."
        },
        {
          nombre: "Etapa 2: División de grupos",
          descripcion: "Los alumnos serán divididos en cinco grupos de 30 estudiantes. La división estará previamente definida y solo deberán ordenarse afuera del auditorio."
        },
        {
          nombre: "Etapa 3: Recorrido",
          descripcion: "El recorrido iniciará en cinco puntos de la universidad con un cronograma definido para evitar aglomeraciones. Los alumnos visitarán 12 escuelas de la UNT, donde conocerán laboratorios, equipos y experiencias de cada carrera."
        }
      ],
      estadisticas: [
        { numero: "100+", label: "Asistentes" },
        { numero: "10", label: "Carreras" },
        { numero: "10", label: "Aliados" }
      ],
      aliados: [
        { src: "/aliados/ed1/aliado1.png", nombre: "Aliado 1" },
        { src: "/aliados/ed1/aliado2.png", nombre: "Aliado 2" },
        { src: "/aliados/ed1/aliado3.png", nombre: "Aliado 3" },
        { src: "/aliados/ed1/aliado4.png", nombre: "Aliado 4" },
        { src: "/aliados/ed1/aliado5.png", nombre: "Aliado 5" },
      ],
      imagenes: [
        "/ediciones/pv2.0-organizadores.jpg",
        "/ediciones/pv2.0-recorrido.jpg",
        "/ediciones/pv2.0-estudiantes.jpg",
        "/ediciones/pv2.0-general.jpg"
      ],
      isActive: false
    },
    {
      id: 2,
      version: "2.0",
      year: 2025,
      title: "Crecimiento",
      fecha: "22 de Febrero del 2025",
      description: "Proyectando Vocaciones 2.0 fue un proyecto social de SEDIPRO UNT que tuvo como objetivo guiar a estudiantes preuniversitarios de colegios y academias de Trujillo en la elección informada de su futura carrera en la Universidad Nacional de Trujillo. Se llevó a cabo el 22 de febrero en las instalaciones de la UNT, donde los aspirantes realizaron un recorrido por el campus y asistieron a charlas vocacionales de tres carreras de su interés.",
      objetivos: [
        "Proporcionar información clara y actualizada sobre las diversas opciones profesionales y campos laborales.",
        "Facilitar el contacto entre estudiantes y profesionales de diferentes áreas a través de la feria vocacional.",
        "Inspirar a los estudiantes a perseguir carreras que contribuyan a su desarrollo personal y profesional.",
      ],
      actividades: [
        {
          nombre: "7:30 am - 8:40 am",
          descripcion: "Programa de bienvenida. Auditorio Nicolás Copérnico."
        },
        {
          nombre: "9:00 am - 10:30 am",
          descripcion: "Recorrido por la Universidad Nacional de Trujillo."
        },
        {
          nombre: "11:00 am - 11:45 am",
          descripcion: "1ª Charla vocacional"
        },
        {
          nombre: "12:00 pm - 12:45 pm",
          descripcion: "2ª Charla vocacional"
        },
        {
          nombre: "1:00 pm - 1:45 pm",
          descripcion: "3ª Charla vocacional"
        }
      ],
      estadisticas: [
        { numero: "500+", label: "Asistentes" },
        { numero: "25", label: "Carreras" },
        { numero: "12", label: "Profesionales" }
      ],
      aliados: [
        { src: "/aliados/ed2/aliado1.png", nombre: "Aliado 1" },
        { src: "/aliados/ed2/aliado2.png", nombre: "Aliado 2" },
        { src: "/aliados/ed2/aliado3.png", nombre: "Aliado 3" },
        { src: "/aliados/ed2/aliado4.png", nombre: "Aliado 4" },
        { src: "/aliados/ed2/aliado5.png", nombre: "Aliado 5" },
        { src: "/aliados/ed2/aliado6.png", nombre: "Aliado 6" },
      ],
      imagenes: [
        "/ediciones/pv2.0-organizadores.jpg",
        "/ediciones/pv2.0-recorrido.jpg",
        "/ediciones/pv2.0-estudiantes.jpg",
        "/ediciones/pv2.0-general.jpg"
      ],
      isActive: false
    },
    {
      id: 3,
      version: "3.0",
      year: 2026,
      title: "Expansión Total",
      fecha: "28 de Febrero 2026",
      description: "Proyectando Vocaciones 3.0 fue un proyecto social de SEDIPRO UNT que tuvo como objetivo orientar a estudiantes preuniversitarios de Trujillo en la elección adecuada de su futura carrera en la Universidad Nacional de Trujillo. Se llevó a cabo el sábado 28 de febrero en las instalaciones de la UNT, donde los aspirantes realizaron un recorrido por la universidad, participaron en ferias vocacionales y asistieron a charlas informativas sobre 2 o 3 carreras de su interés.",
      objetivos: [
        "Ofrecer datos precisos y actuales sobre las carreras y oportunidades laborales del mercado",
        "Propiciar intercambios significativos entre estudiantes y referentes de cada sector.",
        "Alentar a los estudiantes a elegir carreras que los realicen tanto a nivel personal como profesional.",
        "Acompañar la elección universitaria de los estudiantes, alineando intereses y aptitudes con su proyección profesional.",
      ],
      actividades: [
        {
          nombre: "8:30 am - 9:45 am",
          descripcion: "Recorrido por la Universidad Nacional de Trujillo."
        },
        {
          nombre: "8:50 am - 10:30 am",
          descripcion: "Feria vocacional de las carreras universitarias"
        },
        {
          nombre: "10:30 am - 11:15 am",
          descripcion: "1ª Charla vocacional"
        },
        {
          nombre: "11:45 am - 12:30 pm",
          descripcion: "2ª Charla vocacional"
        },
        {
          nombre: "1:00 pm - 1:45 pm",
          descripcion: "3ª Charla vocacional"
        }
      ],
      estadisticas: [
        { numero: "1000+", label: "Asistentes" },
        { numero: "35+", label: "Carreras" },
        { numero: "20+", label: "Profesionales" }
      ],
      aliados: [
        { src: "/aliados/ed3/aliado1.png", nombre: "Aliado 1" },
        { src: "/aliados/ed3/aliado2.png", nombre: "Aliado 2" },
        { src: "/aliados/ed3/aliado3.png", nombre: "Aliado 3" },
        { src: "/aliados/ed3/aliado4.png", nombre: "Aliado 4" },
        { src: "/aliados/ed3/aliado5.png", nombre: "Aliado 5" },
        { src: "/aliados/ed3/aliado6.png", nombre: "Aliado 6" },
        { src: "/aliados/ed3/aliado7.png", nombre: "Aliado 7" },
      ],
      imagenes: [
        "/ediciones/pv3.0-one.jpg",
        "/ediciones/pv3.0-two.jpg",
        "/ediciones/pv3.0-three.jpg",
        "/ediciones/pv3.0-four.jpg",
        "/ediciones/pv3.0-five.jpg",
        "/ediciones/pv3.0-six.jpg",
        "/ediciones/pv3.0-seven.jpg",
        "/ediciones/pv3.0-eight.jpg"
      ],
      isActive: true
    }
  ];

  const [selectedEdition, setSelectedEdition] = useState(edicionesData[edicionesData.length - 1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedEdition.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedEdition.imagenes.length - 1 : prev - 1
    );
  };

  const handleEditionChange = (edicion) => {
    setSelectedEdition(edicion);
    setCurrentImageIndex(0);
  };

  return (
    <div className="ediciones-page">
      {/* Header Section */}
      <div className="ediciones-header">
        <motion.p
          className="ediciones-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NUESTRA HISTORIA
        </motion.p>
        <motion.h1
          className="ediciones-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ediciones <span className="ediciones-title-highlight">Anteriores</span>
        </motion.h1>
        <motion.p
          className="ediciones-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cada edición ha sido un paso más en nuestra misión de guiar a los jóvenes hacia su futuro profesional.
        </motion.p>
      </div>

      {/* Timeline Navigation */}
      <div className="timeline-wrapper">
        <div className="timeline-navigation">
          <div className="timeline-line-bg"></div>

          {edicionesData.map((edicion, index) => (
            <div key={edicion.id} className="timeline-point-wrapper">
              <motion.button
                className={`timeline-point ${selectedEdition.id === edicion.id ? 'active' : ''}`}
                onClick={() => handleEditionChange(edicion)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                {edicion.isActive && (
                  <span className="timeline-badge">ACTUAL</span>
                )}
              </motion.button>

              <motion.div
                className="timeline-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div className="timeline-year">{edicion.year}</div>
                <div className="timeline-version">Versión {edicion.version}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido de la edición seleccionada */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedEdition.id}
          className="edition-full-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header con fecha */}
          <div className="edition-content-header">
            <motion.div
              className="edition-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {selectedEdition.fecha}
            </motion.div>

            <motion.h2
              className="edition-main-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Proyectando Vocaciones {selectedEdition.version}
            </motion.h2>

            <motion.h3
              className="edition-subtitle"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {selectedEdition.title}
            </motion.h3>
          </div>

          {/* Grid de contenido */}
          <div className="edition-grid">
            {/* Columna izquierda - Información */}
            <div className="edition-info-column">

              {/* 1. Descripción del Proyecto */}
              <motion.div
                className="info-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h4 className="section-title">
                  <span className="section-number">01</span>
                  Descripción del Proyecto
                </h4>
                <p className="section-text">{selectedEdition.description}</p>
              </motion.div>

              {/* Estadísticas */}
              <motion.div
                className="stats-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {selectedEdition.estadisticas.map((stat, idx) => (
                  <div key={idx} className="stat-card">
                    <div className="stat-number">{stat.numero}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Aliados - Carrusel de logos */}
              <motion.div
                className="info-section aliados-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                <h4 className="section-title">
                  <span className="section-number">🤝</span>
                  Aliados
                </h4>
                <div className="aliados-track-wrapper">
                  <div className="aliados-track">
                    {[...selectedEdition.aliados, ...selectedEdition.aliados].map((logo, idx) => (
                      <div key={idx} className="aliado-logo-card">
                        <img src={logo.src} alt={logo.nombre} className="aliado-logo-img" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 2. Objetivos */}
              <motion.div
                className="info-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h4 className="section-title">
                  <span className="section-number">02</span>
                  Objetivos
                </h4>
                <ul className="objectives-list">
                  {selectedEdition.objetivos.map((objetivo, idx) => (
                    <motion.li
                      key={idx}
                      className="objective-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + (idx * 0.1) }}
                    >
                      <span className="objective-icon">🎯</span>
                      <span>{objetivo}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* 3. Actividades Realizadas */}
              <motion.div
                className="info-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <h4 className="section-title">
                  <span className="section-number">03</span>
                  Actividades Realizadas
                </h4>
                <div className="activities-grid">
                  {selectedEdition.actividades.map((actividad, idx) => (
                    <motion.div
                      key={idx}
                      className="activity-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + (idx * 0.1) }}
                    >
                      <h5 className="activity-name">{actividad.nombre}</h5>
                      <p className="activity-description">{actividad.descripcion}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Columna derecha - Carrusel de imágenes */}
            <div className="edition-carousel-column">
              <motion.div
                className="carousel-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="carousel-wrapper">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedEdition.imagenes[currentImageIndex]}
                      alt={`${selectedEdition.title} - Imagen ${currentImageIndex + 1}`}
                      className="carousel-image"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  {/* Botones de navegación */}
                  <button
                    className="carousel-button carousel-button-prev"
                    onClick={prevImage}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="carousel-button carousel-button-next"
                    onClick={nextImage}
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicadores */}
                  <div className="carousel-indicators">
                    {selectedEdition.imagenes.map((_, idx) => (
                      <button
                        key={idx}
                        className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Ir a imagen ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Contador */}
                  <div className="carousel-counter">
                    {currentImageIndex + 1} / {selectedEdition.imagenes.length}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EdicionesHistoria;