import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Destination from "./components/Destination";
import ServicesPage from "./components/ServicesPage";
import Booking from "./components/Booking";
import Package from "./components/Package";
import { Testimonial } from "./components/Testimonial";
import Contact from "./components/Contact";
import Team from "./components/Team";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/package" element={<Package />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default Router;