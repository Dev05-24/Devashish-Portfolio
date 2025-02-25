/**
 * @copyright 2025 codewithdev
 * @license Apache-2.0
 */

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
                <img src="./images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Portfolio Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div class="flex items-center lg:order-2">
                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Contact</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;
    // <nav className="bg-gray-800">
    //   <div className="w-full px-2 sm:px-6 lg:px-8 bg-red-400">
    //     <div className="relative grid grid-cols-3 h-16 items-center justify-between bg-amber-300">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* <!-- Mobile menu button--> */}
    //         <button
    //           type="button"
    //           onClick={() => setIsOpen(!isOpen)}
    //           className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 "
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           {/* <span className="absolute -inset-0.5"></span>
    //           <span className="sr-only">Open main menu</span> */}
    //           <svg
    //             className="block size-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //             data-slot="icon"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="grid col-span-2 bg-green-500">
    //         {/* logo image */}
    //         <div className="flex shrink-0 items-center">
    //           <img
    //             className="h-8 w-auto"
    //             src="./public/images/logo.svg"
    //             alt="Your Company"
    //           />
    //         </div>
    //         {/* navbar links */}
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
    //             <a
    //               href="#"
    //               className="rounded-md px-3 py-2 text-md font-bold text-gray-300 hover:bg-gray-700 hover:text-white"
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //             <a
    //               href="#"
    //               className="rounded-md px-3 py-2 text-md font-bold text-gray-300 hover:bg-gray-700 hover:text-white"
    //             >
    //               About
    //             </a>
    //             <a
    //               href="#"
    //               className="rounded-md px-3 py-2 text-md font-bold text-gray-300 hover:bg-gray-700 hover:text-white"
    //             >
    //               Projects
    //             </a>
    //             <a
    //               href="#"
    //               className="rounded-md px-3 py-2 text-md font-bold text-gray-300 hover:bg-gray-700 hover:text-white"
    //             >
    //               Skills
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       {/* contact me button */}
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 bg-blue-100">
    //         <button
    //           type="button"
    //           className=" rounded-md px-3 py-2 text-md font-bold text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
    //         >
    //           Contact Me
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    //   <div
    //     className={`sm:hidden ${
    //       isOpen ? "block" : "hidden"
    //     } ${
    //       isOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
    //     } transition-all duration-300 ease-in-out`}
    //     id="mobile-menu"
    //   >
    //     <div className="space-y-1 px-2 pt-2 pb-3">
    //       <a
    //         href="#"
    //         className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //         aria-current="page"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="#"
    //         className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //       >
    //         About
    //       </a>
    //       <a
    //         href="#"
    //         className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //       >
    //         Projects
    //       </a>
    //       <a
    //         href="#"
    //         className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //       >
    //         Skills
    //       </a>
    //     </div>
    //   </div>

    // </nav>