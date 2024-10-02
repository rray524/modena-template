import React, { FC } from "react";
import Image from "next/image";
import SectionTitle from "@/components/section-title/section-title";
import { teamMembers } from "./data";

const Team: FC = () => {
  return (
    <div className="container mx-auto relative my-5 ">
      <div className="my-10">
        <SectionTitle
          title="Our Company Team"
          paragraph=""
          textAlign="center"
        />
      </div>
      <div className="">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[90%] mx-auto bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  layout="responsive"
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
                <div
                  className="absolute bottom-0 left-0 w-[300px] my-10 mx-12 bg-white bg-opacity-75 p-4 flex flex-col justify-center items-center"
                  data-aos="fade-up"
                >
                  <h1 className="text-2xl my-2">{member.name}</h1>
                  <div className="flex justify-center">
                    <hr className="h-[3px] bg-green-500 border-0 w-[100px]" />
                  </div>
                  <p className="font-semibold my-3">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
