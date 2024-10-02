import React from "react";

const AddressInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-900 mb-6 font-bold uppercase dark:text-gray-400">
        ADDRESS
      </p>
      <address className="text-gray-600 mb-4 dark:text-gray-500">
        Evergreen 27
        <br />
        San Francisco, Cal
        <br />
        USA
        <br />
        9410
      </address>
    </div>
  );
};

export default AddressInfo;
