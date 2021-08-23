import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Register from "./pages/Register";

function App() {
  const location = useLocation();
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100">
    <div className="min-h-screen bg-black">
        <NavBar currentPage = {location.pathname} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/program">
          <Program />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
    </div>
  );
}

export default App;
