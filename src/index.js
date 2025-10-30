import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// src/productData.js
export const productData = [
  { id: 1, name: "Bellow", image: "../images/product/product3.jpg" },
  { id: 2, name: "Gaslet", image: "../images/product/product3.jpg" },
  { id: 3, name: "Lined Elbow", image: "../images/product/product3.jpg" },
  { id: 4, name: "Lined Strainer", image: "../images/product/product3.jpg" },
  { id: 5, name: "Lined Tees & Cross", image: "../images/product/product3.jpg" },
  { id: 6, name: "Lined Valve", image: "../images/product/product3.jpg" },
  { id: 7, name: "PTFE Lined Pipe", image: "../images/product/product3.jpg"},
  {id: 8, name: "Reactor Spares", image: "../images/product/product3.jpg"},
  {id:9, name: "Reducing Flange", image: "../images/product/product3.jpg"},
  {id:10, name:"Sight Glass", image: "../images/product/product3.jpg"}
];


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
