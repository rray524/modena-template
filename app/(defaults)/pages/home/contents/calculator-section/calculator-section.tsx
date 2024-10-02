import React from "react";
import CalculatorCard from "./calculator-card";
import { calculatorData } from "./data";
import SectionTitle from "@/components/section-title/section-title";

const CalculatorSection = () => {
  return (
    <div className="pb-10 md:pb-20">
      <SectionTitle
        title="Real Estate Calculators"
        titleClass="md:text-[36px] text-[23px] font-semibold text-center dark:text-white w-[70%] mx-auto"
      />
      <div className="p-1 flex flex-wrap items-center justify-center">
        {calculatorData.map((item, index) => (
          <CalculatorCard
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorSection;
