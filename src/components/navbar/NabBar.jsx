import React from "react";
import { Menu } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl text-primary">
          RIDGE <span className="text-secondary">STREET</span>
        </a>
      </div>

      {/* Mobile dropdown menu */}
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <Menu className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Fix and Flip</a></li>
            <li><a>Rental Loans</a></li>
            <li><a>Where We Lend</a></li>
            <li><a>About Us</a></li>
            <li><a>Resources</a></li>
            <li>
              <button className="btn btn-primary text-white rounded-lg w-full">
                GET APPROVED ONLINE
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li><a>Fix and Flip</a></li>
          <li><a>Rental Loans</a></li>
          <li><a>Where We Lend</a></li>
          <li><a>About Us</a></li>
          <li><a>Resources</a></li>
          <li>
            <button className="btn btn-primary text-white rounded-lg px-4 py-4">
              GET APPROVED ONLINE
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
