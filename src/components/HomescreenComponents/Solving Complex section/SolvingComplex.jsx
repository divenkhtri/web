import React from "react";

import "../../../styles/SolvingComplex.css";
import imge from "../../../assets/Images/SolvingComplex/digital.webp";
import imge2 from "../../../assets/Images/SolvingComplex/digital.webp";
import imge3 from "../../../assets/Images/SolvingComplex/decision.webp";
import imge4 from "../../../assets/Images/SolvingComplex/growth.webp";

const SolvingComplex = () => {
  return (
    <>
      <div className="abt-heading">
        <h1>Solving Complex Challenges</h1>
        <p>
          In today’s hyper-connected world and uncertain times, organizations
          are challenged in more ways than ever.
        </p>
      </div>
      <div className="snip-container">
        <figure class="snip1527">
          <div class="image">
            <img src={imge} alt="Eliminate Blind Spot" />
          </div>
          <figcaption>
            <h3>
              Eliminate Blind <br /> Spot
            </h3>
            <p>
              Discover new  opportunities for organizations data, operations and
              business
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527">
          <div class="image">
            <img src={imge2} alt="Achieve Digital Transformation" />
          </div>
          <figcaption>
            <h3>Achieve Digital Transformation</h3>
            <p>
              Leverage automation data, digital and cloud to architect
              composable and flexible Information architecture
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527">
          <div class="image">
            <img src={imge3} alt="Accelerate Decision" />
          </div>
          <figcaption>
            <h3>
              Accelerate <br /> Decision
            </h3>
            <p>
              Implement AI and ML for instantaneous decisions based on
              actionable Insights
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure class="snip1527">
          <div class="image">
            <img src={imge4} alt="Drive Growth & ROI" />
          </div>
          <figcaption>
            <h3>
              Drive Growth & <br /> ROI
            </h3>
            <p>
              Drive automation, optimization and re-engineering to drive growth,
              productivity and efficiency
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
      <div className="abt-heading">
        <p className="lower_desc-paddding">
          We help CXO's and enterprises solve their most complex technology and
          business challenges. <br /> Our expertise is in our ability to help
          you sustain, grow and stay ahead of the curve
        </p>
      </div>
    </>
  );
};
export default SolvingComplex;
