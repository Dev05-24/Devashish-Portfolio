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
              <button className="bg-orange-600 text-orange-100 px-3 py-2 rounded-lg font-bold cursor-pointer transition-transform transform duration-300 hover:scale-110">
                Resume
              </button>
            </a>
            {/* <a href="#contact" className="text-white font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:border-b">Contact</a> */}
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
              {/* <li>
                        <a href="#home" className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b"
                        aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#skills" className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b">Projects</a>
                    </li>
                    <li>
                        <a href="#certificates" className="block pr-4 rounded-lg lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5
                          hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:py-3 sm:border-b">Certificates</a>
                    </li> */}
            
            
          
        </div>
      </nav>
    </header>
  );
};

export default Header;






/**
 * @copyright 2025 codewithdev
 * @license Apache-2.0
 */

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Project", href: "#projects" },
//     { name: "Certificates", href: "#certificates" },
//   ];

//   return (
//     <header className="fixed w-full top-0 z-50 bg-[#0f0f0f] border-b border-white/10 backdrop-blur-md">
//       <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-2">
//           <img src="./images/logo.svg" className="h-8" alt="Logo" />
//           <span className="text-white text-xl font-semibold">Devashish</span>
//         </a>

//         {/* Resume Button */}
//         <div className="flex items-center gap-4 lg:gap-6">
//           <a
//             href="/Devashish-Kunwar_Resume.pdf"
//             download="Devashish_Kunwar_Resume.pdf"
//             className="hidden sm:inline-block bg-orange-600 text-white font-bold px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
//           >
//             Resume
//           </a>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white lg:hidden p-2 rounded-md focus:outline-none"
//           >
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </nav>

//       {/* Navigation Links */}
//       <div
//         className={`lg:flex lg:items-center lg:justify-center lg:gap-10 px-6 pb-4 lg:pb-0 transition-all duration-300 ease-in-out ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium text-white text-center lg:text-left gap-4 lg:gap-0">
//           {navLinks.map((link, index) => (
//             <li key={index}>
//               <a
//                 href={link.href}
//                 onClick={() => setIsOpen(false)} // Close mobile menu on click
//                 className="block py-2 px-4 relative group font-semibold hover:text-orange-400 transition-colors duration-300"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;












// /**
//  * @copyright 2025 codewithdev
//  * @license Apache-2.0
//  */

// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Import icons

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header>
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sticky">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           {/* Logo */}
//           <a href="#" className="flex items-center">
//             <img src="./images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Portfolio Logo" />
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//           {/* Navigation Links */}
//           <div
//             className={`${isOpen ? "block" : "hidden"} lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded-lg lg:bg-transparent lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5 hover:bg-gray-50 hover:text-black transform transition-all duration-500">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded-lg lg:bg-transparent lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5 hover:bg-gray-50 hover:text-black transform transition-all duration-500">
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded-lg lg:bg-transparent lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5 hover:bg-gray-50 hover:text-black transform transition-all duration-500">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded-lg lg:bg-transparent lg:p-0 font-bold text-sm lg:px-5 lg:py-2.5 hover:bg-gray-50 hover:text-black transform transition-all duration-500">
//                   Certificates
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
