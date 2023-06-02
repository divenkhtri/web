import React, { useEffect } from "react";
import "../../styles/AboutUs/AboutOurGoalSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import {
  faBuilding,
  faHandshake,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faIndustry, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import AboutExpertiseSection from "./AboutExpertiseSection";
function AboutOurGoalSection() {
  useEffect(() => {
    function isScrollIntoView(elem) {
      const rect = elem.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
      if (isVisible) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    
      const MainTimelineContainer = document.getElementById(
        "vertical-scrollable-timeline"
      );
      const MainTimelineContainerBottom =
        MainTimelineContainer.getBoundingClientRect().bottom -
        window.innerHeight * 0.5;
      MainTimelineContainer.querySelector(".inner").style.height =
        MainTimelineContainerBottom + "px";
    }
    function handleScroll() {
      const timeline = document.querySelectorAll(
        "#vertical-scrollable-timeline li"
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
      <AboutExpertiseSection />
      <div className="timeline-container-bg">
        <div className="timeline-container-body">
          <div className="timeline-container-body-heading">
            <h1>Tech Solutions that Set Us Apart</h1>
          </div>
          <div className="timeline-container">
            <ul
              className="vertical-scrollable-timeline"
              id="vertical-scrollable-timeline"
            >
              <div className="list-progress">
                <div className="inner"></div>
              </div>
              <li>
                <h2 className="timeline-container-h2">Customer Delight</h2>
                <p>
                  Delight customers with exceptional experiences. Go the extra
                  mile to exceed their expectations. Create lasting
                  relationships built on trust and satisfaction.
                </p>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    beat
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li>
                <h2 className="timeline-container-h2">
                  Innovative Services and Solutions
                </h2>
                <p>
                  Experience our innovative services and solutions. Stay ahead
                  of the curve with cutting-edge technologies. Unlock new
                  possibilities and drive business transformation.
                </p>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    fade
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li>
                <h2 className="timeline-container-h2">
                  Various Industry Verticals
                </h2>
                <p>
                  Serve diverse industry verticals with our comprehensive
                  solutions. Tailor-made services to meet the unique needs of
                  each sector. Unlock growth opportunities and gain a
                  competitive edge in your industry.
                </p>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    icon={faIndustry}
                    beat
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li>
                <h2 className="timeline-container-h2">
                  Nearshore and Offshore Centers
                </h2>
                <p>
                  Leverage the advantages of our nearshore and offshore centers.
                  Access a global talent pool for cost-effective and scalable
                  solutions. Expand your capabilities and drive efficiency with
                  our strategic location options.
                </p>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    beat
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li>
                <h2 className="timeline-container-h2">
                  Experienced Consultants
                </h2>
                <p>
                  Tap into the expertise of our experienced consultants. Get
                  strategic guidance and actionable insights for your business.
                  Accelerate growth and achieve your goals with our trusted
                  advisors.
                </p>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    beat
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </li>
              <li>
                <h2 className="timeline-container-h2">
                  Niche Partner Ecosystem
                </h2>
                <p>
                  Discover our Niche Partner Ecosystem: a hub for specialized IT
                  service providers. Tailored solutions, seamless integration,
                  and strategic collaboration await you. Join our vibrant
                  community and unlock the full potential of your business.
                </p>
                <div className="icon-holder">
                  <FontAwesomeIcon
                    icon={faHandshake}
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
}

export default AboutOurGoalSection;
