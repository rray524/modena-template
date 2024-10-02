"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import FormField from "./input-field";
import { sendMail } from "../action";
import { useToast } from "@/contexts/toast-context";

type FormValues = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const methods = useForm<FormValues>();

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.mobile,
      email: data.email,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message has been sent successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            name="name"
            type="text"
            placeholder="Name"
            validationRules={{ required: "Name is required" }}
          />
          <FormField
            name="email"
            type="email"
            placeholder="Email"
            validationRules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
          <FormField
            name="mobile"
            type="text"
            placeholder="Phone Number"
            validationRules={{
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be 10 digits & neumaric",
              },
            }}
            maxLength={10}
          />
          <FormField
            name="company"
            type="text"
            placeholder="Company"
            validationRules={{ required: "Company is required" }}
          />
        </div>
        <FormField
          name="message"
          type="textarea"
          placeholder="Your Message"
          validationRules={{ required: "Message is required" }}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
