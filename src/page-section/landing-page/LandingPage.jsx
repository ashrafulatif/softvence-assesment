import React from "react";
import GetStarted from "@/components/get-started-section/GetStarted";
import Hero from "@/components/Hero/Hero";
import LendSection from "@/components/lend-section/LendSection";
import PastProjectsSection from "@/components/past-projects/PastProjectsSection";
import LoanCard from "@/components/rental-loan/LoanCard";
import ResourcesSection from "@/components/resources-section/resourcesSection";
import ReviewsSection from "@/components/reviews-section/ReviewSection";
import ServicesSection from "@/components/services/ServivesSection";
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LoanCard />
      <LendSection />
      <ReviewsSection />
      <PastProjectsSection />
      <ServicesSection />
      <ResourcesSection />
      <GetStarted />
    </div>
  );
};

export default LandingPage;
