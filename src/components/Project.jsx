import ProjectCard from "./ProjectCard";
const projectsData = [
  { id: 1,title: "Currency-Convertor",img: "./images/projects/currency-convertor.png",link: "https://currency-convertor-ochre-nu.vercel.app/",},
  { id: 2, title: "Weather-App", img: "./images/projects/weather-app.png", link: "https://weather-app-rosy-eta-51.vercel.app/",},
  { id: 3, title: "Newsify", img: "./images/projects/newsify.png", link: "https://github.com/Dev05-24/Newsify",},
  { id: 4, title: "MyZone", img: "./images/projects/amazon-clone.png", link: "https://my-zone.vercel.app/",},
  { id: 5, title: "Text-Translator", img: "./images/projects/text-translator.png", link: "https://text-translator-kappa-three.vercel.app/",},
  { id: 6, title: "NoteApp", img: "./images/projects/note-app.png", link: "https://note-app-woad-gamma.vercel.app/",},
];
const Projects = () => {
  return (
    <>
      <section className="py-15" id="projects">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="text-5xl leading-[1.3] font-bold text-center transform transition-all duration-500 hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
              Projects
            </h1>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project}/>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div>
    </>
  );
};
export default Projects;
