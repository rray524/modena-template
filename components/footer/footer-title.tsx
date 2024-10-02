import React, { FC } from "react";

interface FooterTitleProps {
  title: string;
}

const FooterTitle: FC<FooterTitleProps> = ({ title }) => {
  return <h1 className="text-[17px] font-semibold my-5">{title}</h1>;
};

export default FooterTitle;
