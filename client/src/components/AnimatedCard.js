import React, { useState } from "react";

const AnimatedCard = (props) => {
  const { isVisible, animation, propClassName, children } = props;

  return (
    <div className={isVisible? `${animation} ${propClassName}` : `transition-all duration-1000 ease-in-out translate-y-0 opacity-0 ${propClassName}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
