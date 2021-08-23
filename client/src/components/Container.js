import React from "react";

const Container = (props) => {
  return <div className="container px-4 mx-auto bg-black">{props.children}</div>;
};

export default Container;
