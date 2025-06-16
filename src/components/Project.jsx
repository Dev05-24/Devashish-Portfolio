import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "E-comm",
    img: "./images/projects/e-comm.png",
    link: "https://e-comm-rsfy.vercel.app/",
    desc: "this is a e-comm website i created using react + vite and redux and tailiwn csswebsite i created using react + vite and redux and tailiwn css",
  },
  {
    id: 2,
    title: "Newsify",
    img: "./images/projects/newsify.png",
    link: "https://github.com/Dev05-24/Newsify",
  },
  {
    id: 3,
    title: "NoteApp",
    img: "./images/projects/note-app.png",
    link: "https://note-app-woad-gamma.vercel.app/",
  },
  {
    id: 4,
    title: "MyZone",
    img: "./images/projects/amazon-clone.png",
    link: "https://my-zone.vercel.app/",
  },
  {
    id: 5,
    title: "Weather-App",
    img: "./images/projects/weather-app.png",
    link: "https://weather-app-rosy-eta-51.vercel.app/",
  },
  {
    id: 6,
    title: "Text-Translator",
    img: "./images/projects/text-translator.png",
    link: "https://text-translator-kappa-three.vercel.app/",
  },
  {
    id: 7,
    title: "Currency-Convertor",
    img: "./images/projects/currency-convertor.png",
    link: "https://currency-convertor-ochre-nu.vercel.app/",
  },
];
const Projects = () => {
  return (
    <>
      <section className="py-20 mx-10" id="projects">
        <div className="container mx-auto px-4 relative overflow-hidden">
          <div
            className="
    absolute rounded-full bg-orange-400
    h-64 w-48 
    -top-10 -left-45
    md:h-72 md:w-[22rem] md:-top-40 md:-left-70
    lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-left-120
    xl:h-[19rem] xl:w-[34rem] xl:-top-30 xl:-left-100
    backdrop-blur-3xl
  "
            style={{ filter: "blur(200px)" }}
          ></div>
          <div
            className="
    absolute rounded-full bg-orange-400
    h-40 w-48 
    -top-30 -right-40
    md:h-72 md:w-[22rem] md:-top-40 md:-right-70
    lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-right-120
    xl:h-[19rem] xl:w-[34rem] xl:-top-70 xl:-right-90
    backdrop-blur-3xl
  "
            style={{ filter: "blur(200px)" }}
          ></div>
          <div className="m-5 lg:mb-16 text-center">
            <h1 className="text-4xl lg:text-5xl leading-[1.3] font-extrabold text-center transform transition-all duration-500 hover:scale-105 text-orange-400">
              Projects
            </h1>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      {/* <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div> */}
    </>
  );
};
export default Projects;
