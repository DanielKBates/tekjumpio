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
            <path d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,176C672,213,768,267,864,245.3C960,224,1056,128,1152,96C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
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
