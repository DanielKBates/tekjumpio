import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-400 via-green-400 to-red-400 h-1/2">
        <div className="flex justify-center ">
          <div className=" flex-col justify-items-center  px-2 w-3/4 space-y-2">
            <h1 className="text-black text-5xl flex justify-center py-4">
              JOIN US IN CODE
            </h1>
            <span className="mx-auto text-3xl flex justify-center">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </span>
            <div className="flex justify-center ">
              <Link
                to="/register"
                className="flex justify-center w-1/6 text-xl rounded bg-gradient-to-r hover:from-green-500 hover:to-blue-400 from-purple-500 to-red-600 text-black p-2 mt-5"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="black"
            stroke-width="120"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <Container>
        <div className="flex justify-end">
          <h1 className="text-white text-4xl">div Content</h1>
        </div>
      </Container>
    </>
  );
};

export default Home;
