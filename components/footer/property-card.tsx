import { formatPrice, truncateText } from "@/helpers/utils";
import Image from "next/image";
import { FC } from "react";

export const PropertyCard: FC<{
  src: string;
  title: string;
  price: number;
}> = ({ src, title, price }) => (
  <div className="w-full lg:max-w-[250px] lg:flex shadow-md rounded-lg overflow-hidden">
    <Image
      src={src}
      alt={title}
      width={560}
      height={560}
      className="h-48 w-full lg:h-32 lg:w-20 sm:h-[100px] object-cover hover:scale-110 duration-1000"
    />
    <div className="p-4 flex flex-col justify-between leading-normal">
      <p className="text-white font-bold text-left">
        {truncateText(title, 15)}
      </p>
      <div className="text-white text-left text-[18px] mb-2">
        {`$${formatPrice(price)}`}
      </div>
    </div>
  </div>
);
