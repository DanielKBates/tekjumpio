import React from "react";
import Container from "../../components/Container";
import ProgramTabs from "./ProgramTabs";
import AnimatedCard from "../../components/AnimatedCard";
import Reviews from "../../components/Reviews/Reviews";
import "./program.css";
const Program = () => {
  return (
    <div className="pt-24">
   
      <Container>
        <div className="mt-4">
          <div className=" ml-24 w-full h-full hidden sm:flex p-8">
            <div className="card1">
              <Container>
                <div className="grid grid-cols-2">
                  <div class="mt-0 mr-0 mb-0">
                    <img class="flex w-full object-cover h-full mt-4 rounded-sm " src="https://miro.medium.com/max/2600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg" alt="MERN STACK" id="image"></img>
                  </div>
                  <div>
                 
                    <h1 className=" header2 text-white text-6xl text-right font-black mt-4">
                      What We Have To Offer
                    </h1>

                    <p className="text-blue-200  ml-8 mt-8 text-lg">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                     totam rem aperiam,
                     eaque ipsa quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                     totam rem aperiam,
                     eaque ipsa quae ab
                    
                   
                    </p>
                
                  </div>

                </div>

              </Container>

             
            </div>
          </div>
        </div>
      </Container>

      

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