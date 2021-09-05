import React from "react";

const AnimatedCard = (props) => {
  const { isVisible, activeClassName, children, inactiveClassName } = props;

  return (
    <div className={isVisible? `${activeClassName} ` : `${inactiveClassName}`}>
      {children}
    </div>
  );
};

export default AnimatedCard;
