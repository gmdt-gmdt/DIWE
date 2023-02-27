import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./Router";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Router />
    </>
  );
}

export default App;
