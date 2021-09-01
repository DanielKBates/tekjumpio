import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import ContainerAbout from "../components/ContainerAbout";
import ContainerHeader from "../components/ContainerHeader";

const About = () => {
  return (
      
    <div class="wrapper bg-fixed bg-gray-800">
   <ContainerHeader>
      <div class="StreamsHero-image relative bg-gradient-to-r from-purple-400 via-green-400 to-red-400 h-1/2 ">
        <div class="StreamsHero-content">
          <div class="StreamsHero-buttonContainer">
           
          </div>
          <h1 class="StreamsHero-header">ABOUT  TEKJUMP</h1>
          <p class="StreamsHero-blurb pl-8 pr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce sed ligula in dui dignissim sollicitudin ut in libero. 
          Ut venenatis odio enim, id viverra ipsum commodo ut. 
          Proin elementum diam non lectus auctor accumsan. 
          Morbi tincidunt dapibus mauris ac pulvinar. 
          Curabitur volutpat leo in ipsum rutrum pulvinar in semper ligula. 
          Aliquam at euismod ante. 
            <div class="w-96 h-36 bg-gray-600 left-50 mx-auto mt-4"></div>
          </p>
          
        </div>
      </div>
      </ContainerHeader>
      <div class="cards2">
      <ContainerAbout >
        <div class="flex space-x-4 ">
          <div class=" group border-4 border-blue-600 hover:bg-white hover:shadow-lg hover:border-transparent hover:animate-pulse hover:shadow-blue  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110 hover:shadow-inner   ">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-48  "
                  src="https://via.placeholder.com/350x150"
                  alt="Man looking at item at a store"
                ></img>
              </div>
              <div class="p-8">
                <a
                  href="#"
                  class="capitalize font-black mt-1 text-lg leading-tight  font-large text-blue-200 group-hover:text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-blue-200 group-hover:text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>

          <div class=" group border-4 border-yellow-500 hover:bg-white hover:shadow-yellow hover:border-transparent  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://via.placeholder.com/350x150"
                  alt="Man looking at item at a store"
                ></img>
              </div>
              <div class="p-8">
                <a
                  href="#"
                  class="capitalize font-black mt-1 text-lg leading-tight font-large text-yellow-200 group-hover:text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-yellow-200 group-hover:text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerAbout>
      </div>
      <br></br>
      <div class="cards3">
      <ContainerAbout >
        <div class="flex space-x-4 ">
          <div class=" flex-1 group border-4 border-red-500 hover:bg-white hover:shadow-red hover:border-transparent  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://via.placeholder.com/350x150"
                  alt="Man looking at item at a store"
                ></img>
              </div>
              <div class="p-8">
                <a
                  href="#"
                  class="capitalize font-black mt-1 text-lg leading-tight font-large text-red-200 group-hover:text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-red-200 group-hover:text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>

          <div class=" group border-4 border-green-500 hover:bg-white hover:shadow-green hover:border-transparent  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xltransition duration-150 ease-in-out transform hover:scale-110   ">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://via.placeholder.com/350x150"
                  alt="Man looking at item at a store"
                ></img>
              </div>
              <div class="p-8">
                <a
                  href="#"
                  class="capitalize font-black mt-1 text-lg leading-tight font-large text-green-200 group-hover:text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-green-200 group-hover:text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </ContainerAbout>
      </div>
      </div>
   
    
  );
};

export default About2;