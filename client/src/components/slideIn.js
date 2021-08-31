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

export { SlideIn };
