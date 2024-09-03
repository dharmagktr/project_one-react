import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/CustomNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from './components/Text';
import Images from "./components/Images";
import Section from "./Layout/Section";
import Container from 'react-bootstrap/Container';
import banner_img from "./assets/images/banner_img.jpg";
import navTabImages from "./assets/images/navTabaImage.jpg";
import NavTab from "./components/NavTab";
import Cards from './components/Cards';
import { CardOne } from './components/Cards';
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { CardTwo } from "./components/Cards";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home ';
import AboutPage from './pages/AboutPage';
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import { router } from 'react-router-dom';




import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "About",
    element: <AboutPage />
  },
  {
    path: "Service",
    element: <ServicePage />
  }, {
    path: "Portfolio",
    element: <PortfolioPage />
  }, {
    path: "Blog",
    element: <BlogPage />
  }, {
    path: "Contact",
    element: <ContactPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Home />
  </React.StrictMode>
);

reportWebVitals();

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Service" element={<ServicePage />} />
            <Route path="/Blog" element={<BlogPage />} />
            <Route path="/Portfolio" element={<PortfolioPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      
    </>
  )

}


export default App;

