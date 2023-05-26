import React, { useState } from "react";
import {
  Author,
  Card,
  CardBody,
  CardMedia,
  CardTitle,
  MetaInfo,
  MetalList,
} from "./solvingComplexCardStyle";

const SolvingComplexCards = ({ data }) => {
  const [isHovered, setHovered] = useState(false);

  const animatCardMedia = isHovered ? { height: "100px" } : { height: "auto" };
  const showMeta = { opacity: 1, height: "auto" };
  const hideMeta = { opacity: 0, height: 0 };
  const animateMeta = isHovered ? hideMeta : showMeta;

  const animateMetaList = isHovered ? showMeta : hideMeta;

  const transition = {
    duration: 0.5,
    type: "spring",
    bounce: 0.2,
    ease: "easeIn",
  };
  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={data?.id}
    >
      <CardMedia animate={animatCardMedia} transition={transition}>
        <img src={data?.projectImage} alt="projectImage" />
      </CardMedia>

      {/* Card Body */}
      <CardBody>
        <CardTitle>
          <h4 >{data?.itemTitle}</h4>
        </CardTitle>
        {!isHovered && (
          <MetaInfo animate={animateMeta}>
            <Author>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </Author>
          </MetaInfo>
        )}

        <MetalList animate={animateMetaList}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae semper. Morbi quis commodo odio aenean sed
          adipiscing diam. 
        </MetalList>
      </CardBody>
    </Card>
  );
};

export default SolvingComplexCards;
