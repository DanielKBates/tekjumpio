import React from "react";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "../../components/Reviews/Reviews";

import { programFeatures } from "../../utils/programFeatures";

const Program = () => {
  return (
    <div className="pt-24 w-11/12 lg:w-3/4 mx-auto">

      <div className="animate-fadeIn">
        <div className="relative pb-10 bg-gray-800 rounded-lg gradient-border animate-animateGradient">
          <img
            className="rounded-tl-lg w-full h-full lg:h-90 rounded-tr-lg"
            src="https://miro.medium.com/max/2600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg"
            alt="MERN STACK"
          ></img> 
          <div className="flex flex-col lg:justify-end">
            <div>
              <h1 className="text-indigo-500 text-6xl text-right font-black mt-4 lg:mt-6 pr-4">
                Our Program
              </h1>

              <p className="text-left pl-4 text-blue-200 mt-4 lg:text-xl">
                Our handcrafted curriculum will put you right in the role of a
                Full Stack Developer, giving you in-depth training in
                everything from the basics of web development, all the way up
                to the industry standards used by professionals every day.
                Learn modern methodologies and best practices and get ready to
                jump into your new career.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-md px-4 lg:mt-12 text-left sm:max-w-3xl lg:max-w-7xl">
            <p className="mt-2 text-3xl font-extrabold text-indigo-500 tracking-tight md:text-4xl">
              We want to show you the (Hello) World
            </p>
            <p className="mt-5 text-right text-xl text-blue-200">
              Beyond the actual technologies you will be trained on, you will be immersed in developer methodologies, communities, and culture.
              You will be utilizing with your team the same practices that professional devs use everyday, from Tel Aviv to Sillicon Valley.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {programFeatures.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div className="flex justify-center">
                          <span className="p-3 multiGradient animate-animateGradient rounded-md shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-blue-100"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-indigo-600 tracking-tight">
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
