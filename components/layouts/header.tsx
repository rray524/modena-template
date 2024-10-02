"use client";
import { useEffect, FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@/contexts/theme-context";
import ToggleButton from "../toggle-button/button-toggle";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsChecked(!isChecked);
    localStorage.setItem("isChecked", JSON.stringify(!isChecked));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const storedIsChecked = localStorage.getItem("isChecked");
    if (storedIsChecked !== null) {
      setIsChecked(JSON.parse(storedIsChecked));
    }
  }, []);

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    hamburger?.addEventListener("click", toggleMenu);

    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header>
      <nav className="flex flex-wrap justify-between items-center py-5 px-5 lg:px-20 fixed top-0 w-full z-50 bg-gray-200 dark:bg-[#282c38] dark:border-b dark:border-white">
        <Link href={"/"}>
          <Image
            src={logo}
            width={200}
            height={54}
            alt="header-image"
            className="dark:bg-white w-[150px] lg:w-[170px]"
          />
        </Link>
        <div className="flex lg:hidden">
          <div className="lg:hidden sm:gap-4 w-[4rem] justify-between items-center my-4 flex">
            <ToggleButton isChecked={isChecked} handleChange={handleChange} />
          </div>
          <button id="hamburger" aria-label="Toggle Menu">
            <Image
              className={`toggle block dark:bg-white ${
                isMenuOpen ? "hidden" : "block"
              }`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width={40}
              height={40}
              alt="menu icon"
            />
            <Image
              className={`toggle ${
                isMenuOpen ? "block" : "hidden"
              } dark:bg-white`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width={40}
              height={40}
              alt="close icon"
              onClick={toggleMenu}
            />
          </button>
        </div>
        <div
          className={`toggle w-full lg:w-auto lg:flex flex-col lg:flex-row gap-4 lg:gap-8 items-center font-bold mt-5 lg:mt-0 lg:border-none ${
            isMenuOpen ? "flex animate-slideDown" : "hidden lg:flex"
          } ${!isMenuOpen && "animate-slideUp lg:animate-none"}`}
        >
          <Link href={"/"} onClick={closeMenu}>
            <p className="block lg:inline-block lg:text-[16px] md:text-[18px] font-bold px-2 lg:px-0 py-3 lg:py-0 dark:text-gray-100 uppercase">
              HOME
            </p>
          </Link>
          <Link href={"/pages/about-us"} onClick={closeMenu}>
            <p className="block lg:inline-block lg:text-[16px] md:text-[18px] font-bold px-2 lg:px-0 py-3 lg:py-0 dark:text-gray-100 uppercase">
              ABOUT US
            </p>
          </Link>
          <Link href={"/pages/contact-us"} onClick={closeMenu}>
            <p className="block lg:inline-block lg:text-[16px] md:text-[18px] font-bold px-2 lg:px-0 py-3 lg:py-0 dark:text-gray-100 uppercase">
              Contact US
            </p>
          </Link>
          <div className="lg:flex sm:gap-4  w-[4rem] justify-between items-center my-4 hidden">
            <ToggleButton isChecked={isChecked} handleChange={handleChange} />
          </div>
          <Link
            href="https://wa.me/899504629"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="flex gap-2 items-center px-2 lg:px-3 py-3 lg:text-[16px] md:text-[12px] font-bold">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green-500 w-6 h-6"
              />
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
