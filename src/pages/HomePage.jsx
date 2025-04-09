import React from "react";
import MainProductSlider from "../components/slider/MainProductSlider";
import BestDealSection from "../sections/BestDealSection";
import TopElectronicSection from "../sections/TopElectronicSection";

const HomePage = () => {
  return (
    <section>
      <MainProductSlider />
      <BestDealSection/>
      <TopElectronicSection/>

    </section>
  );
};

export default HomePage;
