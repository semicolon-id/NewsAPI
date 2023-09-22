import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  // Check if the user is authenticated (you can use your own logic)
  const isAuthenticated = localStorage.getItem("user"); // Check if your token is present in local storage

  // Initialize useNavigate to navigate programmatically
  const navigate = useNavigate();

  // Function to handle card click
  const handleCardClick = () => {
    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto md:px-3 font-sans text-gray-200">
      <section className="mb-6 md:mb-5">
        <div className="">
          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg hover:scale-110 transition-transform group cursor-pointer"
            onClick={handleCardClick} // Handle card click
          >
            <img
              src={props.poster}
              alt={props.poster}
              className="w-full align-middle transition duration-300 ease-linear h-64"
            />
            {isAuthenticated ? (
              // Render the link when the user is authenticated
              <a href={props.link} className="absolute inset-0 flex justify-start items-end bg-[hsla(0,0%,0%,0.4)] bg-fixed hover:bg-[hsla(0,0%,99%,0.15)] transition-bg duration-300 ease-in-out">
                <div className="m-1 md:m-6 ">
                  <h5 className="mb-3 text-md font-bold text-left">
                    {props.judul}
                  </h5>
                  <div className="flex md:justify-between  w-80 text-sm">
                    <div className="mt-1 text-orange-400">
                      <p>{props.tipe} </p>
                    </div>
                    <div className="mt-1 ml-28 md:ml-0">
                      <p>{props.waktu}</p>
                    </div>
                  </div>
                  <div className="border-t pt-2 mt-2 hidden group-hover:block transition-bg  ease-in-out duration-300">
                    <div className="   pt-2 mt-2 bg-[#00000092] p-4 rounded-sm">
                      <p className="text-xs text-left ">{props.desc}</p>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              // Render a placeholder div if the user is not authenticated
              <div className="absolute inset-0 flex justify-start items-end bg-[hsla(0,0%,0%,0.4)] bg-fixed transition-bg duration-300 ease-in-out pointer-events-none">
                <div className="m-1 md:m-6 ">
                  <h5 className="mb-3 text-md font-bold text-left">
                    {props.judul}
                  </h5>
                  <div className="flex md:justify-between  w-80 text-sm">
                    <div className="mt-1 text-orange-400">
                      <p>{props.tipe} </p>
                    </div>
                    <div className="mt-1 ml-28 md:ml-0">
                      <p>{props.waktu}</p>
                    </div>
                  </div>
                  <div className="border-t pt-2 mt-2 hidden group-hover:block transition-bg  ease-in-out duration-300">
                    <div className="   pt-2 mt-2 bg-[#00000092] p-4 rounded-sm">
                      <p className="text-xs text-left ">{props.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
