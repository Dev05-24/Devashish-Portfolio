import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ id, title, img, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900 shadow-lg hover:shadow-2xl hover:shadow-white/10">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-50 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
      </div>
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-white transition-colors duration-700">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 opacity-75 transition-colors duration-700 delay-150 hover:text-white"
        >
          Link
          <ExternalLink className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
