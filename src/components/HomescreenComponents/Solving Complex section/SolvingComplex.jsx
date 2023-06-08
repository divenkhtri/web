import React from "react";

import "../../../styles/SolvingComplex.css";
import imge from "../../../assets/Images/SolvingComplex/eliinateBlindSPot.jpg";
import imge2 from "../../../assets/Images/SolvingComplex/digital.jpg";
import imge3 from "../../../assets/Images/SolvingComplex/decision.jpg";
import imge4 from "../../../assets/Images/SolvingComplex/growth.jpg";

const SolvingComplex = () => {
  const cards = [
    {
      image: imge,
      title: "Eliminate Blind Spots",
      description:
        "Discover new opportunities for organizations data, operations, and business",
    },
    {
      image: imge2,
      title: "Achieve Digital Transformation",
      description:
        "Leverage automation data, digital and cloud to architect composable and flexible Information architecture",
    },
    {
      image: imge3,
      title: "Accelerate Decision",
      description:
        "Implement AI and ML for instantaneous decisions based on actionable Insights",
    },
    {
      image: imge4,
      title: "Drive Growth & ROI",
      description:
        "Drive automation, optimization, and re-engineering to drive growth, productivity, and efficiency",
    },
  ];

  return (
    <>
      <div className="abt-heading">
        <h1>Solving Complex Challenges</h1>
        <p>
          In today’s hyper-connected world and uncertain times, organizations
          are challenged in more ways than ever.
        </p>
      </div>
      <div className="solving-card-layout-body">
        <div className="solving-card-layout">
          {cards.map((card, index) => (
            <div className="solving-card" key={index}>
              <img src={card.image} alt="Card" className="solving-card-image" />
              <h3 className="solving-card-title">{card.title}</h3>
              <p className="solving-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="abt-heading">
        <p className="lower_desc-padding">
          We help CXO's and enterprises solve their most complex technology and
          business challenges. <br /> Our expertise is in our ability to help
          you sustain, grow, and stay ahead of the curve
        </p>
      </div>
    </>
  );
};

export default SolvingComplex;
