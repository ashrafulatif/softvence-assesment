"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "../button/CustomButton";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Blurred bg image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Background"
          fill
          className="object-cover blur-sm opacity-60"
          priority
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, white 20%, rgba(255,255,255,0) 50%)",
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center justify-between h-full max-w-7xl mx-auto px-8">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl" data-aos="fade-up">
          <h1 className="text-5xl lg:text-5xl font-extrabold mb-3 leading-tight">
            <span className="text-primary">FLORIDA AND TEXAS</span>
            <br />
            <span className="text-primary">HARD MONEY LENDERS</span>
          </h1>

          <p className="text-xl lg:text-1xl text-gray-800 font-semibold mb-8 leading-relaxed">
            Fast Closing Fix and Flip and Rental Loans
            <br />
            For Your Investment Properties.
          </p>

          {/* Custom Button */}
          <div className="relative inline-block">
            <CustomButton onClick={() => alert("Button Clicked!")}>
              GET APPROVED ONLINE
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
