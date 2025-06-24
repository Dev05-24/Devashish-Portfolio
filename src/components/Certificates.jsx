import { useRef, useEffect } from "react";
import CertificateCard from "./CertificateCard";
const certificates = [
  {
    title: "TailwindCSS",
    issuer: "Udemy",
    date: "March 2025",
    image:
      "./images/certificates/tailwind.jpg",
    link: "https://www.udemy.com/certificate/UC-20c176fe-0ea3-4f70-927b-49e80b83eec4/",
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    date: "Jan 2025",
    image:
      "./images/certificates/web-development.jpg",
    link: "https://www.udemy.com/certificate/UC-e0ea110a-b24b-4cfc-9c6b-f76590b15462/",
  },
  {
    title: "React",
    issuer: "Udemy",
    date: "Nov 2022",
    image:
      "./images/certificates/React_JS.jpg",
    link: "https://www.udemy.com/certificate/UC-b4941001-078c-469e-9139-a37fdc89675d/",
  },
];
const Certificates = () => {
  const contentRef = useRef(null);
      const headingRef = useRef(null);
    
      useEffect(() =>{
        const animateElement = (ref) =>{
        const observer = new IntersectionObserver(
          ([entry]) => {
            const el = ref.current;
            if(!el) return;
    
            if(entry.isIntersecting){
              el.classList.add("scale-100","opacity-100","translate-y-0");
              el.classList.remove("scale-75","opacity-0","translate-y-5");
            }else{
               el.classList.add("scale-75","opacity-0","translate-y-5");
              el.classList.remove("scale-100","opacity-100","translate-y-0");
            }
          },
          {threshold : 0.4}
        );
        if(ref.current) observer.observe(ref.current);
    
        return () =>{
          if(ref.current) observer.unobserve(ref.current);
        };
      };
      const cleanup1 = animateElement(headingRef);
      const cleanup2 = animateElement(contentRef);
    
      return () =>{
        cleanup1?.();
        cleanup2?.();
      }
      },[]);
  return (
    <>
      <section className="py-20 mx-10" id="certificates">
        
      <div className="container mx-auto px-4 relative overflow-hidden py-3 lg:py-0">
        <div className="mb-16 text-center ">
          <h2 ref={headingRef} className="m-4 text-4xl font-extrabold text-teal-400 sm:text-5xl transform transition duration-700 ease-in-out scale-75 opacity-0 translate-y-5">
            Certifications
          </h2>
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
          <p className="mx-auto max-w-3xl text-lg text-white font-semibold">
            A collection of certifications that demonstrate my
            commitment to continuous learning and skill development in various
            areas of technology and design.
          </p>
        </div>
        <div ref={contentRef} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative overflow-hidden transform transition duration-700 ease-in-out scale-75 opacity-0 translate-y-5">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
export default Certificates;
