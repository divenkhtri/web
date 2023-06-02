import React, { useEffect } from "react";
import "../../styles/AboutUs/AboutOurValues.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

import {
  faIndustry,
  faCertificate,
  faHandsHoldingChild,
  faNetworkWired,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
const AboutOurValues = () => {
  useEffect(() => {
    function isScrollIntoView(elem) {
      const rect = elem.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        elem.classList.add("our--value-active");
      } else {
        elem.classList.remove("our--value-active");
      }

      const MainTimelineContainer = document.getElementById(
        "our--value-vertical-scrollable-timeline"
      );
      const MainTimelineContainerBottom =
        MainTimelineContainer.getBoundingClientRect().bottom -
        window.innerHeight * 0.5;
      MainTimelineContainer.querySelector(".our--value-inner").style.height =
        MainTimelineContainerBottom + "px";
    }
    function handleScroll() {
      const timeline = document.querySelectorAll(
        "#our--value-vertical-scrollable-timeline li"
      );
      timeline.forEach(isScrollIntoView);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="our--value-timeline-container-bg">
      <div className="our--value-timeline-container-body-heading">
        <h1>Our Value</h1>
      </div>
        <div className="our--value-timeline-container-body">
          <div className="our--value-timeline-container">
            <ul
              className="our--value-vertical-scrollable-timeline"
              id="our--value-vertical-scrollable-timeline"
            >
              <div className="our--value-list-progress">
                <div className="our--value-inner"></div>
              </div>
              <li className="our--value-litag">
                <h2 className="our--value-timeline-container-h2">
                  Customer Centricity and Empathy
                </h2>
                <p className="our--value-timeline-container-tagp">
                  Delight customers with exceptional experiences. Go the extra
                  mile to exceed their expectations. Create lasting
                  relationships built on trust and satisfaction.
                </p>
                <div className="our--value-icon-holder">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    beat
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li className="our--value-litag">
                <h2 className="our--value-timeline-container-h2">
                  Sustained Innovation and Value
                </h2>
                <p className="our--value-timeline-container-tagp">
                  Experience our innovative services and solutions. Stay ahead
                  of the curve with cutting-edge technologies. Unlock new
                  possibilities and drive business transformation.
                </p>
                <div className="our--value-icon-holder">
                  <FontAwesomeIcon
                    icon={faUsersRays}
                    fade
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li className="our--value-litag">
                <h2 className="our--value-timeline-container-h2">
                  Ownership, Agility and Flexibility
                </h2>
                <p className="our--value-timeline-container-tagp">
                  Serve diverse industry verticals with our comprehensive
                  solutions. Tailor-made services to meet the unique needs of
                  each sector. Unlock growth opportunities and gain a
                  competitive edge in your industry.
                </p>
                <div className="our--value-icon-holder">
                  <FontAwesomeIcon
                    icon={faNetworkWired}
                    beat
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li className="our--value-litag">
                <h2 className="our--value-timeline-container-h2">
                  Inclusion, Diversity and Respect
                </h2>
                <p className="our--value-timeline-container-tagp">
                  Leverage the advantages of our nearshore and offshore centers.
                  Access a global talent pool for cost-effective and scalable
                  solutions. Expand your capabilities and drive efficiency with
                  our strategic location options.
                </p>
                <div className="our--value-icon-holder">
                  <FontAwesomeIcon
                    icon={faHandsHoldingChild}
                    beat
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li className="our--value-litag">
                <h2 className="our--value-timeline-container-h2">
                  Quality That Delights
                </h2>
                <p className="our--value-timeline-container-tagp">
                  Tap into the expertise of our experienced consultants. Get
                  strategic guidance and actionable insights for your business.
                  Accelerate growth and achieve your goals with our trusted
                  advisors.
                </p>
                <div className="our--value-icon-holder">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    beat
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurValues;
