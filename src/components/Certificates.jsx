import CertificateCard from "./CertificateCard";
const certificates = [
  {
    title: "Web Development",
    issuer: "Udemy",
    date: "Jan 2025",
    image:
      "./images/web-development.jpg",
    link: "https://www.udemy.com/certificate/UC-e0ea110a-b24b-4cfc-9c6b-f76590b15462/",
  },
  {
    title: "React",
    issuer: "Udemy",
    date: "Nov 2022",
    image:
      "./images/React_JS.jpg",
    link: "https://www.udemy.com/certificate/UC-b4941001-078c-469e-9139-a37fdc89675d/",
  },
];
const Certificates = () => {
  return (
    <>
      <section className="py-20" id="certificates">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            A collection of professional certifications that demonstrate my
            commitment to continuous learning and skill development in various
            areas of technology and design.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
      <div className="w-full h-0.5 bg-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.7)]"></div>
    </>
  );
};
export default Certificates;
