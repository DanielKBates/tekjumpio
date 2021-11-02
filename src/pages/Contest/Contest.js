import React from "react";

import { InboxIcon, SparklesIcon, CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Design",
    description:
      "We are looking for a logo that compliments the aesthetic of the site: bright, vibrant pinks, purples and blues. That being said, we want to see your creativity!",
  },
  {
    name: "Format",
    description:
      "Design the logo in such a way that the resolution is solid in sizes from 16x16 to 300x300. Please only submit .jpg or .png image files.",
  },
  {
    name: "Submit",
    description:
      "Review the terms and conditions below and submit your design! We will be announcing the winner on ***DATE***!",
  },
];

const prizes = [
  {
    id: 1,
    name: "Galaxy Watch 4 - 44mm",
    href: "https://www.amazon.com/Samsung-Electronics-Galaxy-Watch-Smartwatch/dp/B096BHLJ7V/ref=sr_1_4?dchild=1&gclid=CjwKCAjwoP6LBhBlEiwAvCcthIYovLwX3Asf4Eb9WNrh2KFBAm2FiLbog72mfX9gMI9dTscFA0stEhoCSmUQAvD_BwE&hvadid=539979812379&hvdev=c&hvlocphy=9009576&hvnetw=g&hvqmt=e&hvrand=13993254876307791058&hvtargid=kwd-1409527913986&hydadcr=15191_9872177&keywords=galaxy+watch+4+classic+amazon&qid=1635814608&sr=8-4",
    imageSrc: "https://tekjumpbucket.s3.amazonaws.com/galaxyWatch.jpg",
    imageAlt: "Galaxy Watch 4",
  },
  {
    id: 1,
    name: "Apple Watch Series 7",
    href: "https://www.amazon.com/Apple-Watch-Midnight-Aluminum-Sport/dp/B09HF6XBPF/ref=sr_1_1_sspa?dchild=1&keywords=apple+watch+series+7&qid=1635814657&sprefix=apple%2Caps%2C104&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNUcyT1I5RlE5S1VKJmVuY3J5cHRlZElkPUEwNDExMzI0UEJJMDBIMDZHRTRMJmVuY3J5cHRlZEFkSWQ9QTA3ODUxMTgzRzhTRTE0U1ZWSlpWJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    imageSrc: "https://tekjumpbucket.s3.amazonaws.com/appleWatch.jpg",
    imageAlt: "Apple Watch Series 7",
  },
  {
    id: 1,
    name: "Fitbit Versa 3",
    href: "https://www.amazon.com/Fitbit-Fitness-Smartwatch-Exclusive-Included/dp/B08W2GKGR4/ref=sr_1_1?dchild=1&keywords=fitbit+versa+3&qid=1635814697&rdc=1&sprefix=fitbit+versa%2Caps%2C98&sr=8-1",
    imageSrc: "https://tekjumpbucket.s3.amazonaws.com/fitbit.jpg",
    imageAlt: "Fitbit Versa 3",
  },
];

export default function Example() {
  return (
    <div className="multiGradient animate-animateGradient pt-16 lg:pt-24">
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-800" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-contest-red  mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Enter Your Logo Design
                  </span>
                  <span className="block text-indigo-200">
                    to Win a SmartWatch
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  We are excited to announce our Logo Contest! We want to
                  promote amatuer graphic designers and brand our website with
                  an amazing design. The winner will be rewarded a top of the
                  line smart watch of their choice, as well as having their
                  design be used as our official logo! See the rules, prizes,
                  and conditions below.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-16 pb-32 bg-gray-800 overflow-hidden">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 border-b-2 border-l-2 border-contest-red rounded-xl">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-600">
                      <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-contest-red">
                      Aesthetic and Design
                    </h2>
                    <p className="mt-4 text-xl text-gray-200">
                      We are looking for a creative, bright and modern logo to
                      brand our new program with! We want to see your
                      creativity... and reward it! We are looking for a logo
                      that fits with the website's current vibrant aesthetic, and
                      we can't wait to see the design you come up with! Check below to see the rules, guidelines and conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tekjumpbucket.s3.amazonaws.com/graphic2.jpg"
                    alt="Graphic 2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl border-b-2 border-r-2 border-contest-red rounded-xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-400">
                      <SparklesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-contest-red">
                      Prizes
                    </h2>
                    <p className="mt-4 text-xl text-gray-200">
                      The winner will be selected and announced on ***DATE**!
                      The designer who makes the best design will be able to
                      choose from three top-of-the-line Smart Watches as their prize, see below
                      for more detail!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 ">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tekjumpbucket.s3.amazonaws.com/graphic1.jpg"
                    alt="graphic 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-contest-red">
              The Winner will select one of the following:
            </h2>

            <div className="mt-6 flex flex-col space-y-6 md:flex-row justify-around">
              {prizes.map((prize) => (
                <div key={prize.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={prize.imageSrc}
                      alt={prize.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-contest-red ">
                        <a href={prize.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {prize.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Rules, Guidelines and Conditions
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              To be eligible to win, there are a few things you need to make
              sure to do:
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              <div>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <CheckIcon
                      className="h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    Like and Share our Facebook
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    To be eligible to win, please Like and Share our{" "}
                    <a
                      className="underline"
                      href="https://www.facebook.com/tekjumpio"
                    >
                      Facebook.
                    </a>
                  </p>
                </div>
              </div>
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <CheckIcon
                        className="h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
