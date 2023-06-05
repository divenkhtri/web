import React from "react";
import TravelHeader from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelHeader";
import TravelMainSection from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelMainSection";
import TravelCoreSolution from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelCoreSolution";
import TravelSuccesStory from "../../components/IndustryPage/TravelTransportationAndHospitality/TravelSuccesStory";
import BankingSuccesStory from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory";

const TravelTransportationAndHospitality = () => {
  return (
    <>
      <TravelHeader />
      <TravelMainSection />
      <TravelCoreSolution />
      <BankingSuccesStory />
    </>
  );
};

export default TravelTransportationAndHospitality;
