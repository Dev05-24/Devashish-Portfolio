const Skills = () => {
  const cardsData = [
    { id: 1, title: "Html", img: "./images/skills/html.png" },
    { id: 2, title: "Css", img: "./images/skills/css3.svg" },
    { id: 3, title: "JS", img: "./images/skills/javascript.svg" },
    { id: 4, title: "React", img: "./images/skills/react.svg" },
    { id: 5, title: "NodeJS", img: "./images/skills/nodejs.svg" },
    { id: 6, title: "Tailwind", img: "./images/skills/tailwindcss.svg" },
    { id: 7, title: "Express", img: "./images/skills/express.png" },
    { id: 8, title: "MongoDB", img: "./images/skills/mongodb.png" },
    { id: 9, title: "Redux", img: "./images/skills/redux.webp" },
    { id: 10, title: "Git", img: "./images/skills/git.png" },
    { id: 11, title: "Github", img: "./images/skills/github.png" },
  ];
  return (
    <>
      <div
        className="flex flex-col justify-center py-20 relative overflow-hidden mx-10"
        id="skills"
      >
        <div className="relative overflow-hidden px-10">
          <h1 className="text-4xl lg:text-5xl text-orange-400 font-extrabold my-8 text-center transform transition-all duration-500 hover:scale-105">
          Skills
        </h1>
            <div
              className="absolute rounded-full bg-orange-400 h-64 w-48 -top-10 -left-45 md:h-72 md:w-[22rem] md:-top-40 md:-left-70 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-left-120
                      xl:h-[19rem] xl:w-[34rem] xl:-top-30 xl:-left-100 backdrop-blur-3xl"
            style={{ filter: "blur(200px)" }}
          ></div>
          <div
            className="absolute rounded-full bg-orange-400 h-40 w-48 -top-30 -right-40 md:h-72 md:w-[22rem] md:-top-40 md:-right-70 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-right-120
                      xl:h-[19rem] xl:w-[34rem] xl:-top-70 xl:-right-90 backdrop-blur-3xl"
            style={{ filter: "blur(200px)" }}
          ></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-10 relative overflow-hidden bg-red-40 place-items-center place-content-center">
          
          {cardsData.map((card) => (
            <div
              // className="rounded-lg flex cursor-pointer bg-green-300 overflow-hidden hover:scale-105 hover:bg-gray-50 shadow-[0px_0px_15px_rgba(255,255,255,0.7)] hover:text-black font-bold
              //  backdrop-blur-sm transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/10"
              className=" flex lg:flex-col px-3 py-3 items-center rounded-xl w-full justify-center gap-3"
            >
              <img
                className="h-12 object-cover hover:scale-125 duration-300 ease-in-out hover:animate-bounce cursor-pointer"
                src={card.img}
                alt={card.title}
              />
              <div className="">
                <h2 className="text-xl font-bold">{card.title}</h2>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
