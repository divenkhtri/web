import React from "react";
import CloudHeader from "../../components/ServicePage/CloudEngineering/CloudHeader";
import CloudMainSection from "../../components/ServicePage/CloudEngineering/CloudMainSection";
import SuccessStorySection from "../../components/ServicePage/SuccessStorySection";
import BankingSuccesStory from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory";

const CloudEngineeringAndPlatforms = () => {
  return (
    <>
      <CloudHeader/>
      <CloudMainSection/>
      <BankingSuccesStory/>  
    </>
  );
};

export default CloudEngineeringAndPlatforms;
