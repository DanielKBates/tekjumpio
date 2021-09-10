import React, { useCallback, useEffect, useState } from "react";

const SlideIn = ({ children, dir, uniqueID, amount, distanceFromBottom }) => {
  /**
   * VERY IMPORTANT BUG!!!
   * --------------------------
   * When switching pages the {window.on("Scroll")} tries to access a DOM element that doesn't exist
   *                                                                  ^ (It doesn't exist cuz of page change)
   * This throws an error crashing the page.
   * Need to find a way to fix this
   *  !!! We need to make it so window on scroll doesn't run if the component isnt
   *  - Maybe we could keep track of what page the component was made on,
   *    then store current page in useContext()
   *    In the calc() function we can check if ( context == current page ) else { return() }
   */

  // this is config
  const calc = useCallback(() => {
    //select this component
    var thiss = document.getElementById(uniqueID);
    //check distance to top
    if (thiss !== null) {
      var distanceToTop = thiss.getBoundingClientRect().top;

      const diff = window.innerHeight - thiss.offsetHeight;
      //make sure entire compent is visible before floating it in
      if (distanceToTop < diff - distanceFromBottom) {
        setActive(true);
      } else {
        setActive(false);
      }
    } else {
      console.log("this ran when not rendered causing error");
    }
  }, []);
  if (!dir) {
    dir = [0, 1];
  }
  if (!amount) {
    amount = "3rem";
  }
  if (!distanceFromBottom) {
    distanceFromBottom = 100;
  }

  const [active, setActive] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
    // return setRendered(false);
  }, [rendered]);

  useEffect(() => {
    if (rendered) {
      window.addEventListener("scroll", function () {
        calc(distanceFromBottom, uniqueID);
      });

      window.addEventListener("load", function () {
        calc(distanceFromBottom, uniqueID);
      });
    }

    // return () => {
    //   window.removeEventListener("scroll", calc);
    //   window.removeEventListener("load", calc);
    // };
  }, [distanceFromBottom, uniqueID, calc]);

  return (
    <div
      id={uniqueID}
      style={
        !active
          ? {
              transform: `translate(${
                dir[0] === 1
                  ? `${amount}`
                  : dir[0] === 0
                  ? `0`
                  : dir[0] === -1
                  ? `-${amount}`
                  : `0`
              }, ${
                dir[1] === 1
                  ? `${amount}`
                  : dir[1] === 0
                  ? `0`
                  : dir[1] === -1
                  ? `-${amount}`
                  : `0`
              }${")"}`,
              opacity: 0,
            }
          : {}
      }
      className="transition-all duration-700 ease-out translate-y-0 opacity-100"
    >
      {children}
    </div>
  );
};

export default SlideIn;


{/* <SlideIn dir={[0, 1]} uniqueID="test-slidin1">
        <div className="bg-red-400 testDiv w-1/2">
          <span>&uarr;</span>Floats to point: (0,1)
        </div>
      </SlideIn>
      <SlideIn dir={[0, 0]} uniqueID="test-slidin2">
        <div className="bg-blue-700 testDiv w-1/2">
          <span>&bull;</span>Floats to point: (0,0)
        </div>
      </SlideIn>
      <SlideIn dir={[0, -1]} uniqueID="test-slidin3">
        <div className="bg-yellow-800 testDiv w-1/2">
          <span>&darr;</span>Floats to point: (0,-1)
        </div>
      </SlideIn>
      <SlideIn dir={[1, 1]} uniqueID="test-slidin4">
        <div className="bg-green-500 testDiv w-1/2">
          <span>&#8598;</span>Floats to point: (1,1)
        </div>
      </SlideIn>
      <SlideIn dir={[1, 0]} uniqueID="test-slidin5">
        <div className="bg-indigo-700 testDiv w-1/2">
          <span>&larr;</span>Floats to point: (1,0)
        </div>
      </SlideIn>
      <SlideIn dir={[1, -1]} uniqueID="test-slidin6">
        <div className="bg-pink-600 testDiv w-1/2">
          <span>&#8601;</span>Floats to point: (1,-1)
        </div>
      </SlideIn>
      <SlideIn dir={[-1, 1]} uniqueID="test-slidin7">
        <div className="bg-gray-500 testDiv w-1/2">
          <span>&#8599;</span>Floats to point: (-1,1)
        </div>
      </SlideIn>
      <SlideIn dir={[-1, 0]} uniqueID="test-slidin8">
        <div className="bg-green-900 testDiv w-1/2">
          <span>&rarr;</span>Floats to point: (-1,0)
        </div>
      </SlideIn>
      <SlideIn dir={[-1, -1]} uniqueID="test-slidin9">
        <div className="bg-indigo-900 testDiv w-1/2">
          <span>&#8600;</span>Floats to point: (-1,-1)
        </div>
      </SlideIn> */}

