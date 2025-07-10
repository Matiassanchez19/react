import React from "react";
import "../styles/card.css";

function Card({ id, title, img, description, onAddToCart }) {
  const handleClick = () => {
    onAddToCart({ id, title, quantity: 1 });
  };

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
}

export default Card;
