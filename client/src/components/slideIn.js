import React, { useState } from "react";

const SlideIn = ({ children, dir, uniqueID, amount }) => {
  if (!dir) {
    dir = [0, 1];
  }
  if (!amount) {
    amount = "2.5rem";
  }
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", function () {
    calc();
  });
  window.addEventListener("load", function () {
    calc();
  });

  function calc() {
      //select this component
    var thiss = document.getElementById(uniqueID);
    //check distance to top
    var distanceToTop = thiss.getBoundingClientRect().top;

    const diff = window.innerHeight - thiss.offsetHeight;
    //make sure entire compent is visible before floating it in
    if (distanceToTop < diff - 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
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
              })`,
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
