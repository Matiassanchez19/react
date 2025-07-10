// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Fragancias B&R</h3>
          <p>
            Nuestra pasión es llevarte aromas únicos que despiertan tus sentidos y te acompañan en cada momento especial.
          </p>
          <p>© 2025 Fragancias B&R. Todos los derechos reservados.</p>
        </div>

        <div className="footer-section links">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/gallery">Galería</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>Contacto</h4>
          <p>📍  Buenos Aires, Argentina</p>
          <p>📞 +54 9 11 1234 5678</p>
          <p>✉️ info@fraganciasbr.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
