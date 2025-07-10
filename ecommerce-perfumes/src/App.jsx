// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";  // Importar Footer

import Home from "./components/home";
import Products from "./components/Products";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* Footer aquí abajo para que esté en todas las páginas */}
    </BrowserRouter>
  );
}

export default App;
