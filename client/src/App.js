import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div>
    {/* <div className="fixed min-h-screen min-w-full bg-gray-800 -z-10"></div> */}
      <NavBar currentPage={location.pathname} />
      <div className='content-wrapper'>
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
          <Route exact path="/contact">
            <Contact />
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
