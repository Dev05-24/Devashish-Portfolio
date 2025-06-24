import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ id, title, img, link, desc }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -400 }} 
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} 
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 60,
        damping: 18,
      }}
      className="flex items-center justify-center gap-12 relative overflow-hidden rounded-xl bg-zinc-900 duration-100 ease-in-out mx-3 w-[90%]"
    >
      <div className="aspect-video overflow-hidden w-1/3">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 p-2 rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-50 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
      </div>
      <div className="relative p-6 flex flex-col items-start w-2/3 h-full text-white">
        <h3 className="text-xl font-bold text-white transition-colors duration-700">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 mt-2 inline-flex items-center gap-2 text-lg font-bold text-teal-400 opacity-75 transition-colors group"
        >
          Link
          <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-2 duration-300" />
        </a>
        <p>
          {Array.isArray(desc) ? (
            <ul className="list-disc pl-4 text-lg space-y-1">
              {desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{desc}</p>
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
