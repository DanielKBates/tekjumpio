import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import logo from "./video2.mp4";
import { Player } from "video-react";

import ContainerAbout from "../components/ContainerAbout";
import ContainerHeader from "../components/ContainerHeader";
import SlideIn2 from "../components/slideIn2";
import SlideIn from "../components/slideIn";

// import css

const About = () => {
  return (
    <div class="back">
      <ContainerAbout>
        <div class="flex space-x-4 ">
          <div class="flex-1">
            <div class=" flex-1  relative group max-w-md mx-auto rounded-xl ">
              <div class="md:flex">
                <div class="p-8">
                  <h1
                    id="header1"
                    class="capitalize font-black mt-1 text-lg leading-tight font-large text-red-200 text-7xl "
                  >
                    About TekJump.IO
                  </h1>
                </div>
              </div>
            </div>
            <div class="group border-2 border-red-600 hover:bg-white hover:shadow-red hover:border-transparent xl:mb-6 2xl:mb-16  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
              <div class="md:flex ">
                <div class="md:flex-shrink-0 ">
                  <img
                    class="p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center grouphover:shadow-3xl  "
                    src="https://images.unsplash.com/photo-1570639831023-bb6815023c5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Man looking at item at a store"
                  ></img>
                </div>
                <div class="p-8">
                  <h1 class="capitalize font-black mt-1 text-lg leading-tight font-large text-red-200 group-hover:text-black hover:underline ">
                    Finding customers for your new business
                  </h1>
                </div>
              </div>
            </div>

            <div class="group border-2 border-blue-600 hover:bg-white hover:shadow-blue hover:border-transparent xl:mb-6 2xl:mb-16  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
              <div class="md:flex ">
                <div class="md:flex-shrink-0 ">
                  <img
                    class="group p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center hover:animate-bounce "
                    src="https://images.unsplash.com/photo-1581431886321-76fd91bf1ae6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Man looking at item at a store"
                  ></img>
                </div>
                <div class="p-8">
                  <h1 class="capitalize font-black mt-1 text-lg leading-tight font-large text-blue-200 group-hover:text-black hover:underline ">
                    Finding customers for your new business
                  </h1>
                </div>
              </div>
            </div>

            <div class="group border-2 border-green-600 hover:bg-white hover:shadow-green hover:border-transparent  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
              <div class="md:flex ">
                <div class="md:flex-shrink-0 ">
                  <img
                    class="group p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center hover:animate-bounce "
                    src="https://images.unsplash.com/photo-1583162558971-6c686a2dc9f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Man looking at item at a store"
                  ></img>
                </div>
                <div class="p-8">
                  <h1 class="capitalize font-black mt-1 text-lg leading-tight font-large text-green-200 group-hover:text-black hover:underline ">
                    Finding customers for your new business
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png"
                alt="This image is our logo"
                class="w-full m-16"
              ></img>
            </div>
          </div>
        </div>
      </ContainerAbout>
      <hr class="bg-white m-8 mb-16"></hr>

      <div class="back">
        <div class="back bg-white shadow-3xl rounded m-8 p-8   text-center">
          
          <div>
          <h1
          class="text-9xl text-black text-center pb-4"
          id="header2"
        >
          Our Mission
        </h1>

            <p className="text-white font-thin text-sm leading-normal text-center text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores
            </p>
          </div>
        </div>
        <SlideIn dir={[0, 0]} uniqueID="test-slidin9">
          <div class="flex mr-20 mb-16 mt-32 ">
            <div class=" shadow-3xl xl:mb-6 2xl:mb-16  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl bg-white p-2 StreamsHero-image relative bg-gradient-to-r from-purple-400 via-green-400 to-red-400 h-1/2">
              <div class="StreamsHero-content ">
                <h1 class="text-white">Lorem Text</h1>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class=" relative group max-w-md   rounded-full py-3 px-6 overflow-hidden md:max-w-2xl">
              <img
                src="https://via.placeholder.com/350x150 "
                class="rounded-full py-3 px-6 "
              ></img>
            </div>
          </div>
        </SlideIn>
        <SlideIn dir={[-1, 0]} uniqueID="test-slidin9">
          <div class="flex ml-20 pb-16">
            <div class="  relative group max-w-md   rounded-full py-3 px-6 overflow-hidden md:max-w-2xl ">
              <img
                src="https://via.placeholder.com/350x150 "
                class="rounded-full py-3 px-6"
              ></img>
            </div>

            <div class=" shadow-3xl xl:mb-6 2xl:mb-16  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl bg-white p-2 StreamsHero-image relative bg-gradient-to-r from-purple-400 via-green-400 to-red-400 h-1/2">
              <div class="StreamsHero-content">
                <h1 class="text-white">Lorem Text</h1>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>

      <SlideIn dir={[-1, 0]} uniqueID="test-slidin9">
          <div class="flex mr-20 mb-36">
            <div class=" shadow-3xl xl:mb-6 2xl:mb-16  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl bg-white p-2 StreamsHero-image relative bg-gradient-to-r from-purple-400 via-green-400 to-red-400 h-1/2">
              <div class="StreamsHero-content">
                <h1 class="text-white">Lorem Text</h1>

                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="  relative group max-w-md   rounded-full py-3 px-6 overflow-hidden md:max-w-2xl">
              <img
                src="https://via.placeholder.com/350x150 "
                class="rounded-full py-3 px-6"
              ></img>
            </div>
          </div>
        </SlideIn>

        <hr class="bg-white m-8 mb-16"></hr>


      <div class="flex p-8">
        <div class="card">
          <h3 class="title">Reviews</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>

          <p class="mt-32 pl-4 pr-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div class="card">
          <h3 class="title">Reviews</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <p class="mt-32 pl-4 pr-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div class="card">
          <h3 class="title">Reviews</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <p class="mt-32 pl-4 pr-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div class="card">
          <h3 class="title">Reviews</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <p class="mt-32 pl-4 pr-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div class="card">
          <h3 class="title">Reviews</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <p class="mt-32 pl-4 pr-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div class="card">
          <h3 class="title">Reviews</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <p class="mt-32 pl-4 pr-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
