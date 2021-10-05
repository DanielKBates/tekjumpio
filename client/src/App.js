import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Program from "./pages/Program/Program";
import FormSite from "./pages/Register/FormSite";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative ">
        <div className="fixed min-h-screen min-w-full bg-gray-800 oxerflow-x-hidden -z-1"></div>
        <NavBar />
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/program">
              <Program />
            </Route>
            <Route path="/register">
              <FormSite />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
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
