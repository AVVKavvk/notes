import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="font-mullish w-full relative rounded-sm text-2xl p-6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      <div class="flex max-w-[1300px] mx-auto  justify-between items-center px-10  text-white  rounded-lg">
        <ul className="nav_bar flex justify-center items-center gap-4   ">
          <li class="hover:underline hover:bg-indigo-600  p-2 rounded-md transition-all duration-500">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li class="hover:underline hover:bg-blue-600  p-2 rounded-md transition-all duration-500">
            <Link to="/labs" style={{ textDecoration: "none" }}>
              Labs
            </Link>
          </li>
          <li class="hover:underline hover:bg-sky-500   p-2 rounded-md transition-all duration-500">
            <Link to="/notes" style={{ textDecoration: "none" }}>
              Notes
            </Link>
          </li>
          <li class="hover:underline hover:bg-sky-600  p-2 rounded-md transition-all duration-500">
            <Link to="/paper" style={{ textDecoration: "none" }}>
              Paper
            </Link>
          </li>

          <li class="hover:underline hover:bg-sky-400 p-2 rounded-md transition-all duration-500">
            <Link to="/" style={{ textDecoration: "none" }}>
              Creator
            </Link>
          </li>
        </ul>
        <ul class="flex justify-center items-center gap-4 px-3">
          <li class="hover:underline hover:bg-green-500  p-2 rounded-md transition-all duration-500">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
          <li class="hover:underline hover:bg-green-500  p-2 rounded-md transition-all duration-500">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </li>
        </ul>
     </div>
    </div>
  );
}

export default Navbar;
