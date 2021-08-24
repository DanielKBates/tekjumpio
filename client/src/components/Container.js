import React from "react";

const Container = (props) => {
  return <div className="container px-4 pb-20 mx-auto bg-black">{props.children}</div>;
};

export default Container;
