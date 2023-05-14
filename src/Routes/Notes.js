import React from "react";
import { Link, Outlet } from "react-router-dom";

function Notes() {
  return (
    <>
    
    <div class="grid grid-cols-6 mt-6 justify-center items-center mx-auto max-w-[1200px] gap-4 p-4 ">
      <Link to="/notes/sem1">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
          <span className="bg-red-300 p-3 py-1 rounded-md">
            <span className="bg-red-400 p-1 rounded-md">Semester 1</span>
          </span>
        </div>
      </Link>
      <Link to="/notes/sem2">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
          <span className="bg-red-300 p-3 py-1 rounded-md">
            <span className="bg-red-400 p-1 rounded-md">Semester 2</span>
          </span>
        </div>
      </Link>
      <Link to="/notes/sem3">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
          <span className="bg-red-300 p-3 py-1 rounded-md">
            <span className="bg-red-400 p-1 rounded-md">Semester 3</span>
          </span>
        </div>
      </Link>
      <Link to="/notes/sem4">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
          <span className="bg-red-300 p-3 py-1 rounded-md">
            <span className="bg-red-400 p-1 rounded-md">Semester 4</span>
          </span>
        </div>
      </Link>
      <Link to="/notes/sem5">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
          <span className="bg-red-300 p-3 py-1 rounded-md">
            <span className="bg-red-400 p-1 rounded-md">Semester 5</span>
          </span>
        </div>
      </Link>
      <Link to="/notes/sem6">
        <div class="w-[150px] p-1 h-[20px] text-xl rounded-lg items-center text-center justify-center flex bg-red-200">
          <span className="bg-red-300 p-3 py-1 rounded-md">
            <span className="bg-red-400 p-1 rounded-md">Semester 6</span>
          </span>
        </div>
      </Link>
    

      <Outlet />
    </div>
    </>
  );
}

export default Notes;
