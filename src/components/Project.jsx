import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "E-comm",
    img: "/images/projects/e-comm.png",
    link: "https://e-comm-rsfy.vercel.app/",
    desc: ["1. Developed a fully functional e-commerce website using React + Vite",
           "2. Integrated Redux for global state management (e.g., cart functionality)",
           "3. Styled using Tailwind CSS for a clean, responsive UI",
           "4. Features include product listings, add/remove from cart, and cart preview",
           "5. Deployed live using Vercel",]
  },
  {
    id: 2,
    title: "Newsify",
    img: "/images/projects/newsify.png",
    link: "https://github.com/Dev05-24/Newsify",
    desc: ["1. Built a modern news web app using React + Vite",
           "2. Fetched real-time news articles using News API",
           "3. Implemented category-based filtering (e.g., technology, sports, health)",
           "4. Designed a responsive UI using Tailwind CSS",
           "5. Handled loading states and error messages for better UX",
           "6. Hosted live on GitHub Pages / Vercel",
    ]
  },
  {
    id: 3,
    title: "NoteApp",
    img: "/images/projects/note-app.png",
    link: "https://note-app-woad-gamma.vercel.app/",
    desc: ["1. Developed a full-featured note-taking app using React + Vite",
           "2. Used Redux for managing global note state (add/edit/delete)",
           "3. Used localStorage to persist notes across sessions",
           "4. Integrated React Router for navigation between views",
           "5. Enabled note search and filtering functionality",
           "6. Designed a clean, responsive UI with Tailwind CSS",
           "7. Deployed on Vercel for live access",
    ]
  },
  {
    id: 4,
    title: "MyZone",
    img: "/images/projects/amazon-clone.png",
    link: "https://my-zone.vercel.app/",
    desc: ["1. Created a UI clone of Amazon using HTML, CSS, and JavaScript",
           "2. Recreated core pages like homepage, navbar, and product grid",
           "3. Implemented responsive layout to support mobile and desktop views",
           "4. Focused on pixel-perfect design for visual similarity to Amazon",
           "5. Used vanilla JavaScript for interactive elements (e.g., navbar, cart icon)",
           "6. Hosted the project live on Vercel",
    ]
  },
  {
    id: 5,
    title: "Weather-App",
    img: "/images/projects/weather-app.png",
    link: "https://weather-app-rosy-eta-51.vercel.app/",
    desc: ["1. Developed a real-time weather app using React + Vite",
           "2. Integrated OpenWeatherMap API to fetch current weather data",
           "3. Users can search by city to view temperature, humidity, and conditions",
           "4. Handled loading states and error messages for better UX",
           "5. Styled with Tailwind CSS for a modern and responsive design",
           "6. Deployed live using Vercel",
    ]
  },
];
const Projects = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const animateElement = (ref) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const el = ref.current;
          if (!el) return;

          if (entry.isIntersecting) {
            el.classList.add("scale-100", "opacity-100", "translate-y-0");
            el.classList.remove("scale-75", "opacity-0", "translate-y-5");
          } else {
            el.classList.add("scale-75", "opacity-0", "translate-y-5");
            el.classList.remove("scale-100", "opacity-100", "translate-y-0");
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };
    const cleanup1 = animateElement(headingRef);

    return () => {
      cleanup1?.();
    };
  }, []);
  return (
    <>
      <section className="py-20 mx-10" id="projects">
        <div className="container mx-auto px-4 relative overflow-hidden">
          <div
            className="
    absolute rounded-full bg-teal-400
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
    absolute rounded-full bg-teal-400
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
            <h1
              ref={headingRef}
              className="text-4xl lg:text-5xl leading-[1.3] font-extrabold text-center transform transition-all duration-500 hover:scale-105 text-teal-400"
            >
              Projects
            </h1>
          </div>
          <div
            className="flex flex-col gap-5 items-center justify-center px-3 py-4"
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
