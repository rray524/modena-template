import React, { FC } from "react";
import Button from "./component-button";

interface BannerTextProps {
  banner_header: string;
  banner_details_text: string;
}

const BannerText: FC<BannerTextProps> = ({
  banner_header,
  banner_details_text,
}) => {
  return (
    <div className="text-center my-5">
      <h1 className="text-[42px] text-center text-white font-semibold leading-tight uppercase">
        {banner_header}
      </h1>
      <p className="font-semibold text-[15px] text-white py-3">
        {banner_details_text}
      </p>
      <Button>Learn more</Button>
    </div>
  );
};

export default BannerText;
