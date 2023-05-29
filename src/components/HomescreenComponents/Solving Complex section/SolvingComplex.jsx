import React from "react";

import "../../../styles/SolvingComplex.css";
import imge from "../../../assets/Images/SolvingComplex/growth.jpg";
import imge2 from "../../../assets/Images/SolvingComplex/growth.jpg";
import imge3 from "../../../assets/Images/SolvingComplex/growth.jpg";
import imge4 from "../../../assets/Images/SolvingComplex/growth.jpg";

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
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
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
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
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
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
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
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
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
