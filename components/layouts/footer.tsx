import { FC } from "react";
import Image from "next/image";
import footer_logo from "@/public/images/footer-logo.png";
import FooterProperties from "../footer/footer-properties";
import { FooterContact } from "../footer/footer-contact";
import { FooterMenu } from "../footer/footer-menu";

const socialIcons = [
  { className: "fa-instagram", label: "Instagram" },
  { className: "fa-whatsapp", label: "Whatsapp" },
  { className: "fa-facebook", label: "Facebook" },
  { className: "fa-twitter", label: "Twitter" },
  { className: "fa-youtube", label: "YouTube" },
  { className: "fa-tiktok", label: "TikTok" },
];

const Footer: FC = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-[1320px] flex flex-col mx-auto sm:flex-row">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center md:text-left lg:grid-cols-5 my-10 px-5 gap-6">
          <div className="text-white">
            <Image
              src={footer_logo}
              alt="blog img"
              width={60}
              height={30}
              className="my-6 mx-auto md:mx-0"
              style={{ filter: "invert(1) brightness(0)" }}
            />
            <h1 className="text-[20px] font-semibold">MODENA</h1>
            <p className="text-[15px] my-3">
              Modena is a Real Estate Webflow template that was thought to be
              easy to customize and easy to create your property listings.
            </p>
            <div className="space-x-3 py-3">
              {socialIcons.map((social, index) => (
                <i
                  key={index}
                  className={`text-[15px] fab ${social.className} hover:text-gray-300`}
                  aria-label={social.label}
                ></i>
              ))}
            </div>
          </div>
          <FooterMenu
            title="MENU"
            items={[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/pages/about-us" },
              { name: "Contact Us", link: "/pages/contact-us" },
            ]}
          />
          <FooterMenu
            title="SOCIAL"
            items={[
              { name: "Facebook", link: "https://facebook.com" },
              { name: "Twitter", link: "https://twitter.com" },
              { name: "Instagram", link: "https://instagram.com" },
              { name: "LinkedIn", link: "https://linkedin.com" },
            ]}
          />
          <FooterContact />
          <FooterProperties />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1500px]" />
      </div>
      <p className="text-[16px] p-5 md:mx-20 text-white underline text-center">
        Buy Template | Image show | Made By Simbanic | Visit My Templates |
        Powered By Simbanic
      </p>
    </div>
  );
};

export default Footer;
