/**
 * @copyright 2025 codewithdev
 * @license Apache-2.0
 */

import { useState } from "react";
import { Menu,X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
    <nav className="bg-white fixed top-0 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
                <img src="./images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Portfolio Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#contact" className="text-white font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-50 hover:text-black backdrop:-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]  border-white/10 sm:border-b">Contact</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={23} /> : <Menu size={23} />}
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 sm:text-center`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3">
                    <li>
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
                    </li>
                    {/* <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Certificates</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;


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
