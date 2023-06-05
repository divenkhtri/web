import React from 'react'
import TelecomHeader from '../../components/IndustryPage/TelecomAndMedia/TelecomHeader'
import TelecomMainSection from '../../components/IndustryPage/TelecomAndMedia/TelecomMainSection'
import TelecomCoreSolution from '../../components/IndustryPage/TelecomAndMedia/TelcomCoreSolution'
import TelecomSuccesStory from '../../components/IndustryPage/TelecomAndMedia/TelecomSuccessStory'
import BankingSuccesStory from '../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory'

const TelecomAndMedia = () => {
  return (
   <>
    <TelecomHeader/>
    <TelecomMainSection/>
    <TelecomCoreSolution/>
    <BankingSuccesStory/>
   </>
  )
}

export default TelecomAndMedia