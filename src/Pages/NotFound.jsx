import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-black text-slate-300 font-sans w-scree h-screen pt-44">
      <div className=" w-[450px] rounded-md p-7 mx-auto my-auto">
        <h1 className="text-7xl font-semibold mb-5">Page Not Found!!</h1>

        <Link to="/">
          <button className="bg-orange-500 hover:bg-orange-600 rounded-md text-slate-200 font-semibold w-full h-10 mt-4">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
