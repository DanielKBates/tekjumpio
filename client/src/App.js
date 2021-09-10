import React from "react";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Program from "./pages/Program/Program";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (

    <Router>
      <div className="min-h-screen">
        <div className="fixed min-h-screen min-w-full bg-gray-800 -z-1"></div>
        <NavBar  />
        <div>
          <Switch>
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/program">
              <Program />
            </Route>
            <Route  path="/register">
              <Register />
            </Route>
            <Route  path="/contact">
              <Contact />
            </Route>
            <Route  path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
