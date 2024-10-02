import React, { FC } from "react";
import Image from "next/image";
import bannerlogo from "@/public/images/banner-logo.png";

import BannerText from "./component-banner";

const Banner: FC = () => {
  const bannerText = {
    banner_header: "FIND YOUR NEXT REAL ESTATE PROPERTY",
    banner_details_text: "WE HAVE THE RIGHT PROPERTY FOR YOU",
  };
  return (
    <div className="relative h-[700px] banner-bg bg-no-repeat shadow-insetcustom flex items-center justify-center">
      <div className="text-center container mx-auto">
        <Image
          src={bannerlogo}
          alt="banner-image"
          width={60}
          height={40}
          className="mx-auto "
        />
        <BannerText
          banner_header={bannerText.banner_header}
          banner_details_text={bannerText.banner_details_text}
        />
      </div>
    </div>
  );
};

export default Banner;
