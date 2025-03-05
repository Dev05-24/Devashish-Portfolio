import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  { id: 1,title: "Currency-Convertor",img: "./images/currency-convertor.png",link: "https://currency-convertor-ochre-nu.vercel.app/",},
  { id: 2, title: "Weather-App", img: "./images/weather-app.png", link: "https://weather-app-rosy-eta-51.vercel.app/",},
  { id: 3, title: "Newsify", img: "./images/newsify", link: "https://newsify-eta.vercel.app/"},
];
const Projects = () => {
  return (
    <>
      {/* <section id="projects" className="py-15 px-4 md:px-8 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {ProjectsData.map((project) => (
              <div
                key={project}
                className="bg-secondary-light rounded-xl overflow-hidden hover:scale-105 transition-transform animate-slide-up shadow-[0px_0px_20px_rgba(255,255,255,0.5)]"
                style={{ animationDelay: `${(project - 1) * 0.2}s` }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A brief description of the project and the technologies used
                    in its development.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-primary hover:text-primary-dark group"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
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
