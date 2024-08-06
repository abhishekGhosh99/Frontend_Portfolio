import React from "react";
import ProjectCard from "./ProjectCard";
import {
  visionPro,
  shopper,
  gerichtRestaurant,
  gymExercise,
  movix,
} from "../assets";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio w-full px-[8vw] py-[6vw]">
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
            "Movix is a web app for exploring movies and TV shows. Discover trailers, cast details, ratings, and more. Browse by categories like Popular, Trending, and Top Rated to find your next entertainment fix."
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
            "The React-Tailwind E-commerce Web App is a modern and visually appealing online shopping platform designed and developed using React.js for the frontend and Tailwind CSS for a sleek and responsive user interface."
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
            "Gericht Restaurant is restaurant where you find special meals, breakfast, lunch, dinner, wines, beers, cocktails as well."
          }
          tech1={"React"}
          tech2={"Vanilla CSS"}
          codeLink={"https://github.com/abhishekGhosh99/Gericht-Restaurant"}
          liveDemoLink={"https://abhishekghosh99.github.io/Gericht-Restaurant/"}
        />
        <ProjectCard
          projectImage={visionPro}
          title={"Apple Vison Pro Clone"}
          description={
            "Apple Vision Pro is your Gateway to Visual Excellence. It seamlessly blends digital content with your physical space."
          }
          tech1={"HTML"}
          tech2={"CSS"}
          tech3={"JavaScript"}
          tech4={"GSAP"}
          codeLink={"https://github.com/abhishekGhosh99/Apple-Vision-Pro"}
          liveDemoLink={"https://abhishekghosh99.github.io/Apple-Vision-Pro/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
