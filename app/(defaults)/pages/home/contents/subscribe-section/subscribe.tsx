"use client";

import React, { FC } from "react";
import Image from "next/image";
import BannerImage from "@/public/images/subscribe-banner.jpg";
import Subsc from "@/public/images/subs-logo.png";
import SectionTitle from "@/components/section-title/section-title";
import FormField from "./component";
import { FormProvider, useForm } from "react-hook-form";
import { sendMail } from "./action";
import { useToast } from "@/contexts/toast-context";
interface FormData {
  name: string;
  email: string;
}
const Subscribe: FC = () => {
  const { showToast } = useToast();
  const methods = useForm<FormData>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: FormData) => {
    const templateParams = {
      name: data.name,
      email: data.email,
    };

    try {
      await sendMail(templateParams);
      showToast("Your have been subscribed successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <div className="py-10" id="subscribe">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="basis-full md:basis-1/2 bg-primary px-3 relative">
          <div
            className="flex flex-col items-center md:items-center justify-center min-h-[50px] mt-[120px]"
            data-aos="fade-right"
          >
            <Image
              src={Subsc}
              alt="banner-image"
              width={60}
              height={30}
              className="filter invert brightness-0"
            />
            <SectionTitle
              title="Subscribe to our Newsletter"
              titleClass="!text-[37px] !text-white !font-semibold !text-left"
            />
            <p className="font-semibold text-white text-[15px] py-2 text-left">
              WE HAVE THE RIGHT PROPERTY FOR YOU
            </p>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto md:w-[80%] lg:w-[60%] w-full"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-2 md:px-0">
                  <FormField
                    name="name"
                    type="text"
                    placeholder="Name"
                    rules={{ required: "Name is required" }}
                  />
                  <FormField
                    name="email"
                    type="email"
                    placeholder="Email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Enter valid email format",
                      },
                    }}
                  />
                </div>

                <div className="text-center my-1 md:text-left">
                  <button
                    type="submit"
                    className="btn h-[45px] w-full text-white font-semibold border border-gray-500 bg-black-800 mt-4 md:mt-0 hover:bg-gray-500 hover:text-white duration-1000"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending...." : "Send"}
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <Image
            src={BannerImage}
            alt="subscribe-image"
            layout="responsive"
            width={600}
            height={500}
            className="!w-full !h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
