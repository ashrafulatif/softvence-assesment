"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "../button/CustomButton";

const GetStarted = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Blurred bg image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Background"
          fill
          className="object-cover blur-sm opacity-20"
          priority
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, white 20%, rgba(255,255,255,0) 50%)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center justify-between h-full max-w-7xl mx-auto px-8">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-primary">
              Ready To Get <br />
              Started
            </span>
          </h1>

          <p className="text-md lg:text-1xl text-[#343434] mb-8 leading-relaxed">
            With Ridge Street, obtaining a private mortgage loan is easier than
            you think! You can get pre-approved online and a Term Sheet that
            meet's your needs will be sent to you within the hour.
          </p>

          {/* Custom Button */}
          <div className="relative inline-block">
            <CustomButton onClick={() => alert("Button Clicked!")}>
              GET PRE-APPROVED ONLINE
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
