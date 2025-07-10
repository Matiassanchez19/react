import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/card.css";

function Card({ id, title, img, description }) {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const handleAdd = () => {
    console.log(`Agregar al carrito: ${title}, cantidad: ${quantity}`);
    alert(`Agregaste ${quantity} "${title}" al carrito.`);
  };

  return (
    <div className={`card-container ${visible ? "slide-up" : ""}`}>
      <img src={img} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <div className="card-actions">
          <label htmlFor={`quantity-${id}`} className="sr-only">Cantidad</label>
          <input
            id={`quantity-${id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button onClick={handleAdd} className="btn-add-cart">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
