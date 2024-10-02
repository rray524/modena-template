"use client";

import React, { FC } from "react";
import Image from "next/image";
import Properti from "@/public/images/p-1.jpg";
import PropertiTwo from "@/public/images/p-2.jpg";
import CommonTitle from "../about/component";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Properties: FC = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="max-w-[1320px] md:py-[80px] p-10 flex gap-10 mx-auto md:flex-row flex-col">
        <div className="basis-[49%] relative">
          <Image
            src={PropertiTwo}
            alt="Property image"
            width={600}
            height={700}
            className="w-full h-[700px]"
            data-aos="fade-right"
          />
          <p
            className=" relative top-[-70px] max-[600px]:top-0 mx-2 text-gray-500 bg-white h-[50px] w-[382px] flex items-center justify-center"
            data-aos="fade-up"
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 h-6 w-6"
            />
            ...Exclusive and luxury properties
          </p>
        </div>
        <div className="basis-[49%] px-3">
          <Image
            src={Properti}
            alt="Property two image"
            layout="responsive"
            width={600}
            height={400}
            className="w-full object-cover mb-10"
            data-aos="fade-left"
          />
          <CommonTitle
            title="PROPERTIES"
            description="We have the property you are looking for, just let us know your
            requirements."
          />

          <hr className="h-[3px] my-8 bg-primary border-0 w-[280px] dark:bg-green-600" />
          <p className="text-gray-500 my-2 text-[15px] text-left">
            Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate
            pulvinar eget non neque. Proin feugiat justo vitae euismod
            fringilla.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[1500px]" />
      </div>
    </div>
  );
};

export default Properties;
