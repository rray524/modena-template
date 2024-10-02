import React, { FC } from "react";

interface SectionTitleProps {
  title: string;
  paragraph?: string;
  textAlign?: "left" | "center" | "right";
  titleClass?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  paragraph,
  textAlign = "left",
  titleClass,
}) => {
  return (
    <div className={`text-${textAlign}`}>
      <h1 className={`text-[26px] font-semibold dark:text-white ${titleClass}`}>
        {title}
      </h1>
      {paragraph && (
        <p className="my-2 text-[15px] text-gray-400 dark:text-gray-400">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
