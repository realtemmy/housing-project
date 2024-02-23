import React, { useState } from "react";
import { Button, Rating } from "@material-tailwind/react";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400/FF5733/FFFFFF",
    "https://via.placeholder.com/600x400/33FF57/FFFFFF",
    "https://via.placeholder.com/600x400/5733FF/FFFFFF",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full rounded-lg my-2 py-1 bg-blue-gray-50">
      <div className="overflow-hidden p-2">
        {/* ratings */}
        <div className="absolute left-5 top-5 bg-gray-50 px-4 py-1 rounded-full">
          <i className="fa-solid fa-star"></i>
        </div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full rounded-lg"
        />
      </div>
      <section className="grid grid-cols-3 mx-2 pb-2">
        <div className="col-span-2 border-2">
          <p className="font-semibold text-gray-800 truncate">
            Luxury beachfront villjebrbuig yubcycu gyuecuyba
          </p>
          <div className="flex text-sm gap-1 truncate capitalize">
            {["hostel", "apartment", "duplex", "bungalow", "another"]
              .filter((_, idx) => idx < 2)
              .map((li, idx) => (
                <div className="flex items-baseline" key={idx}>
                  <span>&bull;</span>
                  <span className="pt-1">{li}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="row-span-1">
          <Button color="red" size="sm">
            Contact
          </Button>
          <div className="text-sm capitalize">
            <span>&bull;</span> for rent{" "}
            <i className="fa-solid fa-house text-blue-gray-400"></i>
          </div>
        </div>
      </section>
      <div className="absolute top-24 left-0 right-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="prev-btn text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
