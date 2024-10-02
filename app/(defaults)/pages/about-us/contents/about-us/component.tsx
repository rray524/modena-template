import React from "react";

interface AboutSectionProps {
  sectionTitle: string;
  mainTitle: string;
  descriptions?: string[];
}

const AboutSectionText: React.FC<AboutSectionProps> = ({
  sectionTitle,
  mainTitle,
  descriptions = [],
}) => {
  return (
    <>
      <h2 className="text-sm font-bold text-gray-500 my-8 dark:text-gray-300">
        {sectionTitle}
      </h2>
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-400">
        {mainTitle}
      </h1>
      <hr className="w-16 border-b-2 border-green-500 mb-4" />
      {descriptions.map((description, index) => (
        <p key={index} className="text-gray-600 mb-6 dark:text-gray-500">
          {description}
        </p>
      ))}
    </>
  );
};

export default AboutSectionText;
