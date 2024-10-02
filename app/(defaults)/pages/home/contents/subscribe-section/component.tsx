import React from "react";
import {
  useFormContext,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  rules?: any;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  placeholder,
  rules,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = (
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  ): string | null => {
    if (!error) return null;
    if (typeof error.message === "string") return error.message;
    return "Invalid input"; // Default message or you can handle complex cases as needed
  };

  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`border border-gray-500 py-1 px-2 h-[40px] w-full ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-red-500">{getErrorMessage(errors[name])}</p>
      )}
    </div>
  );
};

export default FormField;
