import { useEffect, useState } from "react";

const MainPage = () => {
    const[isVisisble, setIsVisible] = useState(false);

    useEffect(()=>{
        setIsVisible(true);
    },[]);
  return (
    <>
      <div className="flex items-center justify-around m-auto h-screen" id="home">
        <div className={`content sm:w-full lg:w-2/4 p-10 m-10 text-center sm:text-left transition-all ease-in-out duration-500 transform ${isVisisble ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
          <div className="">
            <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl lg:text-left font-medium inline-block mb-6">Hey, I'am </span> 
            <h1 className="text-gray-500 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-7xl lg:text-left font-bold mb-5">Devashish kunwar</h1>
            <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl lg:text-left font-medium mb-5">A web developer </p> 
          </div>
          <div className="flex items-center mt-10 gap-10 justify-center md:justify-start animate-bounce">

          <a href="https://www.linkedin.com/in/devashish-kunwar-533895177"><i className="fa-brands fa-linkedin text-3xl transition-transform transform hover:scale-130"></i></a>
          <a href="https://github.com/Dev05-24"><i className="fa-brands fa-github text-3xl transition-transform transform hover:scale-130"></i></a>
          <a href="https://www.instagram.com/devashishkunwar/"><i className="fa-brands fa-instagram text-3xl transition-transform transform hover:scale-130"></i></a>
          </div>
        </div>
        <div className={`image lg:w-1/4 text-center justify-center hidden sm:block transition-all ease-in-out duration-500 transform ${isVisisble ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <img src="./images/main-image.jpg" alt="dev" className="rounded-full shadow-[0px_0px_40px_rgba(255,255,255,0.5)]" />
        </div>
      </div>
      <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div>
    </>
  );
};
export default MainPage;
