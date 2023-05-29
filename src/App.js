import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/HomescreenComponents/Navbar/Navbar";
import Homescreen from "./pages/Homescreen.jsx";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import Error from "./pages/Error";
import Blog from "./pages/BlogAndNews/BlogandNews";
import Blogpost from "./pages/BlogAndNews/BlogandNewsPot";
import Footer from "./components/HomescreenComponents/Footer/Footer";
import SuccessStory from "./pages/SuccessStory/SuccessStory";
import SuccessStoryPost from "./pages/SuccessStory/SuccessStoryPost";
import Service from "./pages/Service";
import DataEngineeringAndSolutions from "./pages/Service/DataEngineeringAndSolutions";
import DigitalEngineeringAndTransformation from "./pages/Service/DigitalEngineeringAndTransformation";
import CloudEngineeringAndPlatforms from "./pages/Service/CloudEngineeringPlatforms";
import AdvisoryAndConsulting from "./pages/Service/AdvisoryAndConsulting";
import Industry from "./pages/Industry";
import ScrollToTop from "./components/ScrollToTop";
import BankingInsuranceAndFinancialServices from "./pages/Industry/BankingInsuranceAndFinancialServices";
import HealthcarePharmaAndLifeScience from "./pages/Industry/HealthcarePharmaAndLifeScience";
import TravelTransportationAndHospitality from "./pages/Industry/TravelTransportationAndHospitality";
import RetailAndConsumerGoods from "./pages/Industry/RetailAndConsumerGoods";
import IndustrialGoodsAndManufacturing from "./pages/Industry/IndustrialGoodsAndManufacturing";
import TelecomAndMedia from "./pages/Industry/TelecomAndMedia";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blogpost />} />
        <Route path="*" element={<Error />} />
        <Route path="/success-story" element={<SuccessStory />} />
        <Route path="/success-story/:slug" element={<SuccessStoryPost />} />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Service Page */}
        <Route path="/services" element={<Service />} />
        <Route
          path="/services/data-engineering-and-solutions"
          element={<DataEngineeringAndSolutions />}
        />
        <Route
          path="/services/digital-engineering-and-transformation"
          element={<DigitalEngineeringAndTransformation />}
        />
        <Route
          path="/services/cloud-engineering-and-platforms"
          element={<CloudEngineeringAndPlatforms />}
        />
        <Route
          path="/services/consulting-and-advisory"
          element={<AdvisoryAndConsulting />}
        />

        {/* Industry Page */}
        <Route path="/industry" element={<Industry />} />

        <Route
          path="/industry/banking-insurance-and-financial-institution"
          element={<BankingInsuranceAndFinancialServices />}
        />
        <Route
          path="/industry/healthcare-pharma-and-life-science"
          element={<HealthcarePharmaAndLifeScience />}
        />
        <Route
          path="/industry/travel-transportation-and-hospitality"
          element={<TravelTransportationAndHospitality />}
        />
        <Route
          path="/industry/retail-and-conumer-goods"
          element={<RetailAndConsumerGoods />}
        />
        <Route
          path="/industry/industrial-goods-and-manufacturing"
          element={<IndustrialGoodsAndManufacturing />}
        />
        <Route
          path="/industry/telecommunication-and-media"
          element={<TelecomAndMedia />}
        />
      </Routes>

    <Footer />
    </>
  );
}

export default App;
