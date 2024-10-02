"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Banner from "./contents/banner/banner";
import NewPropertyLists from "./contents/new-property-list/new-property-list";
import AboutUs from "./contents/about/about";
import Carousal from "./contents/carousel-slider/carousel-slider";
import Properties from "./contents/properties-section/properties";
import Subscribe from "./contents/subscribe-section/subscribe";
import Team from "./contents/team-section/team";
import SoldPropertyDeals from "./contents/sold-property-deals/sold-property-deals";
import DataInfoComponent from "./contents/statistic-info/info-component";
import Pricing from "./contents/pricing-plan/pricing-plan";
import Testimonials from "./contents/testimonial-section/tesimonial";
import ImgBanner from "./contents/image-banner/image-banner";
import Blog from "./contents/blog/blog";
import CalculatorSection from "./contents/calculator-section/calculator-section";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
      <Banner />
      <NewPropertyLists />
      <AboutUs />
      <Carousal />
      <Properties />
      <Subscribe />
      <Team />
      <SoldPropertyDeals />
      <DataInfoComponent />
      <Pricing />
      <Testimonials />
      <ImgBanner />
      <CalculatorSection />
      <Blog />
    </div>
  );
};

export default HomePage;
