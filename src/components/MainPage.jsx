import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const MainPage = () => {
    const[isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        setIsVisible(true);
    },[]);
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-around m-auto h-screen" id="home">
        <div className={`content sm:w-full lg:w-2/4 p-10 m-10 text-center sm:text-left transition-all ease-in-out duration-500 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
          <div className="">
            <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl lg:text-left font-medium inline-block mb-6">Hey, I'am </span> 
            <h1 className="text-gray-500 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-7xl lg:text-left font-bold mb-5">Devashish kunwar</h1>
            <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl lg:text-left font-medium mb-5">A web developer </p> 
          </div>
          <div className="flex items-center mt-10 gap-10 justify-center md:justify-start">

          <a href="https://www.linkedin.com/in/devashish-kunwar-533895177" target="_blank"><i className="fa-brands fa-linkedin text-3xl transition-transform transform hover:scale-110"></i></a>
          <a href="https://github.com/Dev05-24" target="_blank"><i className="fa-brands fa-github text-3xl transition-transform transform hover:scale-110"></i></a>
          <a href="https://leetcode.com/u/DEV0902/" target="_blank"><i className="fa-brands fa-code text-3xl transition-transform transform hover:scale-110"></i></a>
          <a href="/Devashish-Kunwar_Resume.pdf" download="Devashish_Kunwar-resume.pdf"><button className="bg-white px-3 py-2 text-black rounded-lg font-bold cursor-pointer transition-transform transform duration-300 hover:scale-110">Resume</button></a>
          </div>
        </div>
        <div className={`image lg:w-1/4 text-center justify-center hidden sm:block transition-all ease-in-out duration-500 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <img src="./images/img.png" alt="Devashish Kunwar" 
          className={`rounded-full shadow-[0px_0px_40px_rgba(255,255,255,0.5)] transition-all duration-700 delay-200 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`} />
        </div>
      </div>
      <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div>
    </>
  );
};
export default MainPage;