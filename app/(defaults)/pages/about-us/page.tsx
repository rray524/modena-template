import React from "react";
import backgroundImage from "@/public/images/banner-img.jpg";
import CommonBanner from "@/components/banner";
import Image from "next/image";
import blog_logo from "@/public/images/blog-logo.png";
import { Metadata } from "next";
import ContentContainer from "./contents";

export const metadata: Metadata = {
  title: "About us Page | Modena Template",
};

const AboutPage = () => {
  return (
    <>
      <CommonBanner
        backgroundImage={backgroundImage}
        bannerHeader="ABOUT US"
        bannerDetailsText="STAY TUNED WITH OUR LATEST NEWS"
        overlayOpacity={0.5}
      />
      <ContentContainer />
      <div className="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
        <Image src={blog_logo} alt="blog img" width={40} height={40} />
        <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
      </div>
    </>
  );
};

export default AboutPage;
