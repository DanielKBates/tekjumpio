import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100">
    <div className="min-h-screen bg-gray-800">
      <NavBar currentPage={location.pathname} />
      <div>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/program">
            <Program />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
