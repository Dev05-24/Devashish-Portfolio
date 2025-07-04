import React from "react";
import { ExternalLink } from "lucide-react";

const CertificateCard = ({ title, issuer, date, image, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition-all duration-700 
    hover:shadow-2xl hover:shadow-white/10">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full scale-100 object-contain transition-all duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-50 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
      </div>
      <div className="relative p-6">
        <h3 className="transform text-xl font-bold text-white transition-all duration-700 ">
          {title}
        </h3>
        <p className="mt-2 transform text-sm font-medium text-gray-400 transition-all duration-700 delay-75  group-hover:text-gray-300">
          {issuer}
        </p>
        <p className="mt-1 transform text-sm text-gray-500 transition-all duration-700 delay-100 ">
          {date}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex transform items-center gap-2 text-sm font-medium text-white/70 opacity-75 transition-all duration-700 delay-150 hover:text-white group-hover:opacity-100"
        >
          View Certificate
          <ExternalLink className="h-4 w-4 transform transition-transform duration-700 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
