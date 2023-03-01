import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";
import Body from "./client/components/Body";
import Footer from "./client/components/Footer";
import Nav from './client/components/Nav'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
    <App>
      <Nav />
        <Body />
      <Footer />
    </App>
  </BrowserRouter>
</React.StrictMode>
);

