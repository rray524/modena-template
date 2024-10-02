import CommonBanner from "@/components/banner";
import { Metadata } from "next";
import contactBackgroundImg from "@/public/images/contact-us.jpg";
import ContactSection from "./components";
import Image from "next/image";
import blog_logo from "@/public/images/blog-logo.png";
export const metadata: Metadata = {
  title: "Contact us Page | Modena Template",
};

const ContactPage = () => {
  return (
    <>
      <CommonBanner
        backgroundImage={contactBackgroundImg}
        bannerHeader="CONTACT US"
        bannerDetailsText="GET IN TOUCH WITH US "
        overlayOpacity={0.5}
      />
      <ContactSection />
      <div className="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
        <Image src={blog_logo} alt="blog img" width={40} height={40} />
        <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
      </div>
    </>
  );
};

export default ContactPage;
