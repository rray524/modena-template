import SectionTitle from "@/components/section-title/section-title";
import React from "react";
import FeatureCard from "./component";
import { features } from "./data";

const PropertyDealsAboutPage = () => {
  return (
    <section className="max-w-[1320px] md:py-[80px] mx-auto py-10">
      <SectionTitle
        title="Best Property Deals"
        paragraph=""
        titleClass="text-center"
      />
      <div className="flex flex-wrap justify-center -mx-4">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyDealsAboutPage;
