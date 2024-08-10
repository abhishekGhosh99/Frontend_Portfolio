import React from "react";
import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  tailwindIcon,
  bootstrapIcon,
  lamp,
  reduxIcon,
  materialUIIcon,
  sassIcon,
} from "../assets";

const TechStack = () => {
  return (
    <div className="techstack relative w-full bg-zinc-200 text-zinc-100 flex flex-col lg:flex-row justify-center items-center gap-9 px-[10vw] py-10 overflow-hidden">
      <div className="lamp hidden md:flex absolute left-4 sm:left-[22vw] md:left-[28vw] lg:left-[20px] xl:left-[5%] top-7 lg:top-16 xl:top-7 lg:bottom-0 lg:flex flex-row">
        <img
          src={lamp}
          className="w-[80px] lg:w-[110px] lg:h-[140px] xl:w-[100px] xl:h-[100px] opacity-70"
          alt=""
        />
        <div className="lamp-light absolute w-[20px] lg:w-[40px] lg:h-[40px] rounded-full top-[3px] right-[10px]"></div>
      </div>

      <h1 className="text-[22px] font-semibold lg:pl-[80px] xl:pl-0">
        Tech Stack
      </h1>

      <div className="space w-[90vw] lg:w-[2px] h-[2px] lg:h-[25px] bg-zinc-700 flex justify-center items-center"></div>

      <div className="icons flex flex-row flex-wrap gap-7 justify-center items-center tracking-2xl rounded-xl">
        <img
          src={htmlIcon}
          alt="html_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={cssIcon}
          alt="css_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={javascriptIcon}
          alt="javascript_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={bootstrapIcon}
          alt="bootstrap_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={reactIcon}
          alt="react_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={sassIcon}
          alt="sass_icon"
          className="w-[50px] rounded-xl hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={tailwindIcon}
          alt="tailwind_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={reduxIcon}
          alt="redux_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
        <img
          src={materialUIIcon}
          alt="materialui_icon"
          className="w-[50px] rounded-xl  hover:scale-110 hover:-translate-y-2 hover:ease-in-out hover:duration-200"
        />
      </div>
    </div>
  );
};

export default TechStack;
