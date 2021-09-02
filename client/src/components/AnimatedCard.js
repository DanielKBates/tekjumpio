import React, { useState } from "react";

const AnimatedCard = (props) => {
  const { isVisible, animation, propClassName, children, inactiveClassName } = props;

  return (
    <div className={isVisible? `${animation} ${propClassName}` : `${inactiveClassName} ${propClassName}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
