import React from "react";
import imgsecctio1 from "../image/book1.svg";
import imgsecctio2 from "../image/book2.svg";
import imgsecctio3 from "../image/pencil.svg";
import imgsecctio4 from "../image/pencil1.svg";
import imgsecctio5 from "../image/books-notes-student-svgrepo-com.svg";
import imgsecctio6 from "../image/book-key-keyboard-svgrepo-com.svg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { Button } from "antd";
function Home() {
  return (
    <div class="">
      <div className="grid grid-cols-2 overflow-hidden gap-2 mt-6 relative h-[420px]">
        <div className="flex flex-col mx-auto font-mullish text-4xl justify-center text-blue-700    ">
          <h1 class="flex gap-3 ">
            Hello Welcome to
            <h1 class="text-red-500">
              <Typewriter
                options={{
                  strings: ["Vipin's Website", "Notes Website"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </h1>
        </div>

        <div class="h-[400px] sm:w-[400px] w-[400px] overflow-hidden  ">
          <img
            src="https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg"
            alt=""
            class="h-auto absolute moverovers w-[500px] rounded-md"
          />
          <img src={imgsecctio1} alt="" class="w-[150px] absolute left-[30%]" />
          <img src={imgsecctio2} alt="" class="w-[150px] absolute left-[15%]" />
          <img
            src={imgsecctio5}
            alt=""
            class="w-[150px] absolute left-[30%] bottom-0"
          />
          <img
            src={imgsecctio6}
            alt=""
            class="w-[150px] absolute bottom-0 left-[15%]"
          />

          <img
            src={imgsecctio3}
            alt=""
            class="w-[150px]  right-[30%] absolute  "
          />
          <img
            src={imgsecctio4}
            alt=""
            class="w-[150px]  absolute bottom-[5%] right-[27.5%]  "
          />
        </div>
      </div>
      <div class="flex  justify-center items-center mt-16 max-w-[1200px] text-center mx-auto">
        <div class="flex justify-center text-center items-center font-mullish text-xl text-blue-700 ">
          <p>
            Hello welcome to notes website of IIIT Pune. In this website you
            will get all the notes, labs, and paper of previous year and I will
            also provide you the ppt that teacher shared with us.I hope this
            page will find you helpful.
          </p>
        </div>
        
      </div>
      <div class="flex text-xl justify-center items-center mt-10 mx-auto flex-col rounded-md max-w-[500px]   border-2 m-5 border-blue-500">
        <h1 class="text-xl m-4 text-deepBlue">
          For Accessing this page please do following steps
        </h1>
        <h1 class="m-1 p-2 ">
          Already have account
          <Link to="/login" class="bg-blue-700 p-2 m-2 px-5 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 ">
            Login
          </Link>
        </h1>

        <h1 class="m-1 p-2 ">
          Do not have account{" "}
          <Link to="/signup" class="bg-blue-700 p-2 m-2 px-5 text-lg rounded-md text-white mb-3 hover:bg-blue-500 transition-all duration-200 ">
            Sign-Up
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Home;
