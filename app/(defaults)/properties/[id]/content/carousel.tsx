"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}
export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full overflow-hidden">
      <div className="relative w-full h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image}`}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
              width={1900}
              height={600}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 text-green-500 bg-white rounded-full shadow">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 6 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1L1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 text-green-500 bg-white rounded-full shadow">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 6 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
};
