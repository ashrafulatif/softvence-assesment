import React from "react";
import { ChevronsRight } from "lucide-react";

const CustomButton = ({ children, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      style={{ clipPath: "polygon(0 0, 96% 0, 88% 100%, 0% 100%)" }}
      className="bg-primary text-white font-bold text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden rounded-md cursor-pointer focus:outline-none"
    >
      <span className="relative z-10 pr-12">{children}</span>
      <div
        style={{
          clipPath: "polygon(40% 5%, 90% 5%, 60% 95%, 10% 95%)",
          backgroundColor: "white",
        }}
        className="absolute top-0 right-2 h-full w-20 flex items-center justify-center "
      >
        <ChevronsRight className="text-primary" size={24} />
      </div>
    </div>
  );
};

export default CustomButton;
