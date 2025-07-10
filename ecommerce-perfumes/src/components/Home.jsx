import React from "react";
import "../styles/home.css";
import "../styles/general.css";

function Home({ title, subtitle, image }) {
  return (
    <section className="home-container">
      <div className="home-text">
        <h1>{title} Sobre Nosotros</h1>
        <p className="subtitle">{subtitle}</p>
        <p>
          Fragancias B&R nace del deseo de compartir la riqueza y el misterio de
          los perfumes árabes tradicionales, reinterpretados con un toque
          moderno y exclusivo. Además, ofrecemos una cuidadosa selección de
          fragancias internacionales, que complementan nuestra colección con
          aromas variados y sofisticados para todos los gustos.
        </p>
        <p>
          Nuestro emprendimiento se fundó con la pasión de ofrecer productos
          auténticos, elaborados cuidadosamente con ingredientes de la más alta
          calidad, respetando la herencia y el arte de la perfumería, tanto
          árabe como global.
        </p>
        <p>
          Cada fragancia que ofrecemos es el resultado de un proceso meticuloso
          y artesanal, pensado para quienes valoran la sofisticación, la
          personalidad y la exclusividad en cada aroma. En Fragancias B&R, no
          solo vendemos perfumes, creamos experiencias sensoriales que
          despiertan emociones y recuerdos inolvidables.
        </p>
        <p>
          Nos enorgullece ser un puente entre culturas, llevando la tradición
          milenaria de la perfumería árabe junto con lo mejor de la perfumería
          internacional a tus manos, con el compromiso de calidad, lujo y
          autenticidad que nos caracteriza.
        </p>
      </div>

      <div className="home-image-wrapper">
        <img
          src="/imagenes/logo byr.jpg"
          alt="Fragancia destacada"
          className="home-image"
        />
      </div>
    </section>
  );
}

export default Home;
