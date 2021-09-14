import React, { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="grid grid-cols-3 space-x-12">

      <div className="flex-1 col-span-1">

        <div
          className="group border-2 border-purple-300 hover:bg-white hover:shadow-purple hover:border-transparent mb-8 relative max-w-md rounded-xl overflow-hidden md:max-w-1/2 transition duration-150 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(1);
          }}
        >
          <div className="md:flex justify-between">
            <div className="md:flex-shrink-0 ">
              <img
                className="group h-36 w-full object-cover md:w-36 flex"
                src="https://images.unsplash.com/photo-1570639831023-bb6815023c5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Man looking at item at a store"
              ></img>
            </div>
            <div className="flex items-center mr-8">
              <h1 className="font-semibold text-lg text-blue-200 group-hover:text-black hover:underline">
                You Will Be Trained
              </h1>
            </div>
          </div>
        </div>

        <div
          className="group border-2 border-blue-600 hover:bg-white hover:shadow-blue hover:border-transparent mb-8 relative group max-w-md rounded-xl  overflow-hidden md:max-w-1/2 transition duration-150 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(2);
          }}
        >
          <div className="md:flex justify-between">
            <div className="flex items-center ml-16">
              <h1 className="font-semibold text-lg font-large text-blue-200 group-hover:text-black hover:underline">
                You Will Build
              </h1>
            </div>
            <div className="md:flex-shrink-0">
              <img
                className="group h-36 w-full object-cover md:w-36 flex"
                src="https://images.unsplash.com/photo-1581431886321-76fd91bf1ae6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Man looking at item at a store"
              ></img>
            </div>
          </div>
        </div>

        <div
          className="group border-2 border-green-600 hover:bg-white hover:shadow-green hover:border-transparent relative group max-w-md rounded-xl  overflow-hidden md:max-w-1/2 transition duration-150 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(3);
          }}
        >
          <div className="md:flex justify-between">
            <div className="md:flex-shrink-0 ">
              <img
                className="group h-36 w-full object-cover md:w-36 flex"
                src="https://images.unsplash.com/photo-1583162558971-6c686a2dc9f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Man looking at item at a store"
              ></img>
            </div>
            <div className="flex items-center">
              <h1 className="font-semibold text-lg font-large text-blue-200 group-hover:text-black hover:underline mr-10">
                You Will Be A Ready
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 break-words text-white bg-opacity-60 shadow-lg rounded-xl col-span-2">
        <div className={activeTab === 1 ? "block p-10" : "hidden"}>
          <h1 className="text-center">WE WILL TEACH YOU: </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam a tortor iaculis, ac tempus enim sollicitudin. Nunc a nisl ac urna maximus vehicula vel vel turpis. Curabitur tempus lectus at euismod iaculis. Pellentesque et ultrices urna. In sit amet urna pretium, scelerisque velit sit amet, mollis nibh. Duis turpis lorem, elementum et metus vel, fringilla dignissim neque. Maecenas malesuada volutpat efficitur. Nulla ornare pellentesque ornare. Vivamus non elementum tellus. Pellentesque vulputate metus neque, at maximus sapien auctor at. Nulla ipsum dui, feugiat sed ipsum nec, fringilla aliquet magna.
            Duis malesuada, ligula id luctus congue, arcu lectus ornare turpis, id venenatis lacus lorem vitae magna. Duis vestibulum massa non ipsum euismod interdum. Etiam at laoreet lorem, nec tincidunt urna. Aliquam dignissim nulla in faucibus efficitur. Vestibulum ut feugiat tellus, sit amet dapibus nulla. In convallis augue ut imperdiet euismod. Donec porttitor dolor nisi, vitae molestie tortor varius a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel imperdiet felis. Phasellus at elementum ante, bibendum venenatis ex. Proin sapien nisi, posuere at vulputate at, consequat sed augue. Nunc condimentum, mauris id dictum gravida, mauris risus interdum nunc, eu tincidunt urna eros tempor tellus. Suspendisse vel tempor nibh, at volutpat dui. Donec condimentum ex non scelerisque vulputate. Aenean porttitor id nulla eget porta.</p>
        </div>
        <div className={activeTab === 2 ? "block p-10" : "hidden"}>
          <h1 className="text-center">WE WILL HELP YOU BUILD: </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam a tortor iaculis, ac tempus enim sollicitudin. Nunc a nisl ac urna maximus vehicula vel vel turpis. Curabitur tempus lectus at euismod iaculis. Pellentesque et ultrices urna. In sit amet urna pretium, scelerisque velit sit amet, mollis nibh. Duis turpis lorem, elementum et metus vel, fringilla dignissim neque. Maecenas malesuada volutpat efficitur. Nulla ornare pellentesque ornare. Vivamus non elementum tellus. Pellentesque vulputate metus neque, at maximus sapien auctor at. Nulla ipsum dui, feugiat sed ipsum nec, fringilla aliquet magna.
            Duis malesuada, ligula id luctus congue, arcu lectus ornare turpis, id venenatis lacus lorem vitae magna. Duis vestibulum massa non ipsum euismod interdum. Etiam at laoreet lorem, nec tincidunt urna. Aliquam dignissim nulla in faucibus efficitur. Vestibulum ut feugiat tellus, sit amet dapibus nulla. In convallis augue ut imperdiet euismod. Donec porttitor dolor nisi, vitae molestie tortor varius a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel imperdiet felis. Phasellus at elementum ante, bibendum venenatis ex. Proin sapien nisi, posuere at vulputate at, consequat sed augue. Nunc condimentum, mauris id dictum gravida, mauris risus interdum nunc, eu tincidunt urna eros tempor tellus. Suspendisse vel tempor nibh, at volutpat dui. Donec condimentum ex non scelerisque vulputate. Aenean porttitor id nulla eget porta.</p>
        </div>
        <div className={activeTab === 3 ? "block p-10" : "hidden"}>
          <h1 className="text-center">WE WILL GET YOU PREPARED FOR A NEW CAREER: </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere quam a tortor iaculis, ac tempus enim sollicitudin. Nunc a nisl ac urna maximus vehicula vel vel turpis. Curabitur tempus lectus at euismod iaculis. Pellentesque et ultrices urna. In sit amet urna pretium, scelerisque velit sit amet, mollis nibh. Duis turpis lorem, elementum et metus vel, fringilla dignissim neque. Maecenas malesuada volutpat efficitur. Nulla ornare pellentesque ornare. Vivamus non elementum tellus. Pellentesque vulputate metus neque, at maximus sapien auctor at. Nulla ipsum dui, feugiat sed ipsum nec, fringilla aliquet magna.
            Duis malesuada, ligula id luctus congue, arcu lectus ornare turpis, id venenatis lacus lorem vitae magna. Duis vestibulum massa non ipsum euismod interdum. Etiam at laoreet lorem, nec tincidunt urna. Aliquam dignissim nulla in faucibus efficitur. Vestibulum ut feugiat tellus, sit amet dapibus nulla. In convallis augue ut imperdiet euismod. Donec porttitor dolor nisi, vitae molestie tortor varius a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel imperdiet felis. Phasellus at elementum ante, bibendum venenatis ex. Proin sapien nisi, posuere at vulputate at, consequat sed augue. Nunc condimentum, mauris id dictum gravida, mauris risus interdum nunc, eu tincidunt urna eros tempor tellus. Suspendisse vel tempor nibh, at volutpat dui. Donec condimentum ex non scelerisque vulputate. Aenean porttitor id nulla eget porta.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;
