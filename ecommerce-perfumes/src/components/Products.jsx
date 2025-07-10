import React, { useState } from "react";
import Card from "./Card";
import "../styles/products.css";

const perfumes = [
  { id: 1, title: "Yara Lattafa", img: "/imagenes/arabes2.1jpg.jpg", description: "Perfume árabe intenso y exótico." },
  { id: 2, title: "Khamrah", img: "/imagenes/arabes2.0.jpg", description: "Dulce, especiado y misterioso." },
  { id: 3, title: "Oud Mood", img: "/imagenes/arabes2.2.jpg", description: "Aromas orientales únicos." },
];

function Products() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = ({ id, title, quantity }) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === id);
      if (existing) {
        // Actualizar cantidad
        return prevCart.map(item => item.id === id ? { ...item, quantity: item.quantity + quantity } : item);
      } else {
        // Agregar nuevo producto
        return [...prevCart, { id, title, quantity }];
      }
    });
    console.log("Carrito:", cart);
  };

  return (
    <section className="products-container">
      <h2>Nuestros Productos</h2>
      <div className="products-grid">
        {perfumes.map(p => (
          <Card key={p.id} {...p} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {/* Aquí podrías mostrar el carrito si querés */}
    </section>
  );
}

export default Products;
