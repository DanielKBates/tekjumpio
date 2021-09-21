import { useState } from "react";

import useInterval from "../../hooks/useInterval";
const reviewList = require("../../utils/reviews.json");

function Reviews() {
  const [slide, setSlide] = useState(1);
  const nextSlide = () => {
    if (slide !== reviewList.length) {
      setSlide(slide + 1);
    } else if (slide === reviewList.length) {
      setSlide(1);
    }
  };

  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else if (slide === 1) {
      setSlide(reviewList.length);
    }
  };

  const moveDot = (index) => {
    setSlide(index);
  };
  const increment = () => {
    setSlide((prevSlide) =>
      prevSlide === reviewList.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    <div className="relative w-full m-auto group">
      <div className="relative w-full lg:w-5/6 xl:w-1/2 mx-auto transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 grid-rows-1 h-full mt-20 mb-5 w-full">
          {reviewList.map((rev, index) => (
            <div
              key={rev.uid}
              className={`rev-${
                rev.uid
              } row-1 col-1 transition-all duration-300 animate-animateGradient multiGradient rounded-xl p-1 w-full  ease-in-out h-fit-content select-text ${
                slide === index + 1 ? "opacity-100" : "opacity-0 "
              }`}
            >
              <div className="bg-gray-800 rounded-xl p-10">
                {/* CONTENT */}
                <div className="quote-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-10 fill-current text-blue-200 text-opacity-50"
                  >
                    <path
                      fill=""
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className="review-text flex flex-col items-center text-center">
                  <h2 className="review-title font-bold text-3xl text-gray-100 m-5 overflow-ellipsis w-4/6">
                    {rev.title}
                  </h2>
                  <p className="italic text-gray-300">{rev.message}</p>
                  <div className="review-user mt-5">
                    <h3 className="text-gray-100 text-xl">{rev.name}</h3>
                    <h4 className="text-gray-300 text-base">{rev.type}</h4>
                    <h4 className="text-gray-300 text-xs">{rev.class}</h4>
                  </div>
                </div>
                <div className="quote-end flex flex-row-reverse">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-10 fill-current text-blue-200 text-opacity-50"
                  >
                    <path
                      fill=""
                      d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="bg-blue-100 bg-opacity-10 hover:bg-opacity-50 my-0 transition-colors duration-500 ease-in-out w-10 h-10 lg:w-8 lg:h-8 rounded-full text-white absolute flex justify-center items-center cursor-pointer top-80 left-0 lg:-left-10"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            className="fill-current text-blue-100 h-9 lg:max-h-full"
          >
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-blue-100 bg-opacity-10 hover:bg-opacity-50 my-0 transition-colors duration-500 ease-in-out w-10 h-10 lg:w-8 lg:h-8 rounded-full text-white absolute flex justify-center items-center cursor-pointer top-80 right-0 lg:-right-10"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            className="fill-current text-blue-100 h-9 lg:max-h-full"
          >
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
          </svg>
        </button>

        <div className="w-full flex ease-in-out justify-center">
          {Array.from({ length: reviewList.length }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={`cursor-pointer w-3 h-3 rounded-full border-2 border-blue-200 mx-1 ${
                slide === index + 1
                  ? "animate-animateGradient multiGradient"
                  : "bg-blue-200"
              } transition-all duration-0 ease-in-out opacity-100 z-20`}
              style={{ backgroundSize: "800%" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
