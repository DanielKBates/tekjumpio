import { useState, useEffect } from "react";
import Highlight from "react-highlight";
import Typewriter from "./Typewriter";
import { textBody } from "../../utils/codeBlockText";
import "highlight.js/styles/github-dark-dimmed.css"; // THIS STYLE

const CodeBlock = () => {
  //IN DEV GOTTA GO INTO NODE_MODULES/HIGHLIGHTJS/STYLES/WHATEVER-STYLE-YOURE-USING
  //AND CHANGE THE BACKGROUND TO MATCH THE PAGES BACKGROUND , #1F2937
  return (
    <div className=" p-6 bg-gray-800 rounded-3xl 2xl:min-w-full ">
      <Highlight className="jsx rounded-3xl ">
        {textBody}
        {/* <Typewriter /> */}
        {/* <Typewriter loop={true} /> */}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
