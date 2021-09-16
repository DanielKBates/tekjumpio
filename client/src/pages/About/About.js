import React from "react";

import Container from "../../components/Container";
import "./About.css";

// import css

const About = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute px-20 top-24 z-10">
          <div>
            <h1 className="text-7xl text-white text-center pb-4 animate-fadeDown">
              Our Mission
            </h1>
            <p className="text-white text-xl leading-normal animate-fadeDown">
              We at Tekjump have made it our mission to provide not only the
              training you need to be a full stack web developer, but also the
              crucial real world experience you need to land the job of your
              dreams. We've said 'enough' to the entry level jobs asking for 3+
              years of experience. Wow interviewers with your portfolio of{" "}
              <span className="font-bold">REAL PROJECTS</span>. Impress your new
              managers with your
              <span className="font-bold">
                {" "}
                COLLABORATIVE DEVELOPMENT SKILLS
              </span>
              . Join an ever growing community of developers, get the training
              you need, and <span className="italic">jump</span> into your new
              career.
            </p>
          </div>
        </div>
        <svg className="svg absolute">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0.042,0.995 C0.083,0.991,0.167,0.982,0.25,0.88 C0.333,0.779,0.417,0.586,0.5,0.554 C0.583,0.522,0.667,0.651,0.75,0.703 C0.833,0.756,0.917,0.733,0.958,0.722 L1,0.71 L1,0 L0.958,0 C0.917,0,0.833,0,0.75,0 C0.667,0,0.583,0,0.5,0 C0.417,0,0.333,0,0.25,0 C0.167,0,0.083,0,0.042,0 L0,0"></path>
          </clipPath>
        </svg>
        <div className="aboutClipped animate-animateGradient"></div>
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-y-20">
          <div className="flex justify-center items-center  h-100 py-20">
            <h1 className="text-white font-semibold text-3xl animate-fadeFromLeft">
              We want to teach you the skills you need Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem
            </h1>
          </div>
          <div className="bg-gray-400 h-100 flex items-center justify-center  animate-fadeFromRight">
            IMAGE
          </div>{" "}
          <div className="bg-gray-400 h-100 flex items-center justify-center  animate-fadeFromLeft">
            IMAGE
          </div>
          <div className="flex justify-center items-center  h-100 py-20">
            <h1 className="text-white font-semibold text-3xl animate-fadeFromRight">
              We will help you Build Real World Experience Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem
            </h1>
          </div>
          <div className="flex justify-center items-center  h-100 py-20">
            <h1 className="text-white font-semibold text-3xl animate-fadeFromLeft">
              JUMP into a new career Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem
            </h1>
          </div>
          <div className="bg-gray-400 h-100 flex items-center justify-center animate-fadeFromRight ">
            IMAGE
          </div>{" "}
        </div>

        <div className="mt-28">
          <h1 className="flex justify-center text-4xl text-white">
            STUDENT PORTFOLIOS
          </h1>
          <div className="hidden sm:flex p-8">
            <div className="card">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>

              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
