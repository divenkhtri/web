import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  color: #000;

  h2 {
    font-weight: 500;
    font-size: 32px;
    text-align: center;
  }

  p {
    margin-top: 30px;
    margin-bottom: 30px;
    margin: 30px 50px;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
  }
  .project-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4rem;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

export const Card = styled(motion.div)`
  height: 400px;
  width: 70%;
  margin: 10px;
  background: #90a4b0;
  border-radius: 20px;
  margin-bottom: 40px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: 33.33%;
  }

  @media screen and (min-width: 993px) and (max-width: 1200px) {
    width: 25%;
  }

  @media screen and (min-width: 1201px) {
    width: 22%;
  }
`;

export const CardMedia = styled(motion.div)`
  margin: 10px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: auto;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all 0.4s ease;
  }

  @media screen and (max-width: 576px) {
    img {
      height: 150px;
    }
  }
`;

export const FeatureTitle = styled.span`
  text-align: center;
  letter-spacing: 1px;
`;

export const Status = styled.span`
  font-size: 14px;
`;

export const CardBody = styled.div`
  padding: 4px 20px 20px 20px;
  color: #fff;
`;

export const CardTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  letter-spacing: 2px;
  margin-bottom: 12px;
  width: 100%;
`;

export const MetaInfo = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: 18px;
  font-weight: 300px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div``;

export const PriceInfo = styled.div`
  max-width: 140px;
`;

export const Price = styled.h5`
  display: flex;
  margin-top: 6px;
`;

export const PriceText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 0.3rem;
`;

export const TagsCta = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tags = styled.div`
  width: fit-content;
  padding: 0 7px;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  background-color: #5142fc;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export const CtaGrp = styled.div`
  display: flex;
`;
export const CtaLink = styled.a`
  width: fit-content;
  padding: 0 6px;
  height: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  background-color: #474757;
  border-radius: 6px;
  letter-spacing: 0.1rem;
  text-transform: uppercas;
  margin-left: 4px;
  transition: background-color 0.25s ease;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;
  color: #fff;
`;

export const MetalList = styled(motion.div)``;

export const MetaListItem = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 14px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #232332;
  }

  & > :last-child {
    font-size: 16px;
    font-weight: 700;
    text-align: right;
  }
`;
