import React, { useState, useRef, useEffect } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSidebar(false);
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    if (sidebar) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <>
      <div className="nav fixed w-full flex justify-between items-end px-5 md:px-10 py-5 z-50 bg-gradient box-shadow">
        <div className="left w-1/2">
          <h1 className="text-[20px] text-nowrap lg:text-2xl font-semibold cursor-pointer">
            Abhishek <span>Ghosh</span>
          </h1>
        </div>

        <div className="right w-1/2 flex justify-end">
          <RiMenuFoldFill
            className="flex md:hidden lg:hidden text-[22px]"
            onClick={toggleSidebar}
          />

          {/* For mobile devices */}
          <div
            ref={sidebarRef}
            className={`bg-gradient sidebar lg:hidden fixed top-0 right-0 h-full w-[60%] z-50 transform transition-transform duration-700 ease-in-out ${
              sidebar
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleSidebar}
            >
              <GrClose className="flex text-[22px]" />
            </button>
            <ul className="py-28 px-10 flex flex-col gap-10">
              <li
                className="text-lg font-medium cursor-pointer hover:text-blue-400"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </li>
              <li
                className="text-lg font-medium cursor-pointer hover:text-blue-400"
                onClick={() => handleLinkClick("about")}
              >
                About
              </li>
              <li
                className="text-lg font-medium cursor-pointer hover:text-blue-400"
                onClick={() => handleLinkClick("portfolio")}
              >
                Projects
              </li>
              <li
                className="text-lg font-medium cursor-pointer hover:text-blue-400"
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </li>
            </ul>
          </div>

          {/* For large screen devices */}
          <ul className="hidden md:flex lg:flex flex-row gap-10">
            <li
              className="text-lg font-semibold cursor-pointer hover:text-blue-400"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </li>
            <li
              className="text-lg font-semibold cursor-pointer hover:text-blue-400"
              onClick={() => handleLinkClick("about")}
            >
              About
            </li>
            <li
              className="text-lg font-semibold cursor-pointer hover:text-blue-400"
              onClick={() => handleLinkClick("portfolio")}
            >
              Projects
            </li>
            <li
              className="text-lg font-semibold cursor-pointer hover:text-blue-400"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
