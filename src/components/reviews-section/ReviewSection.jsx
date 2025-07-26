"use client";

import ReviewCard from "./ReviewCard";
import reviewsData from "../../data/reviews.json";
import CustomButton2 from "../button/CustomButton2";

const ReviewsSection = () => {
  return (
    <div className="relative">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        {/* Title */}
        <div className="pt-16 pb-6 text-center">
          <h2 className="text-4xl font-bold text-primary" data-aos="fade-right">
            RIDGE STREET CLIENT REVIEWS
          </h2>
        </div>

        {/* Reviews Container */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Cards */}
          <div className="flex gap-5 px-16">
            {reviewsData.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                subtitle={review.subtitle}
                review={review.review}
                avatar={review.avatar}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <CustomButton2
            onClick={() => console.log("View All Locations Clicked")}
          >
            Get Approved Online
          </CustomButton2>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
