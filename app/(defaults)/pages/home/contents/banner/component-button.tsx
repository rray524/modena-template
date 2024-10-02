import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <Link href={"/pages/about-us"}>
      <button className="px-4 py-2 border-primary text-primary font-semibold text-[15px] border rounded-full items-center justify-center hover:bg-primary hover:text-white duration-1000">
        {children}
      </button>
    </Link>
  );
};

export default Button;
