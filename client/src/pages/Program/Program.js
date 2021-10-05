import React from "react";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "../../components/Reviews/Reviews";
import "./program.css";

import { programFeatures } from "../../utils/programFeatures";

const Program = () => {
  return (
    <div className="pt-24 w-11/12 lg:w-3/4 mx-auto">
      {/* Header w/ animatedBorder */}
      <div className="lg:mt-4 mb-4 lg:mb-14 animate-fadeIn">
        <div className="flex-col lg:flex-row">
          <div className="card1 relative flex bg-gray-900 rounded-xl">
            <div className="flex flex-col lg:justify-end lg:flex-row">
              <div className="w-full">
                <img
                  className=" object-cover rounded-tl-lg rounded-tr-lg lg:rounded-tr-0 lg:rounded-br-0 lg:rounded-tl-lg lg:rounded-bl-lg "
                  src="https://miro.medium.com/max/2600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg"
                  alt="MERN STACK"
                ></img>
              </div>

              <div>
                <h1 className="text-indigo-500 text-6xl text-right font-black mt-4 mr-3">
                  Our Program
                </h1>

                <p className="text-right pr-2  text-blue-200 mt-8 lg:text-xl">
                  Our handcrafted curriculum will put you right in the role of a
                  Full Stack Developer, giving you in-depth training in
                  everything from the basics of web development, all the way up
                  to the industry standards used by professionals every day.
                  Learn modern methodologies and best practices and get ready to
                  jump into your new career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-fadeIn">
        <div className="relative bg-gray-900 rounded-lg card1 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-indigo-500 uppercase">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-blue-200 tracking-tight sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {programFeatures.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          Ac tincidunt sapien vehicula erat auctor pellentesque
                          rhoncus. Et magna sit morbi lobortis.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <AnimatedCard
          threshold={0.1}
          activeClassName={
            "transform translate-x-0 opacity-100 transition-all duration-1200 ease-in-out"
          }
          inactiveClassName="transition-all duration-1200 ease-in-out transform -translate-x-7 -translate-y-7 opacity-0"
        >
          <div className="w-100 mx-auto flex justify-center">
            <Reviews />
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Program;
