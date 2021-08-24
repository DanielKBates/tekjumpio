import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";

const Home = () => {


  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-400 via-green-400 to-red-400 h-1/2">
        <div className="absolute">
          <div className="flex justify-center ">
            <div className=" flex-col justify-items-start  px-2 w-3/4 space-y-2">
              <h1 className="text-black text-5xl flex-col justify-center py-4 animate-displayWaveText">
                <div>Learn Real Skills.</div>
                <div>Build Real Projects.</div>
              </h1>
              <span className="mx-auto text-3xl flex justify-center animate-displayWaveText">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              </span>
              <div className="flex justify-start animate-displayWaveText">
                <Link
                  to="/register"
                  className="transition duration-150 ease-in-out transform hover:scale-125 flex justify-start text-xl rounded bg-gradient-to-r from-purple-500 to-red-600 text-black p-2 mt-5"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="animate-animateWave origin-bottom"
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="black"
            strokeWidth="120"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Container>
        <div className="flex justify-end py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="animate-wiggle absolute inset-0 bg-gradient-to-l from-purple-400 to-blue-400  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-12 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-black text-4xl">Jump Start Your Career</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p>Join us to be trained in the fundamentals all the way up to the modern standards. </p>
                    <ul className="list-disc space-y-2">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Learn in demand technologies centered around the MERN stack.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Build a robust portfolio of fully developed applications.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">Upon completion, join our development team for critical work experience, working on real projects for real clients</p>
                      </li>
                    </ul>
                    <p>Join our growing development community and take the plunge into the software development world. Gain not only the training, but the real world experience to launch yourself into a new career.</p>
                  </div>
                  <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p>Want to learn more about our program?</p>
                    <p>
                      <Link to="/program" className="text-cyan-600 hover:text-cyan-700"> Learn More &rarr; </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
