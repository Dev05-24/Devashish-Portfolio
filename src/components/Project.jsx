import ProjectCard from "./ProjectCard";
const projectsData = [
  { id: 1,title: "Currency-Convertor",img: "./images/projects/currency-convertor.png",link: "https://currency-convertor-ochre-nu.vercel.app/",},
  { id: 2, title: "Weather-App", img: "./images/projects/weather-app.png", link: "https://weather-app-rosy-eta-51.vercel.app/",},
  { id: 3, title: "Newsify", img: "./images/projects/newsify.png", link: "https://newsify-eta.vercel.app/",},
  { id: 4, title: "TaskManager", img: "./images/projects/TaskManager.png", link: "https://task-managing-cyan.vercel.app/",},
  { id: 5, title: "Text-Translator", img: "./images/projects/text-translator.png", link: "https://text-translator-kappa-three.vercel.app/",},
];
const Projects = () => {
  return (
    <>
      <section className="py-15" id="projects">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold my-8 text-center transform transition-all duration-500 hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
              Projects
            </h1>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((cert, index) => (
              <ProjectCard key={index} {...cert}/>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div>
    </>
  );
};
export default Projects;
