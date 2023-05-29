import React from "react";
import BankingServicesHeader from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingServicesHeader";

import BankingMainSection from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingMainSection";
import BankingCoreSolution from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingCoreSolution";
import BankingSuccesStory from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory";
import RelatedNews from "../../components/IndustryPage/BankingInsuranceAndFinancialServices/RelatedNews";

const BankingInsuranceAndFinancialServices = () => {
  return (
    <>
      <BankingServicesHeader />
      <BankingMainSection/>
      <BankingCoreSolution/>
      <BankingSuccesStory/>
  
    </>
  );
};

export default BankingInsuranceAndFinancialServices;
