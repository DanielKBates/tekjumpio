import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const pages = require("./pages.json");

const NavBar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [dir, setDir] = useState(1);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleNavScroll = () => {
    var lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // down
          setDir(-1);
        } else {
          // up
          setDir(1);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }

  useEffect(() => {
    handleNavScroll()
  }, []);

  return (
    <nav
      className="bg-gray-900 w-full fixed z-40 px-4 transition-all ease-in-out duration-500"
      style={
        !mobileMenu
          ? dir === 1
            ? { minHeight: "68px" }
            : { minHeight: "68px", transform: "translateY(-75px)" }
          : {}
      }
    >
      <div className="max-w-full px-10 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <Link
                to="/"
                className="flex items-center py-5 text-gray-100 transition ease-linear duration-300"
              >
                <span className="font-bold text-2xl">TJ</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {pages.map((page) => {
                if (page.forNav) {
                  return (
                    <NavLink
                      to={page.to}
                      className="py-5 px-3 text-gray-300 hover:text-white hover:underline transition ease-linear duration-300 after-arrow"
                      activeClassName="underline"
                    >
                      {page.name}
                    </NavLink>
                  );
                } else {
                  return(null)
                }
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/register"
              className="py-2 px-10 anim text-gray-100 rounded transition duration-300 text-center font-bold"
            >
              Register
            </NavLink>
          </div>
          <button
            className="flex flex-col items-center justify-center relative w-8 h-8 md:hidden"
            onClick={handleMobileMenu}
          >
            <span className={`line ${mobileMenu ? "active" : ""}`}></span>
            <span className={`line ${mobileMenu ? "active" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="flex flex-col p-8 pt-0 md:hidden transition-all duration-300 overflow-hidden"
        style={
          mobileMenu
            ? { opacity: 1, height: "216px" }
            : { height: "0px", opacity: 0, padding: "0rem" }
        }
      >
        <NavLink
          to="/about"
          className="p-2 my-1 text-gray-300 rounded hover:bg-gray-600 hover:underline transition ease-linear duration-100 after-arrow"
          activeClassName="underline"
        >
          About
        </NavLink>

        <NavLink
          to="/program"
          className="p-2 my-1 text-gray-300 rounded hover:bg-gray-600 hover:underline transition ease-linear duration-100 after-arrow"
          activeClassName="underline"
        >
          Program
        </NavLink>

        <NavLink
          to="/pricing"
          className="p-2 my-1 text-gray-300 rounded hover:bg-gray-600 hover:underline transition ease-linear duration-100 after-arrow"
          activeClassName="underline"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/register"
          className="py-2 px-3 anim text-gray-100 rounded transition duration-300 text-center font-bold"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
