import React, { FC } from "react";

interface CommonTitleProps {
  title: string;
  description: string;
}

const CommonTitle: FC<CommonTitleProps> = ({ title, description }) => {
  return (
    <div>
      <p className="text-[14px] text-left font-bold dark:text-white">{title}</p>
      <h3 className="text-[26px] my-3 text-left dark:text-gray-100">
        {description}
      </h3>
    </div>
  );
};

export default CommonTitle;
