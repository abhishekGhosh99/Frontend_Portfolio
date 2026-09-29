import React, { useEffect, useState } from "react";
import { aboutImage, aboutSubImage } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prevRotate) => prevRotate + 0.8);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="about"
      className="about w-full px-[8vw] py-[10vh] lg:py-[6vw] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 bg-gradient"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        className="left relative w-full lg:w-1/2 flex justify-center items-center lg:px-10"
      >
        <img src={aboutImage} className="rounded-xl lg:max-w-[120%]" alt="" />
        <div
          style={{ transform: `rotate(${rotate}deg)` }}
          className="about-avatar hidden absolute bottom-[0%] right-[0%] lg:flex justify-center items-center transition-transform"
        >
          <div className="glowie-div w-[160px] h-[160px] rounded-full bg-blue-300 absolute flex justify-center items-center right-0 z-10"></div>
          <img
            src={aboutSubImage}
            className="about-sub-image w-[130px] relative rounded-full right-[0px] z-20"
            alt=""
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        className="right w-full lg:w-1/2 flex flex-col justify-start items-start gap-4"
      >
        <h3 className="text-[5vw] lg:text-xl font-bold uppercase text-blue-300 pb-6">
          About Me
        </h3>
        <h1 className="text-[5vw] lg:text-[2.5vw] font-bold">
          Frontend Developer based in Delhi, India📍
        </h1>
        <p className="text-[18px] lg:text-[18px] font-medium text-zinc-300">
          Hey, I'm Abhishek, a Frontend Developer from Delhi, India, passionate
          about creating clean, responsive, and user-friendly web applications.
        </p>
        <p className="text-[18px] lg:text-[18px] font-medium text-zinc-300">
          I specialize in React.js, Next.js, JavaScript, and TypeScript, with
          experience using Tailwind CSS, Redux Toolkit, and modern UI libraries
          to build scalable interfaces.
        </p>
        <p className="text-[18px] lg:text-[18px] font-medium text-zinc-300">
          I've also gained hands-on industry experience through a React.js
          development internship, working with React, TypeScript, Tailwind CSS,
          and data-driven components. I also have experience integrating REST
          APIs, authentication, state management, Git, and GitHub into web
          applications.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
