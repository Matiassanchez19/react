import React, { useState, useEffect } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 250);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("¡Mensaje enviado! Gracias por contactarnos.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={`contact-container ${visible ? "fade-in" : ""}`}>
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          name="message"
          id="message"
          placeholder="Escribe tu mensaje..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="contact-buttons">
          <button type="submit" className="btn-primary">Enviar</button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setFormData({ name: "", email: "", message: "" })}
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
