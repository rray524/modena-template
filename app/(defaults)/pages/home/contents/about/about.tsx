import React from "react";

import About from "@/public/images/about-1.jpg";
import Aboutwo from "@/public/images/about-2.jpg";
import Image from "next/image";
import CommonTitle from "./component";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs() {
  return (
    <div className="">
      <div className="max-w-[1320px] md:py-[80] gap-10 p-10 flex  mx-auto md:flex-row flex-col">
        <div className="basis-[49%] px-3 my-5">
          <CommonTitle
            title="ABOUT US"
            description="We are a team of Real Estate agents with more than 60 years in combined experienced, based on the city of San Francisco."
          />
          <hr className="h-[3px] my-8 bg-primary border-0 w-[280px] dark:bg-green-600" />
          <p className="text-lg my-9">
            <Image
              src={About}
              alt="about image"
              className="w-full "
              data-aos="fade-right"
            />
          </p>
        </div>
        <div className="basis-[49%] relative">
          <Image
            src={Aboutwo}
            alt="about image"
            className="w-full h-[655px]"
            data-aos="fade-left"
          />
          <p
            className=" relative top-[-70px]  max-[600px]:top-0 mx-2 text-gray-500 bg-white h-[50px] w-[380px] flex items-center justify-center"
            data-aos="fade-up"
          >
            <FontAwesomeIcon
              icon={faSchool}
              className="text-green-500 w-6 h-6"
            />
            ...Exclusive and luxury properties
          </p>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[1500px]" />
      </div>
    </div>
  );
}

export default AboutUs;
