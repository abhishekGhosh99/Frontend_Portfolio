import ProjectCard from "./ProjectCard";
import {
  awwards_winning_website,
  shopper,
  gerichtRestaurant,
  movix,
  ridenow,
  learnxDashboard,
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
        projectImage={ridenow}
        title={"RideNow | Car Rental Web App"}
        description={
          "RideNow is a modern car rental platform for discovering vehicles, making bookings, managing memberships, processing payments, and tracking your rental journey."
        }
        tech1={"Next.js"}
        tech2={"Tailwind CSS"}
        tech3={"Framer Motion"}
        tech4={"Node.js"}
        tech5={"Express.js"}
        tech6={"MongoDB"}
        codeLink={"https://github.com/abhishekGhosh99/RideNow"}
        liveDemoLink={"https://ridenowcars.vercel.app/"}
      />

      <ProjectCard
        className={"lg:flex-row-reverse"}
        projectImage={movix}
        title={"Movix Movie App"}
        description={
          "A responsive movie app built with React.js and Redux Toolkit using the TMDB API. Users can explore trending, top-rated movies and TV shows with dynamic routing, search, and lazy loading. Styled with SCSS(Sass) and fully responsive."
        }
        tech1={"React"}
        tech2={"Sass"}
        tech3={"Rest API"}
        tech4={"Redux Toolkit"}
        codeLink={"https://github.com/abhishekGhosh99/movix-movie-app"}
        liveDemoLink={"https://abhishekghosh99.github.io/movix-movie-app/"}
      />

      <ProjectCard
        projectImage={learnxDashboard}
        title={"LearnX Dashboard"}
        description={
          "A modern dashboard for the LearnX platform, built with React and styled with Tailwind CSS. It provides a comprehensive overview of user progress, course enrollment, and performance analytics."
        }
        tech1={"Next.js"}
        tech2={"TypeScript"}
        tech3={"Supabase"}
        tech4={"Framer Motion"}
        tech5={"Tailwind CSS"}
        codeLink={"https://github.com/abhishekGhosh99/LearnX-Dashboard"}
        liveDemoLink={"https://learn-x-dashboard.vercel.app/"}
      />
    </div>
  );
};

export default Portfolio;
