import React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/merriweather";        // Defaults to 400
import "@fontsource/merriweather/700.css"; // Bold
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Home />}></Route>
       {/* <Route path="/about" element={<About />}></Route>*/}
        <Route path="/contact" element={<Contact />}></Route>
         <Route path="/services" element={<Services />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
