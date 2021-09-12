import React, { useState } from "react";
import About from "./About";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <div
          className="group border-2 border-red-600 hover:bg-white hover:shadow-red hover:border-transparent mb-8  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl transition duration-150 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(1);
          }}
        >
          <div className="md:flex ">
            <div className="md:flex-shrink-0 ">
              <img
                className="p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center grouphover:shadow-3xl  "
                src="https://images.unsplash.com/photo-1570639831023-bb6815023c5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Man looking at item at a store"
              ></img>
            </div>
            <div className="p-8">
              <h1 className="capitalize font-black mt-1 text-lg leading-tight font-large text-red-200 group-hover:text-black hover:underline ">
                You Will Be Trained
              </h1>
            </div>
          </div>
        </div>

        <div
          className="group border-2 border-blue-600 hover:bg-white hover:shadow-blue hover:border-transparent mb-8 relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl transition duration-150 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(2);
          }}
        >
          <div className="md:flex ">
            <div className="md:flex-shrink-0 ">
              <img
                className="group p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center hover:animate-bounce "
                src="https://images.unsplash.com/photo-1581431886321-76fd91bf1ae6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Man looking at item at a store"
              ></img>
            </div>
            <div className="p-8">
              <h1 className="capitalize font-black mt-1 text-lg leading-tight font-large text-blue-200 group-hover:text-black hover:underline ">
                You Will Build Real Projects
              </h1>
            </div>
          </div>
        </div>

        <div
          className="group border-2 border-green-600 hover:bg-white hover:shadow-green hover:border-transparent  relative group max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl transition duration-150 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(3);
          }}
        >
          <div className="md:flex ">
            <div className="md:flex-shrink-0 ">
              <img
                className="group p-4 h-36 w-full object-cover md:w-36 rounded-full h-24 w-24 flex items-center justify-center hover:animate-bounce "
                src="https://images.unsplash.com/photo-1583162558971-6c686a2dc9f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Man looking at item at a store"
              ></img>
            </div>
            <div className="p-8">
              <h1 className="capitalize font-black mt-1 text-lg leading-tight font-large text-green-200 group-hover:text-black hover:underline ">
                You Will Be A Skilled Candidate
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col break-words bg-white w-full shadow-lg rounded">
          <div className={activeTab === 1 ? "block" : "hidden"}>TRAINING</div>
          <div className={activeTab === 2 ? "block" : "hidden"}>WORKING</div>
          <div className={activeTab === 3 ? "block" : "hidden"}>
            SO SKILLED NOW, WOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;
