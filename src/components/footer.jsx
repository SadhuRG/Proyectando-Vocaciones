const Footer = () => (
  <footer style={{ background: '#6A1B9A', color: 'white', padding: '1rem', textAlign: 'center' }}>
    <p>Copyright © SEDIPRO UNT {new Date().getFullYear()}</p>
    <button onClick={() => window.scrollTo({ top: 0 })}>Volver Arriba</button>
  </footer>
);

export default Footer;