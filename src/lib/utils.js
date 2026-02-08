export const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('es-PE');
export const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};