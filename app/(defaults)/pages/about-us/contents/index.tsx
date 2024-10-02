"use client";
import React, { useEffect } from "react";
import PropertyDealsAboutPage from "./property-deals";
import AboutSection from "./about-us";
import Subscribe from "../../home/contents/subscribe-section/subscribe";
import AOS from "aos";

const ContentContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <PropertyDealsAboutPage />
      <AboutSection />
      <Subscribe />
    </>
  );
};

export default ContentContainer;
