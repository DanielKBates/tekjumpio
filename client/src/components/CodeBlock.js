import React, { useEffect, useState } from "react";
import Prism from "prismjs";

const CodeBlock = (props) => {
  const [calc, setCalc] = useState("");
  useEffect(() => {
    function calcNums() {
      let n = "1";

      for (let i = 2; i <= props.children.match(/\n/g).length + 2; i++) {
        n += "\n" + i.toString();
      }
      setCalc(n);
    }
    Prism.highlightAll();
    return calcNums();
  }, [props.children]);
  return (
    // <div className="relative flex overflow-hidden bg-light-blue-500 w-7/12 h-96 mx-auto shadow-2xl pb-1 my-10">
    //   <div className="absolute inset-0 bg-black bg-opacity-75 select-none pointer-events-none"></div>
    //   <div className="relative h-full w-full">
    //     <div className="relative h-11 flex items-center px-4  border-b-2 border-opacity-10 border-white">
    //       <div className="flex space-x-1.5">
    //         <div className="w-3 h-3 border-2 rounded-full border-red-500 transition-colors duration-300 bg-transparent bg-red-500"></div>
    //         <div className="w-3 h-3 border-2 rounded-full border-yellow-500 transition-colors duration-300 bg-transparent bg-yellow-500"></div>
    //         <div className="w-3 h-3 border-2 rounded-full border-green-400 transition-colors duration-300 bg-transparent bg-green-400"></div>
    //       </div>
    //     </div>
    //     <div className="relative flex flex-col w-full h-full">
    //       <pre
    //         className="flex min-h-full text-sm overflow-auto outline-none"
    //       >
    //         <div
    //           className="bg-black bg-opacity-25 text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none min-h-full"
    //           style={{ width: "50px", height: "fit-content" }}
    //           id="nums"
    //         >
    //           {calc}
    //         </div>
    //         <code
    //           className={
    //             "flex-auto relative block text-white pt-4 pb-4 px-4  " +
    //             props.lang
    //           }
    //         >
    //           {props.children}
    //         </code>
    //       </pre>
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full lg:w-auto self-center pb-8 lg:pb-0 max-w-6xl mx-auto">
      <div
        className="relative overflow-hidden md:rounded-xl shadow-2xl flex bg-light-blue-500"
        style={{ maxHeight: "35rem" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative w-full flex flex-col">
          <div className="flex-none h-11 flex items-center px-4">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 border-2 border-red-500 hover:bg-opacity-0 duration-500 transition-colors rounded-full bg-red-500"></div>
              <div className="w-3 h-3 border-2 border-yellow-400 hover:bg-opacity-0 duration-500 transition-colors rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 border-2 border-green-400 hover:bg-opacity-0 duration-500 transition-colors rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col">
            <div
              className="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"
              style={{ width: "50px" }}
            ></div>
            <div
              className="w-full flex-auto flex min-h-0"
              style={{ opacity: "1" }}
            >
              <div className="w-full flex-auto flex min-h-0 overflow-auto">
                <div className="w-full relative flex-auto">
                  <pre className="flex min-h-full text-xs md:text-sm">
                    <div
                      aria-hidden="true"
                      className="hidden md:block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none"
                      style={{ width: "50px" }}
                      id="nums"
                    >
                      {calc}
                    </div>
                    <code
                      className={
                        "flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto " +
                        props.lang
                      }
                    >
                      {props.children}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
