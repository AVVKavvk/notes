import React from "react";
import { Link, Outlet } from "react-router-dom";

function Paper() {
  return (
    <div class="grid grid-cols-6 justify-center items-center mt-6 mx-auto max-w-[1200px] gap-4 p-4 ">
      <Link to="/paper/sem1">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-green-200">
          {" "}
          <span className="bg-green-300 p-3 py-1 rounded-md">
            <span className="bg-green-400 p-1 rounded-md">Semester 1</span>
          </span>
        </div>
      </Link>
      <Link to="/paper/sem2">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-green-200">
          {" "}
          <span className="bg-green-300 p-3 py-1 rounded-md">
            <span className="bg-green-400 p-1 rounded-md">Semester 2</span>
          </span>
        </div>
      </Link>
      <Link to="/paper/sem3">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-green-200">
          {" "}
          <span className="bg-green-300 p-3 py-1 rounded-md">
            <span className="bg-green-400 p-1 rounded-md">Semester 3</span>
          </span>
        </div>
      </Link>
      <Link to="/paper/sem4">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-green-200">
          {" "}
          <span className="bg-green-300 p-3 py-1 rounded-md">
            <span className="bg-green-400 p-1 rounded-md">Semester 4</span>
          </span>
        </div>
      </Link>
      <Link to="/paper/sem5">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-green-200">
          {" "}
          <span className="bg-green-300 p-3 py-1 rounded-md">
            <span className="bg-green-400 p-1 rounded-md">Semester 5</span>
          </span>
        </div>
      </Link>
      <Link to="/paper/sem6">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-green-200">
          {" "}
          <span className="bg-green-300 p-3 py-1 rounded-md">
            <span className="bg-green-400 p-1 rounded-md">Semester 6</span>
          </span>
        </div>
      </Link>

      <Outlet />
    </div>
  );
}

export default Paper;
