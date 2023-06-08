import React from 'react'
import TelecomHeader from '../../components/IndustryPage/TelecomAndMedia/TelecomHeader'
import TelecomMainSection from '../../components/IndustryPage/TelecomAndMedia/TelecomMainSection'
import TelecomCoreSolution from '../../components/IndustryPage/TelecomAndMedia/TelcomCoreSolution'
import TelecomSuccesStory from '../../components/IndustryPage/TelecomAndMedia/TelecomSuccessStory'
import BankingSuccesStory from '../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory'
import SuccessStorySection from '../../components/ServicePage/SuccessStorySection'

const TelecomAndMedia = () => {
  return (
   <>
    <TelecomHeader/>
    <TelecomMainSection/>
    <TelecomCoreSolution/>
    <SuccessStorySection/>
   </>
  )
}

export default TelecomAndMedia