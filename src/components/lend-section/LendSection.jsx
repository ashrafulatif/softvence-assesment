"use client";
import React from "react";
import LendCard from "./LendCard";
import CustomButton2 from "../button/CustomButton2";

const LendSection = () => {
  const lendingData = [
    {
      id: 1,
      state: "Texas",
      image: "/state1.png",
    },
    {
      id: 2,
      state: "Florida",
      image: "/state2.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#165831] to-[#499668] py-12 px-6">
      {/* Heading */}
      <div className="text-start mb-8 ml-6">
        <h2 className="text-3xl font-bold text-white mb-2">Where We Lend</h2>
        <p className=" text-white text-sm mb-3">
          Ridge Street provides hard money loans to real estate investors in 35
          states.
        </p>
        <p className="text-white text-sm mb-3">
          We focus our efforts in <span className="font-bold">Texas</span> and{" "}
          <span className="font-bold">Florida</span>.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center items-center gap-30 mb-12 flex-wrap">
        {lendingData.map((location) => (
          <LendCard
            key={location.id}
            state={location.state}
            image={location.image}
          />
        ))}
      </div>

      {/* Bottom View All Locations Button */}
      <div className="flex justify-center">
        <CustomButton2
          onClick={() => console.log("View All Locations Clicked")}
        >
          View All Locations
        </CustomButton2>
      </div>
    </div>
  );
};

export default LendSection;
