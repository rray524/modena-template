import Image, { StaticImageData } from "next/image";
import React from "react";

interface CommonBannerProps {
  backgroundImage: StaticImageData;
  bannerHeader: string;
  bannerDetailsText: string;
  overlayOpacity?: number;
}

const CommonBanner: React.FC<CommonBannerProps> = ({
  backgroundImage,
  bannerHeader,
  bannerDetailsText,
  overlayOpacity = 0.5,
}) => {
  return (
    <section className="relative w-full h-[500px]">
      <Image
        src={backgroundImage}
        alt="Background"
        quality={100}
        className="absolute w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-black"
        data-testid="overlay"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold mb-4">{bannerHeader}</h1>
        <p className="text-xl mb-6">{bannerDetailsText}</p>
      </div>
    </section>
  );
};

export default CommonBanner;
