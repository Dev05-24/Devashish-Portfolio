/**
 * @copyright 2025 codewithdev
 * @license Apache-2.0
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Certificates",
      href: "#certificates",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <header>
      <nav className="bg-wh fixed top-0 border-gray-200 px-4 lg:px-6 py-2.5 bg-white/10 backdrop-blur-md z-50 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img
              src="./images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Portfolio Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/Devashish-Kunwar_Resume.pdf"
              download="Devashish_Kunwar-resume.pdf"
            >
              <button className="bg-orange-600 border border-orange-400 text-orange-100 px-3 py-2 rounded-lg font-bold cursor-pointer transition-transform transform duration-300 
              hover:scale-110 hover:bg-white/10 hover:text-orange-400">
                Resume
              </button>
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between  items-center w-full lg:flex lg:w-auto lg:order-1 sm:text-center`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3">
              {navLinks.map((item, index) => {
                return (
                    <>
                  <li index={index}>
                    <a
                      href={item.href}
                      className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-md lg:px-5 lg:py-2.5 sm:py-3 relative group text-white"
                      aria-current="page"
                    >
                      {item.name}
                  <span className="left-0 -bottom-1 bg-orange-400 h-[2px] w-0 absolute opacity-70 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  </>
                );
              })}
              </ul>
              </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;