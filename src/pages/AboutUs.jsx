import React from "react";
import AboutHeader from "../components/AboutUsPage/AboutHeader";

import AboutCompanyOverview from "../components/AboutUsPage/AboutCompanyOverview";

import AboutServicesSection from "../components/AboutUsPage/AboutServicesection";

import AboutOurGoalSection from "../components/AboutUsPage/AboutOurGoalSection";
import AboutOurValues from "../components/AboutUsPage/AboutOurValues";
import AboutTestimonial from "../components/AboutUsPage/AboutTestimonial";
import SuccessStorySection from "../components/ServicePage/SuccessStorySection";

const AboutUs = () => {
  return (
    <>
      <AboutHeader />
      <AboutCompanyOverview />
      <AboutOurGoalSection />
      <AboutServicesSection />
      <AboutOurValues />
      <SuccessStorySection/>
 
    </>
  );
};

export default AboutUs;
