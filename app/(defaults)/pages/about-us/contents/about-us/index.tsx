import React from "react";
import Image from "next/image";
import imageSrc from "@/public/images/about-us-page.jpg";
import singnature from "@/public/images/signature.png";
import AboutSectionText from "./component";
import { descriptions } from "./data";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="max-w-[1320px] md:py-[20px] mx-auto py-4 flex flex-wrap justify-between items-center"
    >
      <div className="w-full md:w-1/2 px-4">
        <div className="text-left">
          <AboutSectionText
            sectionTitle="ABOUT US"
            mainTitle="We are a Real Estate Agency with a strong vision on giving an amazing customer service"
            descriptions={descriptions}
          />
          <div className="flex gap-4 flex-col mb-6">
            <Image
              src={singnature}
              alt="Signature"
              className="mr-4 h-10"
              height={100}
              width={100}
            />
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-gray-500">— John Doe, CEO of Modena</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <div className="relative w-full">
          <Image
            src={imageSrc}
            alt="About Us Image"
            className="rounded-lg w-full md:w-[500px]"
            height={400}
            width={500}
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
