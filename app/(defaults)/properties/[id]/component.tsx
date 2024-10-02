import Link from "next/link";

import React from "react";
import { PropertyDetails } from "./types/types";
import { tableSections } from "./data/property-table-details-data";

interface PropertyDetailsTableProps {
  property: PropertyDetails;
}

export const ContactCard = () => {
  return (
    <div className="bg-white rounded-md border border-gray-300 dark:border-gray-700 h-[220px] w-full sm:w-[320px]">
      <div className="h-[30px] overflow-hidden rounded-t-lg"></div>
      <Link href={"/pages/contact-us"}>
        <h5 className="my-2 text-[14px] mx-4 font-bold tracking-tight text-gray-900 dark:text-gray-600 text-left uppercase">
          CONTACT US
        </h5>
      </Link>
      <p className="font-normal mx-4 text-[14px] text-green-500 dark:text-gray-400 text-left">
        800 123-456
      </p>
      <p className="font-normal mx-4 text-[14px] text-green-500 dark:text-gray-400 text-left">
        Rodeo Drive, 325.
      </p>
      <p className="font-normal mx-4 text-[14px] text-gray-500 dark:text-gray-400 text-left">
        Monday to Friday
      </p>
      <p className="mb-3 font-normal mx-4 text-[14px] text-gray-500 dark:text-gray-400 text-left">
        9am - 5pm
      </p>
      <Link href={"/pages/contact-us"}>
        <button className="bg-green-500 text-white p-3 text-center w-full">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export const PropertyDetailsTable: React.FC<PropertyDetailsTableProps> = ({
  property,
}) => {
  return (
    <div className="overflow-x-auto max-h-[500px] scrollable-container my-8">
      <table className="relative min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="sticky top-0">
          <tr>
            <th className="py-3 px-6 bg-green-500 dark:bg-black text-left text-sm font-medium text-white uppercase tracking-wider">
              Feature
            </th>
            <th className="py-3 px-6 bg-green-500 dark:bg-black text-left text-sm font-medium text-white uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {tableSections.map((section, sectionIndex) =>
            section.fields.map((field, fieldIndex) => (
              <tr
                key={`${sectionIndex}-${fieldIndex}`}
                className="hover:bg-gray-100"
              >
                <td className="py-4 px-6 border-b border-gray-200">
                  {field.label}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {field.value(property)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
