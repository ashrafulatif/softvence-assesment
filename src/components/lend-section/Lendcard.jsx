import React from "react";

const LendCard = ({ state, image, buttonText = "VIEW ALL LOCATIONS" }) => {
  return (
    <div
      className="relative w-70 h-90  overflow-hidden shadow-lg"
      data-aos="fade-up"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${state} lending locations`}
          className="w-full h-full"
        />
        {/* Green overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#60E697] to-[#000000] opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center">
        <h2 className="text-white text-4xl font-bold mb-4">{state}</h2>
        <p className="text-white text-sm mb-8 opacity-90">
          Hard Money Loans | DSCR Loans
        </p>
        <button className="border-2 border-white text-white px-6 py-2 rounded-full font-normal text-sm  hover:bg-white hover:text-green-800 transition-all duration-300 uppercase">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LendCard;
