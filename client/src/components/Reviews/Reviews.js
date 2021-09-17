import { useState } from 'react'

import useInterval from '../../hooks/useInterval'
const reviewList = require("../../utils/reviews.json")

function Reviews() {
  const [slide, setSlide] = useState(0)

  useInterval(() => {
    if (slide === reviewList.length - 1) {
      setSlide(0)
    }
    else {
      setSlide(slide + 1)
    }
  }, 6000)

  return (
    <>

      <div className="relative multiGradient animate-animateGradient border border-transparent rounded-xl w-2/3 mx-auto my-20  h-52"></div>
      <div className="absolute bg-gray-800 transform scale-y-96 scale-x-99 border border-transparent rounded-xl w-2/3 h-52 mx-auto my-20">
      {/* CONTENT */}
        <div className="px-8 pt-6 flex flex-row justify-between"><span className="text-blue-200 text-4xl">{reviewList[slide].name}</span><span className="text-green-300 text-xl">{reviewList[slide].class}</span></div>
        <div className="px-8 py-6 text-blue-200">
          <span className="text-yellow-600 text-lg">"</span> {reviewList[slide].message} <span className="text-yellow-600 text-lg">"</span>
        </div>

        
      </div>


    </>
  )
}

export default Reviews;