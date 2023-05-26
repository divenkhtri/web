import React from "react";
import { Container, ProjectContainer } from "./solvingComplexCardStyle";
import SolvingComplexCards from "./SolvingComplexCards";
import { SolvingData } from "./solvingComplexData";

const SolvingComplex = () => {
  return (
    <Container>
      <h2>Solving Industrial Complex Challenge</h2>
      <p>
        In today's hyper-connected world and uncertain times, organizations are{" "}
        <br />
        challenged in more ways than ever.
      </p>
      <ProjectContainer className="project-container">
        {SolvingData?.map((item) => {
          return <SolvingComplexCards data={item} key={item} />;
        })}
      </ProjectContainer>
      <p>
        We help CXO's and enterprises solve their most complex technology and
        business challenges. Our <br /> expertise is in our ability to help you
        sustain, grow and stay ahead of the curve
      </p>
    </Container>
  );
};

export default SolvingComplex;
