import React from "react";

import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "framer-motion";

const ProjectCard = ({
  className,
  projectImage,
  title,
  description,
  tech1,
  tech2,
  tech3,
  tech4,
  codeLink,
  liveDemoLink,
}) => {
  return (
    <div className="project_card">
      <motion.div
        className={`${className} projects w-full px-0 lg:px-5 xl:px-5 py-6 mb-[10vw] flex flex-col lg:flex-row gap-12`}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="left w-full lg:w-1/2 rounded-[20px] flex justify-center items-center"
        >
          <img
            src={projectImage}
            className="lg:h-[250px] xl:h-[300px] rounded-[20px]"
            alt=""
          />
        </motion.div>

        <div className="right w-full flex flex-col justify-end lg:w-1/2 px-0 lg:px-[2vw] xl:px-[2vw] pt-5">
          <h1 className="text-[20px] md:text-[30px] lg:text-[22px] font-bold lg:text-center pb-4">
            {title}
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[17px] text-zinc-300 font-semibold lg:text-center">
            {description}
          </p>

          <div className="tech-used flex justify-center items-center flex-row pt-8 pb-4 lg:pt-6 lg:pb-2 lg:py-6 w-full gap-6">
            {tech1 && (
              <h1 className="text-[15px] md:text-[20px] lg:text-[17px] font-extrabold">
                {tech1}
              </h1>
            )}
            {tech2 && (
              <h1 className="text-[15px] md:text-[20px] lg:text-[17px] font-extrabold">
                {tech2}
              </h1>
            )}
            {tech3 && (
              <h1 className="text-[15px] md:text-[20px] lg:text-[17px] font-extrabold">
                {tech3}
              </h1>
            )}
            {tech4 && (
              <h1 className="text-[15px] md:text-[20px] lg:text-[17px] font-extrabold">
                {tech4}
              </h1>
            )}
          </div>

          <div className="demo flex flex-row gap-10 justify-center items-center py-2">
            <a
              href={codeLink}
              target="_blank"
              className="btn-shadow hover:text-blue-400"
            >
              <span className="flex flex-row justify-center items-center gap-2 p-3 font-bold">
                Code <FaGithub />
              </span>
            </a>
            <a
              href={liveDemoLink}
              target="_blank"
              className="btn-shadow hover:text-blue-400"
            >
              <span className="flex flex-row justify-center items-center gap-2 p-3 font-bold">
                Live Demo
                <HiMiniArrowTopRightOnSquare />
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
