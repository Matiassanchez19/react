import React from "react";
import Card from "./Card";
import "../styles/products.css";

const perfumes = [
  { id: 1, title: "Yara Lattafa", img: "/imagenes/arabes2.1jpg.jpg", description: "Perfume árabe intenso y exótico." },
  { id: 2, title: "Khamrah", img: "/imagenes/arabes2.0.jpg", description: "Dulce, especiado y misterioso." },
  { id: 3, title: "Oud Mood", img: "/imagenes/arabes2.2.jpg", description: "Aromas orientales únicos." },
];

function Products({ cart, onAddToCart, onRemoveFromCart }) {
  const handleCheckout = () => {
    alert("¡Gracias por tu compra!");
  };

  return (
    <section className="products-container">
      <h2>Nuestros Productos</h2>

      <div className="products-grid">
        {perfumes.map((perfume) => (
          <Card key={perfume.id} {...perfume} onAddToCart={onAddToCart} />
        ))}
      </div>

      <div className="cart-visual">
        <h3>Productos seleccionados:</h3>
        {cart.length === 0 ? (
          <p className="cart-empty">No seleccionaste ningún producto.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} – Cantidad: {item.quantity}{" "}
                  <button
                    className="remove-button"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>

            <button className="checkout-button" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Products;
