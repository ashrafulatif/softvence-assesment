"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projects.json";
import CustomButton2 from "../button/CustomButton2";

const PastProjectsSection = () => {
  return (
    <div className="bg-primary py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-start m-12">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4" data-aos="fade-right">
            PAST PROJECTS
          </h2>
          <p className="text-sm md:text-lg text-white">
            A Proven Track Record Funding Projects Like These
          </p>
        </div>

        {/* Projects Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors hidden md:block">
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors hidden md:block">
            <ChevronRight size={24} />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-16" data-aos="fade-up">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <CustomButton2 onClick={() => console.log("Get Terms Clicked")}>
          Get Terms From
        </CustomButton2>
      </div>
    </div>
  );
};

export default PastProjectsSection;
