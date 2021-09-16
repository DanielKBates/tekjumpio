import React from "react";
import Container from "../../components/Container";
import ProgramTabs from "./ProgramTabs";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "./Reviews/Reviews";
const Program = () => {
  return (
    <div className="pt-28">
      <Container>
       
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
