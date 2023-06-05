import React from 'react'
import RetailHeader from '../../components/IndustryPage/RetailAndConsumerGoods/RetailHeader'
import RetailMainSection from '../../components/IndustryPage/RetailAndConsumerGoods/RetailMainSection'
import RetailCoreSolution from '../../components/IndustryPage/RetailAndConsumerGoods/RetailCoreSolution'
import RetailSuccesStory from '../../components/IndustryPage/RetailAndConsumerGoods/RetailSuccesStory'
import BankingSuccesStory from '../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory'

const RetailAndConsumerGoods = () => {
  return (
    <>
      <RetailHeader/>
      <RetailMainSection/>
      <RetailCoreSolution/>
      <BankingSuccesStory/>
    </>
  )
}

export default RetailAndConsumerGoods