import React from "react";
import useOnScroll from "../hooks/useOnScroll";

const AnimatedCard = (props) => {

  const [scrollRef, isVisible] = useOnScroll({
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  });
  const { activeClassName, children, inactiveClassName } = props;

  return (
    <div ref={scrollRef} className={isVisible? `${activeClassName} ` : `${inactiveClassName}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
