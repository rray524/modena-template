import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="text-gray-900 mb-6 font-bold uppercase dark:text-gray-400">
        CONTACT US
      </p>
      <p className="text-green-500 ">800 123-456</p>
      <p className="text-green-500">hi@website.com</p>
      <p className="text-gray-600 mb-6  dark:text-gray-500">
        Monday to Friday
        <br />
        9am - 5pm
      </p>
    </div>
  );
};

export default ContactInfo;
