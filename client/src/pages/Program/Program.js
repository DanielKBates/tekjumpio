import React from "react";
import Container from "../../components/Container";
import ProgramTabs from "./ProgramTabs";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "./Reviews/Reviews";
const Program = () => {
  return (
    <div className="pt-28">
      <Container>
        <AnimatedCard
            inactiveClassName="opacity-0 transition-all duration-1000 ease-in"
            activeClassName="opacity-1 transition-all duration-1000 ease-in"
            threshold={0.50}    
        >
          <div className="flex flex-row space-x-2 mb-20 animate-fadeIn">

          <div className=" flex flex-col rounded rounded-xl p-6 items-center justify-center multiGradient animate-animateGradient  h-100">
              <h1 className="text-3xl font-black">The Goal</h1>
              <ul className="list-disc p-6 font-bold text-xl">
                <li>Impart ungodly amounts of knowledge unto you</li>
                <li>Build a community of developers</li>
                <li>MAKE YOU A BUNCH OF $$$$</li>
              </ul>
            </div>

            <div className=" flex flex-col rounded rounded-xl p-6 items-center justify-center multiGradient animate-animateGradient  h-100">
              <h1 className="text-3xl font-black">The Methodology</h1>
              <ul className="list-disc p-6 font-bold text-xl">
                <li>
                  Iterative and Hands-On: the best way to learn to code is to
                  CODE!
                </li>
                <li>In depth curriculum, </li>
                <li>THREE</li>
              </ul>
            </div>
         

            <div className=" flex flex-col rounded rounded-xl p-6 items-center justify-center multiGradient animate-animateGradient  h-100">
              <h1 className="text-3xl font-black ">The New You</h1>
              <ul className="list-disc p-6 font-bold text-xl">
                <li>If you wanna make a switch</li>
                <li>If you wanna challenge yourself</li>
                <li>If you want to be a wizard, idk</li>
              </ul>
            </div>
          </div>
        </AnimatedCard>
        <div className="animate-fadeIn">
          <ProgramTabs />
        </div>

        <AnimatedCard
          threshold={0.5}
          activeClassName={
            "transform translate-x-0 opacity-100 transition-all duration-1200 ease-in-out"
          }
          inactiveClassName="transition-all duration-1200 ease-in-out transform -translate-x-7 -translate-y-7 opacity-0"
        >
          <div className="w-100 mx-auto flex justify-center">
            <Reviews />
          </div>
        </AnimatedCard>
      </Container>
    </div>
  );
};

export default Program;
