import React from "react";

import Footer from "./Footer";
import About from "./About";
import ServicesPage from "./ServicesPage";
import Destination from "./Destination";
import Package from "./Package";
import Booking from "./Booking";
import Process from "./Process";
import Team from "./Team";
import BackToTop from "./BackToTop";

function Home() {
  return (
    <>
      <About />
      <ServicesPage />
      <Destination />
      <Package />
      <Booking />
      <Process />
      <Team />
    </>
  );
}

export default Home;
