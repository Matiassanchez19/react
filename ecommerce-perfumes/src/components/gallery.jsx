import React, { useEffect, useState } from "react";
import "../styles/gallery.css";

const galleryImages = [
  "/imagenes/Cliente-1.jpg",
  "/imagenes/Cliente-2.jpg",
  "/imagenes/Cliente-3.jpg",
  "/imagenes/Cliente-4.jpg",
  "/imagenes/Cliente-5.jpg",
];

function Gallery() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className={`gallery-container ${visible ? "fade-in" : ""}`}>
      <h2>Galería</h2>
      <p>
        En esta galería compartimos momentos reales de quienes han
        descubierto y disfrutado las fragancias exclusivas de muestro emprendimiento.
        Cada imagen refleja la conexión única entre nuestros perfumes y las
        sensaciones que despiertan en quienes los eligen. Te invitamos a
        sumergirte en estas experiencias auténticas y a imaginar cómo cada aroma
        puede acompañar tus momentos más especiales.
      </p>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <img key={idx} src={img} alt={`Galería perfume ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
