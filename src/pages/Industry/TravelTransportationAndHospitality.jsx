import React from "react";
import TravelHeader from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelHeader";
import TravelMainSection from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelMainSection";
import TravelCoreSolution from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelCoreSolution";
import TravelSuccesStory from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelSuccesStory";
import BankingSuccesStory from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory";
import SuccessStorySection from "../../components/ServicePage/SuccessStorySection";

const TravelTransportationAndHospitality = () => {
  return (
    <>
      <TravelHeader />
      <TravelMainSection />
      <TravelCoreSolution />
      <SuccessStorySection />
    </>
  );
};

export default TravelTransportationAndHospitality;
