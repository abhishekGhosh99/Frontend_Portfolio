import React from "react";
import ProjectCard from "./ProjectCard";
import {
  awwards_winning_website,
  shopper,
  gerichtRestaurant,
  gymExercise,
  movix,
} from "../assets";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="portfolio w-full px-[8vw] py-[6vw] bg-gradient"
    >
      <div className="head-text w-full flex flex-col gap-2 py-10">
        <h1 className="text-zinc-200 uppercase font-bold text-[5vw] lg:text-xl">
          portfolio
        </h1>
        <p className="text-sky-300 font-bold text-[4vw] lg:text-[2vw]">
          Each Project is a unique piece of development
        </p>
      </div>

      <ProjectCard
        projectImage={movix}
        title={"Movix Movie App"}
        description={
          "A responsive movie app built with React.js and Redux Toolkit using the TMDB API. Users can explore trending, top-rated movies and TV shows with dynamic routing, search, and lazy loading. Styled with Tailwind CSS and fully responsive."
        }
        tech1={"React"}
        tech2={"Sass"}
        tech3={"Rest API"}
        tech4={"Redux Toolkit"}
        codeLink={"https://github.com/abhishekGhosh99/movix-movie-app"}
        liveDemoLink={"https://abhishekghosh99.github.io/movix-movie-app/"}
      />

      <ProjectCard
        className={"lg:flex-row-reverse"}
        projectImage={gymExercise}
        title={"Infinity Virtual Gym"}
        description={
          "The Infinity Gym is a web app which provides a vast exercise library with GIF demonstrations and detailed instructions. Users can search exercises by body part or muscle group."
        }
        tech1={"React"}
        tech2={"Material UI"}
        tech3={"Rest API"}
        codeLink={"https://github.com/abhishekGhosh99/GymExercise"}
        liveDemoLink={"https://abhishekghosh99.github.io/GymExercise/"}
      />

      <ProjectCard
        projectImage={shopper}
        title={"Shopper | E-commerce Web App"}
        description={
          "The React-Tailwind E-commerce Web App  where users can browse products, view details, and manage a live cart. Styled with Tailwind CSS and optimized for responsive design and smooth user interaction."
        }
        tech1={"React"}
        tech2={"Tailwind CSS"}
        codeLink={"https://github.com/abhishekGhosh99/Shopper"}
        liveDemoLink={"https://abhishekghosh99.github.io/Shopper/"}
      />

      <ProjectCard
        className={"lg:flex-row-reverse"}
        projectImage={gerichtRestaurant}
        title={"Gericht Restaurant"}
        description={
          "A stylish and modern restaurant landing page built with React.js and styled using CSS modules. The site features elegant UI sections like menu, about, chef’s word, and contact form — crafted to reflect a premium dining experience. Built with full responsiveness and attention to detail in layout and design."
        }
        tech1={"React"}
        tech2={"Vanilla CSS"}
        codeLink={"https://github.com/abhishekGhosh99/Gericht-Restaurant"}
        liveDemoLink={"https://abhishekghosh99.github.io/Gericht-Restaurant/"}
      />

      <ProjectCard
        projectImage={awwards_winning_website}
        title={"Awwwards-winning website"}
        description={
          "Awwwards-winning Zentry website clone using React, Tailwind CSS, and GSAP. The site features stunning animations, seamless interactions, and a modern, responsive design, delivering a smooth user experience. Its elegant UI and high-performance transitions make it a visually captivating and dynamic web project. 🚀✨."
        }
        tech1={"React"}
        tech2={"Tailwind CSS"}
        tech3={""}
        tech4={"GSAP"}
        codeLink={"https://github.com/abhishekGhosh99/Awwards-winning-website"}
        liveDemoLink={
          "https://abhishekghosh99.github.io/Awwards-winning-website/"
        }
      />
    </div>
  );
};

export default Portfolio;
