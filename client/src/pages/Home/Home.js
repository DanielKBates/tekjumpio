import React from "react";
import { Link } from "react-router-dom";

// Components
// import Container from "../../components/Container";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "../../components/Reviews/Reviews";
import Callout from "../../components/Callout";
import CodeBlock from "./CodeBlock";

import { messages } from "../../utils/codeBlockText";

const Home = () => {
  //Ok so the <AnimatedCard>s use IntersectionObserver API. Google it if you mess with the way they are called here. Use them for any scroll event based animations (although it doesnt really look at scrolling)

  return (
    <div>
      <div className="relative">
        {/* CONTENT ON TOP OF ANIMATED GRADIENT */}
        <div className="absolute flex flex-col top-24 md:justify-around md:top-32 md:flex-row z-10 ">
          {/* Headers */}
          <div className="flex-col w-full xl:w-2/5 2xl:w-1/3 space-y-6 xl:space-y-8 2xl:space-y-12 ">
            <h1 className="text-white text-4xl xl:text-5xl 2xl:text-6xl flex-col space-y-2 xl:space-y-4 2xl:space-y-6 animate-fadeIn">
              <span className="flex justify-center xl:justify-start">
                Learn Real Skills.
              </span>
              <span className="flex justify-center xl:justify-start">
                Engage Real Clients.
              </span>
              <span className="flex justify-center xl:justify-start">
                Build Real Projects.
              </span>
            </h1>

            {/* Text Paragraph */}
            <div className="flex mx-2 md:mx-0 md:leading-relaxed text-2xl 2xl:text-3xl text-gray-300 animate-fadeIn">
              Join Tekjump today to Lo6em ipsum dolor sit amet consectetur
              adipisicing elit. Molestias provident veritatis voluptas
              perspiciatis voluptates excepturi non, a, eius esse incidunt ad
              consequuntur laudantium quia quo sapiente fugiat quod modi beatae!
            </div>
            <div className="flex xl:w-2/3 2xl:w-3/4 animate-fadeIn">
              <Callout
                to="/register"
                className="py-3 md:my-8 px-12 md:px-20 multiGradient animate-animateGradient text-gray-100 rounded-xl text-2xl transition duration-300 text-center font-bold w-full arrow-hover"
              >
                Register Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short arrow w-10 h-10"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="text-white"
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </Callout>
            </div>
          </div>

          <div className="hidden xl:flex ">
            <AnimatedCard
              threshold={0.5}
              activeClassName="transform -translate-x-4 opacity-100 transition-all duration-1000 ease-in"
              inactiveClassName="transform opacity-0 translate-x-0 transition-all duration-1000 ease-in"
            >
              {/* <img
                src={`${process.env.PUBLIC_URL}/images/rec5.gif`}
                alt="placeholder"
                className="rounded-lg shadow-2xl h-full"
              /> */}
              <CodeBlock />
            </AnimatedCard>
          </div>
        </div>
        <svg className="absolute">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0.042,0.995 C0.083,0.991,0.167,0.982,0.25,0.88 C0.333,0.779,0.417,0.586,0.5,0.554 C0.583,0.522,0.667,0.651,0.75,0.703 C0.833,0.756,0.917,0.733,0.958,0.722 L1,0.71 L1,0 L0.958,0 C0.917,0,0.833,0,0.75,0 C0.667,0,0.583,0,0.5,0 C0.417,0,0.333,0,0.25,0 C0.167,0,0.083,0,0.042,0 L0,0"></path>
          </clipPath>
        </svg>
        <div className="md:h-128 h-96 animate-animateGradient animate-fadeIn  clipped"></div>

        <div className="flex md:mb-10 flex-col justify-center pt-12 pb-4">
          <div className=" relative py-3 max-w-xl mx-auto mb-10">
            <AnimatedCard
              threshold={0.25}
              activeClassName="transition-all duration-1400 ease-in transform scale-y-105 md:rotate-12 opacity-100  absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg rounded-3xl"
              inactiveClassName="transition-all duration-1400 ease-in scale-y-100 md:translate-y-0 opacity-0 absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg rounded-3xl"
            />

            <div className="relative px-4 py-10 bg-gray-200 shadow-lg rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-black text-4xl">
                    Jump Start Your Career
                  </h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p>
                      Join us to be trained in the fundamentals all the way up
                      to the modern standards.{" "}
                    </p>
                    <ul className="list-disc space-y-2">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Learn in demand technologies centered around the{" "}
                          <span className="tooltip">
                            MERN{" "}
                            <span className="tooltiptext">
                              {" "}
                              <span className="text-white font-bold">M</span>
                              ongoDB,{" "}
                              <span className="text-white font-bold"> E</span>
                              xpress,{" "}
                              <span className="text-white font-bold"> R</span>
                              eact,{" "}
                              <span className="text-white font-bold"> N</span>
                              ode.js
                            </span>
                          </span>{" "}
                          stack.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Build a robust portfolio of fully developed
                          applications.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Upon completion, join our development team for
                          critical work experience, working on real projects for
                          real clients
                        </p>
                      </li>
                    </ul>
                    <p>
                      Join our growing development community and take the plunge
                      into the software development world. Gain not only the
                      training, but the real world experience to launch yourself
                      into a new career.
                    </p>
                  </div>
                  <Link
                    to="/program"
                    className="block pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 arrow-hover text-cyan-600 hover:text-cyan-700"
                  >
                    <p>Want to learn more about our program?</p>
                    Learn More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short arrow w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-20 md:pt-10">
          <AnimatedCard
            threshold={0.25}
            activeClassName={
              "md:transform md:translate-x-0 opacity-100 transition-all duration-1200 ease-in"
            }
            inactiveClassName="transition-all duration-1200 ease-in md:transform md:-translate-x-7 md:-translate-y-7 opacity-0"
          >
            <div className="w-100 mx-auto flex justify-center">
              <Reviews />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
