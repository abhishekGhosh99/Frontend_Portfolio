import React, { useState, useEffect } from "react";
import {
  Navbar,
  LandingPage,
  TechStack,
  About,
  Portfolio,
  Contact,
  GoToTopButton,
} from "../src/components/index";

import LocomotiveScroll from "locomotive-scroll";
import { motion, AnimatePresence } from "framer-motion";

const welcomeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const WelcomeAnimation = () => {
  return (
    <>
      <motion.div
        className="welcome w-full h-[100vh] flex flex-col justify-center items-center text-[40px] md:text-[50px] lg:text-[60px] font-bold text-zinc-200 px-5 text-center"
        variants={welcomeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Hii there👋</h1>
        <h1>Welcome to My Portfolio!</h1>
      </motion.div>
    </>
  );
};

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showWelcome ? (
          <motion.div key="welcome">
            <WelcomeAnimation />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            variants={mainVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full text-zinc-100 overflow-hidden"
          >
            <Navbar />
            <LandingPage />
            <TechStack />
            <About />
            <Portfolio />
            <Contact />
            <GoToTopButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
