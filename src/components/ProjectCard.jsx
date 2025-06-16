import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ id, title, img, link, desc }) => {
  return (
    <div className="grid grid-cols-2 items-center justify-center relative overflow-hidden rounded-xl bg-zinc-900 shadow-lg hover:shadow-2xl hover:shadow-white/10 hover:scale-105 duration-300 ease-in-out mx-3">
      <div className="aspect-vide overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-[100 w-[100 object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 p-2 rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-50 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
      </div>
      <div className="relative p-6 flex flex-col items-start">
        <h3 className="text-xl font-bold text-white transition-colors duration-700">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 mt-2 inline-flex items-center gap-2 text-lg font-semibold text-orange-400 opacity-75 transition-colors duration-700 group"
        >
          Link
          <ExternalLink className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
