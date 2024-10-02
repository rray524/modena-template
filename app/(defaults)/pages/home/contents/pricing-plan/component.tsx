import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface PricingPlan {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
}
export const PricingCard: FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className="max-w-sm mx-auto my-6 bg-white border-t p-5 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 flex flex-col justify-between">
    <div>
      <Link href="#">
        <h5 className="my-2 text-[13px] mx-4 text-left font-bold tracking-tight text-gray-900 dark:text-white">
          {plan.title}
        </h5>
      </Link>
      <p className="mb-3 mx-4 text-[40px] text-left font-bold text-primary dark:text-gray-400">
        {plan.price}
      </p>
      <p className="mb-3 text-lg font-normal mx-4 text-gray-500 dark:text-gray-400">
        {plan.description}
      </p>
      {plan.features.map((feature, index) => (
        <div key={index} className="px-3 pt-4 pb-2 border-t border-gray-300">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 w-6 h-6"
            />
            <div className="">
              <h1 className="text-left text-[19px] text-gray-750 flex gap-1">
                {feature}
              </h1>
              <p className="text-left text-[14px] text-gray-500 ">
                Enjoy an all day solar heated pool.
              </p>
            </div>
          </div>

          {index < plan.features.length - 1 && (
            <hr className="h-px my-3 bg-gray-400 border-0" />
          )}
        </div>
      ))}
    </div>
    <div className="px-3 pt-4 pb-2 border-t mx-auto border-gray-300 w-full">
      <button className="font-semibold text-primary h-12 w-full border border-primary hover:bg-primary hover:text-white duration-1000">
        Choose this Plan
      </button>
    </div>
  </div>
);
