import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah perilaku default dari tombol submit

    if (!username || !password) {
      seterror("Please Enter Both Username And Password.");
      return;
    }

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("user", json.token);
          toast.success("Login success");
          navigate("/");
        } else {
          toast.error(json.response);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        seterror("Authentication failed.");
      });
  };

  return (
    <div className="bg-black text-slate-300 font-sans w-screen h-screen pt-44">
      <div className="bg-gray-900 w-96 rounded-md p-7 mx-auto my-auto">
        <h1 className="text-4xl font-semibold mb-5">LogIn</h1>

        <form onSubmit={handleLogin}> {/* Gunakan onSubmit pada form */}
          <input
            type="text"
            className="bg-gray-700 p-2 pl-4 rounded-full w-80 ml-1 md:ml-0 md:w-full placeholder-slate-400 focus:outline-none focus:ring-2 ring-orange-400 focus:border-slate-300 text-slate-300 my-4"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            type="password"
            className="bg-gray-700 p-2 pl-4 rounded-full w-80 ml-1 md:ml-0 md:w-full placeholder-slate-400 focus:outline-none focus:ring-2 ring-orange-400 focus:border-slate-300 text-slate-300"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            type="submit" // Tambahkan type="submit" pada tombol
            className="bg-orange-500 hover:bg-orange-600 rounded-md text-slate-200 font-semibold w-full h-10 mt-4"
          >
            Log In
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <Link
            to="/signin"
            className="hover:text-orange-400 hover:underline underline-offset-4 text-xs"
          >
            Don't have an account yet? Sign In here
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
