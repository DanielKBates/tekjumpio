import React from "react";

const Container = ({ colorClass, children }) => {
  return <div className={"container px-4 pb-20 mx-auto "+ {colorClass}}>{children}</div>;
};

export default Container;
