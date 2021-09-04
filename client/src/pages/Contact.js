import React, { useEffect, useState } from "react";
const Contact = () => {
  const [frame, setFrame] = useState(0);
  const [calc, setCalc] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((frame) => (frame < 25 ? frame + 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    function calcNums() {
      let n = "1";

      for (let i = 2; i <= 25; i++) {
        n += "\n" + i.toString();
      }
      setCalc(n)
    }
    return calcNums()
  }, []);
  return (
    <div>
      <div className="pt-24">
        <h1 className="text-white text-8xl font-semibold text-center">
          Tailwind Test <br />
          {frame}
        </h1>
        <div className="relative my-10 bg-light-blue-500 rounded-xl w-8/12 mx-auto overflow-hidden shadow-2xl h-96">
          <div className="absolute inset-0 bg-black bg-opacity-75 select-none pointer-events-none"></div>
          <div className="relative h-full">
            <div className="relative flex-none h-11 flex items-center px-4  border-b-2 border-opacity-10 border-white">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 border-2 rounded-full border-red-500 transition-colors duration-300 bg-transparent bg-red-500"></div>
                <div className="w-3 h-3 border-2 rounded-full border-yellow-500 transition-colors duration-300 bg-transparent bg-yellow-500"></div>
                <div className="w-3 h-3 border-2 rounded-full border-green-400 transition-colors duration-300 bg-transparent bg-green-400"></div>
              </div>
            </div>
            <div className="relative flex flex-col w-full h-full">
              <pre className="flex min-h-full text-sm overflow-auto">
                <div
                  className="bg-black bg-opacity-25 text-white text-opacity-50 flex-none py-4 pr-4 pb-14 text-right select-none min-h-full"
                  style={{ width: "50px", height: "fit-content" }}
                  id="nums"
                >{calc}</div>
                <code
                  className="flex-auto relative block text-white pt-4 pb-4 px-4"
                  id="preform"
                ></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
