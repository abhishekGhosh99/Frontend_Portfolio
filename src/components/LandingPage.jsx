import React, { useEffect, useState } from "react";
import { LiaLinkedin } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { landingPageAvatar } from "../assets";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
};
const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div id="home">
      <div className="landing-page w-full h-[100vh] px-[9vw] md:px-[10vw] lg:px-[13vw] py-[13vh] md:py-[28vh] flex flex-col-reverse md:flex-row justify-between gap-0 md:gap-[50px] lg:gap-10">
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ duration: 2, delay: 5 }}
          className="left w-full lg:w-1/2 flex lg:block flex-col justify-center items-center gap-4 lg:gap-0"
        >
          <h1 className="w-full text-[10vw] sm:text-[7.6vw] lg:text-[5vw] font-bold leading-[11vw] lg:leading-[6vw] text-center lg:text-start">
            <TypeAnimation
              sequence={["Front-End Developer", 1000]}
              wrapper="span"
              speed={5}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="lg:leading-[2.5vw] py-6 font-semibold text-[18px] sm:text-[20px] lg:text[20px] text-center lg:text-start">
            Hi, I'm Abhishek Ghosh. A passionate Frontend Developer based in
            Delhi, India. 📍
          </p>
          <div className="icons flex flex-row justify-center lg:justify-start items-center w-full px-3 gap-10 lg:gap-5 ">
            <a
              href="https://www.linkedin.com/in/abhishekGhoshh/"
              target="_blank"
            >
              <LiaLinkedin className="text-[8vw] md:text-[5vw] lg:text-[3vw] hover:text-blue-400" />
            </a>
            <a href="https://github.com/abhishekGhosh99" target="_blank">
              <FiGithub className="text-[7vw] md:text-[5vw] lg:text-[2.5vw] hover:text-blue-400" />
            </a>
          </div>
        </motion.div>

        <div className="right relative w-full md:w-1/2 h-auto flex justify-center items-start ">
          <motion.div
            animate={{
              rotate: [180, 360],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-full flex justify-center items-center"
          >
            <div className="landingPage-img w-[200px] md:w-[250px] lg:w-[320px] h-[200px] md:h-[250px] lg:h-[320px] absolute top-1 rounded-full border-zinc-100 border-[2px]"></div>
            <img
              src={landingPageAvatar}
              className="absolute top-2 w-[200px] md:w-[250px] lg:w-[300px]"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
