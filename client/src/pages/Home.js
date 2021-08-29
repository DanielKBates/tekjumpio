import React from "react";
import { Link, NavLink } from "react-router-dom";

import Container from "../components/Container";
import SlideIn from "../components/slideIn";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute md:top-44 top-16 flex flex-col justify-between md:flex-row">
          <div className="flex justify-center">
            <div className=" flex-col justify-items-start  px-2 w-3/4 space-y-2">
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
              <div className="flex justify-start animate-displayWaveText">
                <div className="flex items-center space-x-1">
                  <NavLink
                    exact
                    to="/register"
                    className="py-3 my-10 px-20 bg-blue-600 hover:bg-blue-500 text-gray-100 border-2 rounded-xl text-2xl transition duration-300 text-center font-bold"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SlideIn dir={[1, 1]} uniqueID="gif-slidin">
              <img
                src={`${process.env.PUBLIC_URL}/images/test.png`}
                alt="placeholder"
                className="rounded-lg w-11/12 shadow-2xl transform -translate-y-6 mx-auto"
              />
              <p className="text-gray-200 text-center transform -translate-y-14 xl:text-base text-xs">
                Make this some gif of code. Try to use Apple VSCode as it looks
                cleaner in gif.
              </p>
            </SlideIn>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="0 0 1980 977"
          width="1900"
          height="977"
          version="1.1"
          className="min-w-full"
        >
          <path
            d="M0 870L82.5 866C165 862 330 854 495 766C660 678 825 510 990 482C1155 454 1320 566 1485 612C1650 658 1815 638 1897.5 628L1980 618L1980 0L1897.5 0C1815 0 1650 0 1485 0C1320 0 1155 0 990 0C825 0 660 0 495 0C330 0 165 0 82.5 0L0 0Z"
            fill="rgb(37,99,235)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
      <Container>
        <div className="flex py-6 flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="animate-wiggle absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-12 sm:rounded-3xl"></div>
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
                              <span className="text-white font-bold">E</span>
                              xpress,{" "}
                              <span className="text-white font-bold">R</span>
                              eact,{" "}
                              <span className="text-white font-bold">N</span>ode
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
                    Learn More <span className="arrow">&rarr; </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SlideIn dir={[0, 1]} uniqueID="test-slidin1">
        <div className="bg-red-400 testDiv w-1/2">
          <span>&uarr;</span>Floats to point: (0,1)
        </div>
      </SlideIn>
      <SlideIn dir={[0, 0]} uniqueID="test-slidin2">
        <div className="bg-blue-700 testDiv w-1/2">
          <span>&bull;</span>Floats to point: (0,0)
        </div>
      </SlideIn>
      <SlideIn dir={[0, -1]} uniqueID="test-slidin3">
        <div className="bg-yellow-800 testDiv w-1/2">
          <span>&darr;</span>Floats to point: (0,-1)
        </div>
      </SlideIn>
      <SlideIn dir={[1, 1]} uniqueID="test-slidin4">
        <div className="bg-green-500 testDiv w-1/2">
          <span>&#8598;</span>Floats to point: (1,1)
        </div>
      </SlideIn>
      <SlideIn dir={[1, 0]} uniqueID="test-slidin5">
        <div className="bg-indigo-700 testDiv w-1/2">
          <span>&larr;</span>Floats to point: (1,0)
        </div>
      </SlideIn>
      <SlideIn dir={[1, -1]} uniqueID="test-slidin6">
        <div className="bg-pink-600 testDiv w-1/2">
          <span>&#8601;</span>Floats to point: (1,-1)
        </div>
      </SlideIn>
      <SlideIn dir={[-1, 1]} uniqueID="test-slidin7">
        <div className="bg-gray-500 testDiv w-1/2">
          <span>&#8599;</span>Floats to point: (-1,1)
        </div>
      </SlideIn>
      <SlideIn dir={[-1, 0]} uniqueID="test-slidin8">
        <div className="bg-green-900 testDiv w-1/2">
          <span>&rarr;</span>Floats to point: (-1,0)
        </div>
      </SlideIn>
      <SlideIn dir={[-1, -1]} uniqueID="test-slidin9">
        <div className="bg-indigo-900 testDiv w-1/2">
          <span>&#8600;</span>Floats to point: (-1,-1)
        </div>
      </SlideIn>
    </div>
  );
};

export default Home;
