const Skills = () => {
  const cardsData = [
    { id: 1, title: "Html", img: "./images/html.png" },
    { id: 2, title: "Css", img: "./public/images/css3.svg" },
    { id: 3, title: "JS", img: "./public/images/javascript.svg" },
    { id: 4, title: "React", img: "./public/images/react.svg" },
    { id: 5, title: "NodeJS", img: "./public/images/nodejs.svg" },
    { id: 6, title: "Tailwind", img: "./public/images/tailwindcss.svg" },
  ];
  return (
    <>
      <div className="flex flex-col justify-center mb-20  ">
        <h1 className="text-center text-7xl mt-20 mb-20 font-semibold">Skills</h1>
        {/* <div className="skills-container flex items-center justify-center relative overflow-hidden mb-10 bg-blue-700"></div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-10">
            {cardsData.map((card) => (
              <div
                className="p-2 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden hover:scale-105 hover:bg-gray-50 shadow-[0px_0px_15px_rgba(255,255,255,0.7)] hover:text-black hover:font-bold
              bg-zinc-900/50 backdrop-blur-sm  transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/10"
              >
                <img
                  className="h-20 object-cover"
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
// bg-gray-500 p-2 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-50
//               hover:font-semibold
//               shadow-[0px_0px_20px_rgba(255,255,255,0.5)]
