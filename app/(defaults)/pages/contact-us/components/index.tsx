import React from "react";
import AboutSectionText from "../../about-us/contents/about-us/component";
import ContactForm from "./contact-form";
import CommonTitle from "../../home/contents/about/component";
import ContactInfo from "./contact-info";
import AddressInfo from "./address-info";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-[1520px] mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <AboutSectionText
            sectionTitle=""
            mainTitle="We are looking forward to hear from you.
Visit us or send us your message."
          />
          <div className="flex gap-10 mt-8">
            <ContactInfo />
            <AddressInfo />
          </div>
        </div>
        <div>
          <CommonTitle
            title="FORM"
            description="Take a minute to send us your message"
          />
          <hr className="w-16 border-b-2 border-green-500 mb-4" />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
