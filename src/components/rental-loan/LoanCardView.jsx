import React from "react";
import { CircleCheckBig, Info, ArrowRight } from "lucide-react";

const LoanCardView = ({
  icon,
  title,
  subtitle,
  features = [],
  learnMoreLink = "#",
  buttonText = "GET APPROVED ONLINE",
  isDark = false,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 w-96 shadow-md relative overflow-hidden ${
        isDark ? "bg-green-900 text-white" : "bg-white text-green-900"
      }`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">{icon}</div>

      {/* Title and Subtitle */}
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <p className="text-sm text-center mt-1">{subtitle}</p>

      {/* Features */}
      <ul className="mt-6 flex flex-col gap-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CircleCheckBig className="w-4 h-4 mt-1 me-2 text-green-600 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More */}
      <a
        href={learnMoreLink}
        className={`mt-4 inline-flex items-center gap-1 text-sm underline ${
          isDark ? "text-white" : "text-green-900"
        }`}
      >
        <Info className="w-4 h-4" />
        Learn More
      </a>

      {/* CTA Button */}
      <div className="mt-4">
        <button
          className={`w-full py-2 px-4 rounded-md font-semibold flex items-center justify-center gap-2 shadow-md ${
            isDark
              ? "bg-white text-green-900"
              : "bg-green-900 text-white hover:bg-green-800"
          }`}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Optional skewed green bottom background for light cards */}
      {!isDark && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-green-900 skew-y-[-2deg] translate-y-2 rounded-b-2xl" />
          <div className="absolute top-0 left-0 w-full h-4 bg-green-900 skew-y-[-2deg] -translate-y-2 rounded-t-2xl" />
        </>
      )}
    </div>
  );
};

export default LoanCardView;
