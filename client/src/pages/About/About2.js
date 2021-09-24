import AnimatedCard from "../../components/AnimatedCard";

import { trainingFeatures, communityFeatures } from "../../utils/aboutFeatures";

export default function About2() {
  return (
    <>
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center  pt-28 pb-16 px-4 sm:pb-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Our Mission </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our mission at Tekjump is to provide not only the
            training you need to be a full stack web developer, but also the
            crucial real world experience you need to land the job of your
            dreams.{" "}
          </p>
        </div>
      </div>
      <div className="pb-16 pt-8 bg-gray-800 overflow-hidden lg:pb-24 lg:pt-28">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>
          <div className="relative  lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative animate-fadeIn ">
              <h3 className="text-2xl font-extrabold text-gray-50 tracking-tight sm:text-3xl">
                Jump Into a New Career
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p>

              <dl className="mt-10 space-y-10 animate-fadeIn ">
                {trainingFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md multiGradient animate-animateGradient text-white">
                        <item.icon
                          className="h-6 w-6 text-gray-50 fill-current"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-50">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <img
                className="relative mx-auto animate-fadeIn rounded-xl"
                width={490}
                src="/images/Adobe_Cropped1.png"
                alt=""
              />
            </div>
          </div>
          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <AnimatedCard
              activeClassName={"opacity-1 transition-all duration-1000"}
              inactiveClassName={"opacity-0 transition-all duration-1000"}
              threshold={0.5}
            >
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-50 tracking-tight sm:text-3xl">
                    Let's Build a Community
                  </h3>
                  <p className="mt-3 text-lg text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit ex obcaecati natus eligendi delectus, cum deleniti
                    sunt in labore nihil quod quibusdam expedita nemo.
                  </p>

                  <dl className="mt-10 space-y-10">
                    {communityFeatures.map((item) => (
                      <div key={item.id} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md multiGradient animate-animateGradient text-white">
                            <item.icon
                              className="h-6 w-6 text-gray-50 fill-current"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-50">
                            {item.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-300">
                          {item.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <svg
                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                    />
                  </svg>
                  <img
                    className="relative mx-auto"
                    width={490}
                    src="https://tailwindui.com/img/features/feature-example-2.png"
                    alt=""
                  />
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </>
  );
}
