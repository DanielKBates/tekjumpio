import React from "react";
import { Link, NavLink } from "react-router-dom";

import Container from "../components/Container";
// import SlideIn from "../components/slideIn";
import AnimatedCard from "../components/AnimatedCard";

const Home = () => {


  //Ok so the animated cards use IntersectionObserver API. Google it if you mess with the way they are called here. Works until we render
  // more than one onto the screen with an animation at the same time. /shrug. Low prio task for the future, immediate solution is to simply
  //not render two of them into the screen on load at the same time. **THIS BUG IS ANIMATION ONLY**


  return (
    <div>
      <div className="relative">
        <div className="absolute md:top-44 top-16 flex flex-col justify-between md:flex-row z-10">
          <div className="flex justify-center">
            <div className=" flex-col justify-items-start  px-2 w-3/4 space-y-2 ">
              <h1 className="text-white text-3xl xl:text-5xl flex-col justify-center py-4 animate-displayWaveText leading-none">
                <div className="py-2">Learn Real Skills</div>
                <div className="py-0">Build Real Projects</div>
              </h1>
              <span className="mx-auto text-xl xl:text-2xl text-gray-300 flex justify-center animate-displayWaveText max-w-3xl mb-8">
                Join Tekjump today to Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias provident veritatis voluptas
                perspiciatis voluptates excepturi non, a, eius esse incidunt ad
                consequuntur laudantium quia quo sapiente fugiat quod modi
                beatae!
              </span>
              <div className="flex items-center space-x-1 w-full">
                <NavLink
                  exact
                  to="/register"
                  className="py-3 my-10 px-20 anim text-gray-100 rounded-xl text-2xl transition duration-300 text-center font-bold w-full arrow-hover"
                >
                  Register Now{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-short arrow w-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path
                      className=""
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <div >
            <AnimatedCard
              activeClassName="transform translate-x-4 opacity-100 transition-all duration-1000 ease-in"
              inactiveClassName="transform opacity-0 translate-x-0 transition-all duration-1000 ease-in"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/test.png`}
                alt="placeholder"
                className="rounded-lg w-3/4 md:w-11/12 shadow-2xl transform -translate-y-6 mx-auto"
              />
              <p className="text-gray-200 text-center transform -translate-y-14 xl:text-base text-xs">
                Make this some gif of code. Try to use Apple VSCode as it looks
                cleaner in gif.
              </p>
            </AnimatedCard>
          </div>
        </div>

        <svg className="svg absolute">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0.042,0.995 C0.083,0.991,0.167,0.982,0.25,0.88 C0.333,0.779,0.417,0.586,0.5,0.554 C0.583,0.522,0.667,0.651,0.75,0.703 C0.833,0.756,0.917,0.733,0.958,0.722 L1,0.71 L1,0 L0.958,0 C0.917,0,0.833,0,0.75,0 C0.667,0,0.583,0,0.5,0 C0.417,0,0.333,0,0.25,0 C0.167,0,0.083,0,0.042,0 L0,0"></path>
          </clipPath>
        </svg>

        <div className="clipped animate-animateGradient max-h-100% max-w-100%"></div>
      </div>
      <Container>
        <div
          className="flex py-6 flex-col justify-center sm:py-12"
        >
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <AnimatedCard
              activeClassName={
                "transform rotate-12 opacity-100 transition-all duration-1000 ease-in absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg sm:rounded-3xl"
              }
              inactiveClassName="transition-all duration-1000 ease-in translate-y-0 opacity-0 absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg sm:rounded-3xl"
            // propClassName={
            //   "absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400 shadow-lg sm:rounded-3xl "
            // }
            />

            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
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
                              <span className="text-white font-bold"> N</span>ode.js
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
                      class="bi bi-arrow-right-short arrow w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatedCard
          activeClassName={
            "transform translate-x-0 opacity-100 transition-all duration-1000 ease-in-out"
          }
          inactiveClassName="transition-all duration-1000 ease-in-out transform translate-x-4 opacity-0"
        >
          <div className="bg-indigo-900 testDiv w-1/2">
            <span>&#8600;</span>BLAH
          </div>
        </AnimatedCard>
      </Container>




    </div>
  );
};

export default Home;
