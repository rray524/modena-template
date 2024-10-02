import { FC } from "react";
import { PropertyDetails } from "../types/types";
import { PropertyDetailsTable } from "../component";
import PropertyType from "./property-type";

interface ProductDetailsProps {
  city: string;
  title: string;
  description: string;
  property: PropertyDetails;
}

export const ProductDetails: FC<ProductDetailsProps> = ({
  city,
  title,
  description,
  property,
}) => {
  return (
    <div className="md:col-span-2 my-10 text-left flex flex-col px-2">
      <PropertyType
        category={property.category}
        status={property.available_for}
      />
      <div className="my-10">
        <h1 className="text-[15px] font-bold text-left sm:text-center lg:text-left opacity-85 uppercase dark:text-gray-100">
          {city}
        </h1>
        <h1 className="text-[30px] text-left sm:text-center lg:text-left opacity-85 dark:text-gray-200">
          {title}
        </h1>
        <hr className="h-[2px] bg-green-500 border-0 w-[200px] my-4" />
      </div>
      <div className="my-3">
        <span className="text-[22px] font-normal dark:text-gray-400">
          Description
        </span>
        <p className="text-[17px] text-gray-700 dark:text-gray-400 text-left my-3 lg:text-left">
          {description}
        </p>
        <PropertyDetailsTable property={property} />
      </div>
    </div>
  );
};
