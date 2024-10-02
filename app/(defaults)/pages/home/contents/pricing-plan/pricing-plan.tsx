import React, { FC } from "react";
import SectionTitle from "@/components/section-title/section-title";
import { pricingData } from "./data";
import { PricingCard } from "./component";

const Pricing: FC = () => (
  <div className="container mx-auto relative py-10 px-4">
    <SectionTitle
      title="Simple Plans Pricing"
      paragraph=""
      textAlign="center"
    />

    <div className="">
      <div
        className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        data-aos="fade-up"
      >
        {pricingData.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
      <hr className="h-px my-10 bg-gray-400 border-0" />
    </div>
  </div>
);

export default Pricing;
