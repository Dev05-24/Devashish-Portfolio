import React from "react";

const About = () => {
  return (
    <div
      className="mx-10 min-h-screen flex flex-col items-start justify-center gap-10 text-white"
      id="about"
    >
      <div className="relative overflow-hidden py-20 px-10">
      <h1 className="text-4xl lg:text-6xl font-extrabold text-orange-400">About Me</h1>
      <div
          className="absolute rounded-full bg-orange-400 h-64 w-48 -top-10 -left-45 md:h-72 md:w-[22rem] md:-top-50 md:-left-60 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-left-120 xl:h-[19rem] xl:w-[34rem] xl:-top-60 xl:-left-90 backdrop-blur-3xl"
          style={{ filter: "blur(200px)" }}
        ></div>
        <div
          className="absolute rounded-full bg-orange-400 h-40 w-48  -top-30 -right-40 md:h-72 md:w-[22rem] md:-top-40 md:-right-70 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-right-120 xl:h-[19rem] xl:w-[34rem] xl:-top-70 xl:-right-90 backdrop-blur-3xl"
          style={{ filter: "blur(200px)" }}
        ></div>
      <div className="relative overflow-hidden">
        <div className="flex flex-col items-start gap-3 mb-5 mt-5">
        <p className="text-sm lg:text-lg font-bold">B.Tech in Computer Science</p>
        <div>
          <ul className="flex justify-around gap-5 list-disc px-5 font-semibold">
            <li>
              <a href="https://saitm.ac.in/">SAITM</a>
            </li>
            <li>
              <a href="" className="tracking-wider">
                2019-2023
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className="flex flex-col gap-5 text-sm lg:text-xl font-semibold">
        <p>
          Hi,{" "}
          <span className="text-orange-400 font-bold">
            I'm Devashish Kunwar
          </span>
          , a passionate and creative Frontend Developer with a strong
          foundation in modern web technologies. I specialize in building
          responsive and engaging websites using HTML, CSS, JavaScript,
          React.js.
        </p>

        <p>
          With hands-on experience in frameworks like Tailwind CSS and
          Bootstrap, as well as backend basics with Node.js and APIs, I strive
          to deliver visually appealing, functional, and user-focused digital
          experiences.
        </p>

        <p>
          Currently diving deeper into the MERN stack, I am building full-stack
          projects that combine clean UI design with robust backend systems —
          aiming to create impactful solutions that blend performance with
          creativity.
        </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
