const textBody = `import React from "react";
import ProgramTabs from "./ProgramTabs";
import AnimatedCard from "../../components/AnimatedCard";
const Program = () => {
  return (
    <div className="pt-28">
      <Container>
        <div className="animate-fadeIn">
          <ProgramTabs />
        </div>
        <AnimatedCard
          threshold={0.5}
          activeClassName="transform translate-x-0 opacity-100 transition-all"
        >
        </AnimatedCard>
      </Container>
    </div>
  );
};

export default Program;`;
const textArray = textBody.split("");

export { textBody };
