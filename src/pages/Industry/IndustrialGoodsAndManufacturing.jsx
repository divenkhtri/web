import React from 'react'
import IndustrialGoodsHeader from '../../components/IndustryPage/IndustrialGoodsAndManufacturing/IndustrialGoodsHeader'
import IndustrialGoodsMainSection from '../../components/IndustryPage/IndustrialGoodsAndManufacturing/IndustrialGoodsMainSection'
import IndustrialGoodsCoreSolution from '../../components/IndustryPage/IndustrialGoodsAndManufacturing/IndustrialGoodsCoreSolution'
import IndustrialGoodsSuccesStory from '../../components/IndustryPage/IndustrialGoodsAndManufacturing/IndustrialGoodsSuccesStory'
import BankingSuccesStory from '../../components/IndustryPage/BankingInsuranceAndFinancialServices/BankingSuccesStory'
import SuccessStorySection from '../../components/ServicePage/SuccessStorySection'

const IndustrialGoodsAndManufacturing = () => {
  return (
    <>
      <IndustrialGoodsHeader/>
      <IndustrialGoodsMainSection/>
      <IndustrialGoodsCoreSolution/>
      <SuccessStorySection/>
    </>
  )
}

export default IndustrialGoodsAndManufacturing