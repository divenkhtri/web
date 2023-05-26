import React from "react";

import AboutUs from "../components/HomescreenComponents/AboutUs";

import SolvingComplex from "../components/HomescreenComponents/Solving Complex section/SolvingComplex";
import HeroSlider from "../components/HeroSlider";
import IndustryCard from "../components/HomescreenComponents/Industry/IndustryCard";
import OurPartners from "../components/HomescreenComponents/Our Partners/OurPartners";
import SuccessStory from "../components/HomescreenComponents/SuccessStory/SuccessStory";
import NewsAndBlog from "../components/HomescreenComponents/NewsAndBlog/NewAndBlog";

import CardContainer from "../components/HomescreenComponents/Services/Service";

import ContactHeader from "../components/HomescreenComponents/ContactUs/Contact";

const Homescreen = () => {
  return (
    <>
      <main>
        <HeroSlider />
        <SolvingComplex />
        <CardContainer />
        <OurPartners />
        <IndustryCard />
        <AboutUs />
        <SuccessStory />
        <NewsAndBlog />
        <ContactHeader />
      </main>
    </>
  );
};

export default Homescreen;
