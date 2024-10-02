import { FC } from "react";
import FooterTitle from "./footer-title";
const contactInfo = [
  { text: "Evergreen 27" },
  { text: "San Francisco, Cal" },
  { text: "800 123-456" },
  { text: "abc@shivay.com" },
];

export const FooterContact: FC = () => (
  <div className="text-white">
    <FooterTitle title="CONTACT" />
    {contactInfo.map((info, index) => (
      <p key={index} className="text-[15px] py-1">
        {info.text}
      </p>
    ))}
  </div>
);
