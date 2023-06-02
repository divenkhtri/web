import React from "react";

import AboutUs from "../components/HomescreenComponents/AboutUs";

import SolvingComplex from "../components/HomescreenComponents/Solving Complex section/SolvingComplex";
import HeroSlider from "../components/HeroSlider";
import IndustryCard from "../components/HomescreenComponents/Industry/IndustryCard";
import OurPartners from "../components/HomescreenComponents/Our Partners/OurPartners";
import SuccessStory from "../components/HomescreenComponents/SuccessStory/SuccessStory";

import CardContainer from "../components/Service";

import ContactHeader from "../components/HomescreenComponents/ContactUs/Contact";
import BlogHomeScreen from "../components/HomescreenComponents/NewsAndBlog/BlogHomeScreen";

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
        <BlogHomeScreen />
        <ContactHeader />
      </main>
    </>
  );
};

export default Homescreen;
