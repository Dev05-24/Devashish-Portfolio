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
    { id: 9, title: "Github", img: "./images/skills/github.png" },
];
  return (
    <>
      <div className="flex flex-col justify-center mb-20 py-15" id="skills">
        <h1 className="text-5xl font-bold my-8 text-center transform transition-all duration-500 hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
          Skills
        </h1>
        {/* <div className="skills-container flex items-center justify-center relative overflow-hidden mb-10 bg-blue-700"></div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-10">
            {cardsData.map((card) => (
              <div
                className="p-2 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden hover:scale-105 hover:bg-gray-50 shadow-[0px_0px_15px_rgba(255,255,255,0.7)] hover:text-black font-bold
              bg-zinc-900/50 backdrop-blur-sm  transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/10"
              >
                <img
                  className="h-12 object-cover"
                  src={card.img}
                  alt={card.title}
                />
                <div className="p-5">
                  <h2 className="text-xl">
                    {card.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
      </div>
      <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div>
    </>
  );
};
export default Skills;