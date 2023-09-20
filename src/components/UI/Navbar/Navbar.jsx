import React, { useState } from "react";
import logo from "../../../assets/logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 fixed w-screen z-50">
      <div className="flex p-5 justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={logo} alt="" className="w-24 h-16" />
          <h2 className="text-3xl font-bold text-slate-300">
            <span className="text-orange-400 font-serif">BGZ'</span>News
          </h2>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="# "
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            Home
          </a>
          <a
            href="# "
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="newspaper-outline"></ion-icon>
            </span>
            News
          </a>
          <a
            href="# "
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="help-outline"></ion-icon>
            </span>
            Help
          </a>
          <a
            href="# "
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            Account
          </a>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 rounded-md text-slate-200 font-semibold w-32 h-10 my-auto mr-5 hidden md:block">
          Sign In
        </button>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <ion-icon name={mobileMenuOpen ? "close" : "menu"} size="large" />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden text-white p-4">
          <a
            href="# "
            className="block my-2"
          >
            Home
          </a>
          <a
            href="# "
            className="block my-2"
          >
            News
          </a>
          <a
            href="# "
            className="block my-2"
          >
            Help
          </a>
          <a
            href="# "
            className="block my-2"
          >
            Account
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 rounded-md text-slate-200 font-semibold w-full h-10 my-4">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
