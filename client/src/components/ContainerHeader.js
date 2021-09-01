import React from "react";

const ContainerHeader = (props) => {
  return <div className="container mx-auto bg-transparent">{props.children}</div>;
};

export default ContainerHeader;