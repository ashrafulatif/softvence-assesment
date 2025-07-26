import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <nav className="bg-primary text-white p-6 ">
      <div className="max-w-7xl mx-auto ml-6">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h6 className="text-lg font-bold mb-4 text-white">Company</h6>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Fix And Flip Loans
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                DSCR Rental Loans
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Ground Up Construction Loans
              </a>
            </div>

            <h6 className="text-lg font-semibold mt-8 mb-4 text-white">
              Where We Lend
            </h6>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Florida
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Texas
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Georgia
              </a>
            </div>
          </div>

          {/* Top Cities Section */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">
              Top Cities We Lend In
            </h6>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Orlando
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Tampa
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Miami
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Jacksonville
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Houston
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Austin
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Dallas
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                San Antonio
              </a>
            </div>
          </div>

          {/* Top Resources Section */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">
              Top Resources
            </h6>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Loan Calculator
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                What is a Hard Money Loan
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                What is a Hard Money Loan
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                How to find fix and flip deals
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Best Cities for Fix and Flips
              </a>
            </div>

            <h6 className="text-lg font-semibold mt-8 mb-4 text-white">
              Useful Links
            </h6>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors text-sm"
              >
                Terms of Use
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h6>

            <div className="mb-4">
              <p className="mb-1">Email</p>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:loans@ridgestreetcap.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  loans@ridgestreetcap.com
                </a>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-2">Direct/Text</p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:786-304-2751"
                  className="hover:text-gray-300 transition-colors"
                >
                  Phone: 786-304-2751
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="mb-4">
              <div className="bg-white text-primary px-4 py-2 rounded-md inline-block font-extrabold">
                RIDGE <span className="text-secondary">STREET</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
