import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { toast } from "react-toastify"; // Import react-toastify

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleAccountMenu = () => {
    setAccountMenuOpen(!accountMenuOpen);
  };

  const handleLogout = () => {
    // Hapus token dari local storage
    localStorage.removeItem("user");

    // Tampilkan notifikasi "LogOut Success" menggunakan react-toastify
    toast.success("LogOut Success");

    // Navigasikan pengguna ke halaman login atau halaman lain yang sesuai
    navigate("/login"); // Ganti dengan rute yang sesuai
  };

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
          <Link
            to="/"
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            Home
          </Link>
          <Link
            to="/news"
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="newspaper-outline"></ion-icon>
            </span>
            News
          </Link>
          <Link
            to="/help"
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="help-outline"></ion-icon>
            </span>
            Help
          </Link>
          <button
            onClick={toggleAccountMenu}
            className="text-white hover:text-orange-400 hover:underline hover:underline-offset-4"
          >
            <span className="mr-1">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            Account
          </button>
        </div>

        <Link to="/login">
          <button className="bg-orange-500 hover:bg-orange-600 rounded-md text-slate-200 font-semibold w-32 h-10 my-auto mr-5 hidden md:block">
            Log In
          </button>
        </Link>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <ion-icon name={mobileMenuOpen ? "close" : "menu"} size="large" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden text-white p-4 text-center">
          <Link to="/" className="block my-2">
            Home
          </Link>
          <Link to="/news" className="block my-2">
            News
          </Link>
          <Link to="/help" className="block my-2">
            Help
          </Link>
          <button onClick={toggleAccountMenu} className="block my-2 mx-auto">
            Account
          </button>
        </div>
      )}

      {/* Account Menu */}
      {accountMenuOpen && (
        <div className="absolute top-14 right-0 bg-gray-90 shadow-md p-2 backdrop-blur-lg text-slate-300 mr-[110px] mt-48 md:mr-[350px] md:mt-2 w-32 h-24 ">
          <Link
            to="/profile"
            className="block my-2 mx-auto hover:text-orange-400 "
          >
            <ion-icon name="person-outline"></ion-icon> Profile
          </Link>
          <hr />
          <button
            className="block my-2 mx-auto hover:text-orange-400 "
            onClick={handleLogout}
          >
            <ion-icon name="log-out-outline"></ion-icon> Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
