import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import ContainerAbout from "../components/ContainerAbout";
import ContainerHeader from "../components/ContainerHeader";

const About = () => {
  return (
    <div class="bg-gray-600">
      <ContainerAbout>
        <div class="flex space-x-4 ">
          <div class="flex-1">
            <div class=" flex-1  relative group max-w-md mx-auto rounded-xl ">
              <div class="md:flex">
                <div class="p-8">
                  <h1 class="capitalize font-black mt-1 text-lg leading-tight font-large text-red-200 text-7xl ">
                    About TekJump.IO
                  </h1>
                </div>
              </div>

            </div>
            <div class="group border-4 border-red-500 hover:bg-white hover:shadow-red hover:border-transparent  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
            <div class="md:flex ">
              <div class="md:flex-shrink-0 ">
                <img
                  class="group p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center hover:animate-bounce "
                  src="https://images.unsplash.com/photo-1570639831023-bb6815023c5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Man looking at item at a store"
                ></img>
              </div>
              <div class="p-8">
                <h1
                 
                  class="capitalize font-black mt-1 text-lg leading-tight font-large text-red-200 group-hover:text-black hover:underline "
                >
                  Finding customers for your new business
                </h1>
              </div>
            </div>
          </div>
          </div>



          <div class="flex-1">
            <img
              src="https://ak.picdn.net/shutterstock/videos/1062533803/thumb/4.jpg?ip=x480"
              alt="It is just a placeholder"
              class=" rounded-3xl w-auto h-xx m-4 "
            ></img>
          </div>
        </div>
      </ContainerAbout>
    </div>
  );
};

export default About;
