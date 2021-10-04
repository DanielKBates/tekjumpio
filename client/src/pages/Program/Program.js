import React from "react";
import ProgramTabs from "./ProgramTabs";
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
          <div className="card1 relative flex bg-gray-800 rounded-xl">
            <div className="flex flex-col lg:justify-end lg:flex-row">
              <div className="w-full">
                <img
                  className=" object-cover rounded-tl-lg rounded-tr-lg lg:rounded-tr-0 lg:rounded-br-0 lg:rounded-tl-lg lg:rounded-bl-lg "
                  src="https://miro.medium.com/max/2600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg"
                  alt="MERN STACK"
                ></img>
              </div>

              <div>
                <h1 className="text-white text-6xl text-right font-black mt-4 mr-3">
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
        <div className="bg-gray-800 overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-300"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
              />
            </svg>

            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                  Get Trained.
                </h2>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                  Build Real World Experience.
                </h2>
              </div>
              <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                {programFeatures.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6 text-gray-50 " aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-500">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-200">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
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
