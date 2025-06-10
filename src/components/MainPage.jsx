import { useEffect, useState } from "react";

import { Download } from "lucide-react";

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <div
        className="flex lg:flex-row items-center justify-around m-auto h-screen relative overflow-hidden"
        id="home"
      >
        <div
          className="bg-orange-400 absolute rounded-full h-56 w-72 sm:w-96 md:w-120
          lg:w-120 xl:w-120 top-0 left-0 sm:-top-10 sm:-left-10 md:-top-20 md:-left-20 lg:-top-30 lg:-left-30  backdrop-blur-3xl"
          style={{ filter: "blur(150px)" }}
        ></div>
        <div
          className="bg-orange-400 absolute rounded-full backdrop-blur-3xl
             h-0 w-0 sm:h-52 sm:w-44 sm:bottom-50 sm:-right-20 md:h-56 md:w-56 lg:h-72 lg:w-50
             lg:bottom-10 lg:-right-10"
          style={{ filter: "blur(200px)" }}
        ></div>
        <div
          className={`content sm:w-full p-10 m-10 text-center transition-all ease-in-out duration-500 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="text-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium inline-block mb-6 text-white mt-7">
              Hey, I'am{" "}
            </span>
            <h1 className="text-orange-400 text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Devashish kunwar
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-5 text-white">
              A web developer{" "}
            </p>
          </div>
          <div className="flex items-center mt-10 gap-10 justify-center">
            <a
              href="https://www.linkedin.com/in/devashish-kunwar-533895177"
              target="_blank"
            >
              <i className="fa-brands animate-bounce fa-linkedin text-3xl transition-transform transform hover:scale-110 text-blue-500"></i>
            </a>
            <a href="https://github.com/Dev05-24" target="_blank">
              <i className="fa-brands text-blue-50 fa-github text-3xl animate-bounce transition-transform transform hover:scale-110"></i>
            </a>
            <a href="https://leetcode.com/u/DEV0902/" target="_blank">
              <i className="fa-brands fa-code text-3xl animate-bounce transition-transform transform hover:scale-110"></i>
            </a>
          </div>
        </div>
        {/* <div className={`image lg:w-1/4 text-center justify-center hidden sm:block transition-all ease-in-out duration-500 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <img src="./images/img.png" alt="Devashish Kunwar" 
          className={`rounded-full h-100 w-90 transition-all duration-700 delay-200 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`} />
        </div> */}
      </div>
        {/* <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div> */}
    </>
  );
};
export default MainPage;
