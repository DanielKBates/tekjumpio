import AnimatedCard from "../../components/AnimatedCard";

import { trainingFeatures, communityFeatures } from "../../utils/aboutFeatures";
const people = require("../../utils/people.json");

export default function About2() {
  return (
    <>
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center  pt-28 pb-16 px-4 sm:pb-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Our Mission </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our mission at Tekjump is to provide not only the training you need
            to be a full stack web developer, but also the crucial real world
            experience you need to land the job of your dreams.{" "}
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
               Software developers
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
            <div className="bg-gray-50 lg:mt-12 rounded-xl">
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                     Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-500">
                  Tekjump is a close knit team of tech and training experts who are obsessed with helping you launch your new career.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul
                      role="list"
                      className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                    >
                      {people.map((person) => (
                        <li key={person.name} className="sm:py-8">
                          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                              <img
                                className="object-cover shadow-lg rounded-lg"
                                src={person.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <div className="space-y-4">
                                <div className="text-lg leading-6 font-medium space-y-1">
                                  <h3>{person.name}</h3>
                                  <p className="text-indigo-600">
                                    {person.role}
                                  </p>
                                </div>
                                <div className="text-lg">
                                  <p className="text-gray-500">{person.bio}</p>
                                </div>
                                <ul role="list" className="flex space-x-5">
                                  <li>
                              
                                  </li>
                                  <li>
                                    <a
                                      href={person.linkedinUrl}
                                      className="text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">LinkedIn</span>
                                      <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Graduates </h2>
            <p className="text-xl text-gray-500">
             Meet our previous graduates who have worked with us to create WEBSITES
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
