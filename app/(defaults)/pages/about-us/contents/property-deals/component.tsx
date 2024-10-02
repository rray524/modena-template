import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface FeatureCardProps {
  src: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  src,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm mx-auto my-6 bg-white border-t p-5 rounded-lg shadow-xl border border-gray-300">
      <Image
        src={src}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg w-full"
      />
      <div className="p-4">
        <h5 className="text-lg font-bold mb-2">{title}</h5>
        <p className="text-gray-500 mb-4">{description}</p>
        <Link href={link}>
          <p className="text-green-500 hover:underline">Learn more &gt;</p>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
