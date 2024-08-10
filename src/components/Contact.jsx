import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LiaLinkedin } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className="contact selection:bg-[#8787878a]">
      <div className="w-full contact py-[4vw] px-[10vw]">
        <div className="upper w-full pb-10">
          <h3 className="text-sky-300 font-bold text-[6vw] sm:text-[5vw] lg:text-[1.5vw] uppercase py-4">
            Contact
          </h3>
          <h1 className="text-zinc-200 font-bold text-[5vw] sm:text-[4vw] lg:text-[2.5vw]">
            Don't be shy! Hit me up! 👇
          </h1>
        </div>

        <div className="lower w-full px-2 flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20">
          <div className="location flex flex-row justify-center items-center gap-5">
            <div className="icon flex justify-center items-center w-[50px] h-[50px] p-[10px] bg-sky-600 rounded-full">
              <FaMapMarkedAlt className="text-[35px]" />
            </div>
            <div className="text text-zinc-200">
              <h1 className="text-[4.5vw] sm:text-[3.5vw] lg:text-[1.5vw] font-semibold">
                Location
              </h1>
              <p className="text-[4.5vw] sm:text-[3.5vw] lg:text-[1.4vw]">
                Delhi, India
              </p>
            </div>
          </div>
          <div className="mail flex flex-row justify-center items-center gap-5">
            <div className="icon flex justify-center items-center w-[50px] h-[50px] p-[10px] bg-sky-600 rounded-full">
              <IoMdMail className="text-[35px]" />
            </div>
            <div className="text text-zinc-200">
              <h1 className="text-[4.5vw] sm:text-[3.5vw] lg:text-[1.5vw] font-semibold">
                Mail
              </h1>
              <a
                href=""
                className="text-[4.5vw] sm:text-[3.5vw] lg:text-[1.4vw]"
              >
                ag5416106@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="copyright py-[20vw] lg:py-0 lg:pt-[8vw] flex flex-col-reverse lg:flex-row justify-between w-full items-center gap-10 lg:gap-0">
          <div className="left w-full lg:w-1/2">
            <h1 className="text-[3vw] lg:text-[1.4vw] font-bold text-center lg:text-start">
              Copyright © 2024. All rights are reserved.
            </h1>
          </div>
          <div className="right w-1/2 flex flex-row justify-center lg:justify-end items-center gap-10 lg:gap-5">
            <a
              href="https://www.linkedin.com/in/abhishek-ghosh-188125226/"
              target="_blank"
            >
              <LiaLinkedin className="text-[8vw] lg:text-[3vw] hover:text-blue-400" />
            </a>
            <a href="https://github.com/abhishekGhosh99" target="_blank">
              <FiGithub className="text-[6vw] lg:text-[2.5vw] hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
