import React from "react";
import LoanCardView from "./LoanCardView";
import { Wrench, Building2, Home } from "lucide-react";

const LoanCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mb-6">
      <div>
        <h2 className="text-4xl text-primary font-bold text-center mb-8 mt-6" data-aos="fade-up">
          LOAN PRODUCTS
        </h2>
      </div>
      <div className="flex gap-6 flex-wrap justify-center items-stretch" data-aos="fade-right">
        <LoanCardView
          icon={<Wrench className="w-12 h-12" />}
          title="Fix and Flip"
          subtitle="Funding For Rehab + Purchase"
          features={[
            "$50,000 up to $3,000,000",
            "Interest Rate 10.5%-12.99%",
            "Origination Fee From 1.5%",
            "Up to 85% of Purchase and 100% of Rehab",
          ]}
          learnMoreLink="#"
          isDark={true}
        />

        <LoanCardView
          icon={<Home className="w-12 h-12 text-green-900" />}
          title="Rental Property"
          subtitle="30 Year DSCR loans in Florida and Texas"
          features={[
            "Up to $1,500,000",
            "Interest Rate 6.75%-8.25%",
            "Origination Fee From 1.5%",
            "Up to 85% of LTV",
          ]}
          learnMoreLink="#"
        />

        <LoanCardView
          icon={<Building2 className="w-12 h-12 text-green-900" />}
          title="Ground Up Construction"
          subtitle="Ground Up Construction loans in Florida and Texas"
          features={[
            "Up to $3,500,000",
            "Interest Rate 11.25%-13.25%",
            "Origination Fee From 1.5%",
            "Up to 80% of LTC",
          ]}
          learnMoreLink="#"
        />
      </div>
    </div>
  );
};

export default LoanCard;
