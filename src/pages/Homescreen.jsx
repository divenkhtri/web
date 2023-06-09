import React from "react";

// HomeScreen Components //
import HeroSlider from "../components/HeroSlider";
import SolvingComplex from "../components/HomescreenComponents/Solving Complex section/SolvingComplex";
import CardContainer from "../components/Service";
import OurPartners from "../components/HomescreenComponents/Our Partners/OurPartners";
import IndustryCard from "../components/HomescreenComponents/Industry/IndustryCard";
import AboutUs from "../components/HomescreenComponents/AboutUs";
import SuccessStory from "../components/HomescreenComponents/SuccessStory/SuccessStory";
import BlogHomeScreen from "../components/HomescreenComponents/NewsAndBlog/BlogHomeScreen";
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
        <BlogHomeScreen />
        <ContactHeader />
      </main>
    </>
  );
};

export default Homescreen;
