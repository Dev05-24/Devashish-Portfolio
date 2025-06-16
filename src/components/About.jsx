import React, { useEffect, useRef } from "react";

const About = () => {
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
    <div
      className="mx-10 min-h-screen flex flex-col items-start justify-center gap-10 text-white"
      id="about"
    >
      <div className="relative overflow-hidden py-20 px-10">
        <h1 ref={headingRef} className="text-4xl lg:text-6xl font-extrabold text-orange-400 transform transition duration-700 ease-in-out scale-75 opacity-0 translate-y-5">
          About Me
        </h1>
        <div
          className="absolute rounded-full bg-orange-400 h-64 w-48 -top-10 -left-45 md:h-72 md:w-[22rem] md:-top-50 md:-left-60 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-left-120 xl:h-[19rem] xl:w-[34rem] xl:-top-60 xl:-left-90 backdrop-blur-3xl"
          style={{ filter: "blur(200px)" }}
        ></div>
        <div
          className="absolute rounded-full bg-orange-400 h-40 w-48  -top-30 -right-40 md:h-72 md:w-[22rem] md:-top-40 md:-right-70 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-right-120 xl:h-[19rem] xl:w-[34rem] xl:-top-70 xl:-right-90 backdrop-blur-3xl"
          style={{ filter: "blur(200px)" }}
        ></div>

        <div ref={contentRef} className="relative overflow-hidden transform transition duration-700 ease-in-out scale-75 opacity-0 translate-y-5">
          <div className="flex flex-col items-start gap-3 mb-5 mt-5">
            <p className="text-sm lg:text-lg font-bold">
              B.Tech in Computer Science
            </p>
            <div>
              <ul className="flex justify-around gap-5 list-disc px-5 font-semibold">
                <li>
                  <a href="https://saitm.ac.in/">SAITM</a>
                </li>
                <li>
                  <a href="" className="tracking-wider">
                    20<span className="text-orange-400 font-extrabold">19</span>-20
                    <span className="text-orange-400 font-extrabold">23</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-sm lg:text-xl font-semibold">
            <p>
              Hi,{" "}
              <span className="text-orange-400 font-extrabold">
                I'm Devashish Kunwar
              </span>
              , a passionate and creative Frontend Developer with a strong
              foundation in modern web technologies. I specialize in building
              responsive and engaging websites using{" "}
              <span className="text-orange-400 font-extrabold">
                {" "}
                HTML, CSS, JavaScript, React.js.
              </span>
            </p>

            <p>
              With hands-on experience in frameworks like{" "}
              <span className="text-orange-400 font-extrabold"> Tailwind CSS</span> and
              <span className="text-orange-400 font-extrabold">Bootstrap,</span> as well as
              backend basics with{" "}
              <span className="text-orange-400 font-extrabold">Node.js</span> and{" "}
              <span className="text-orange-400 font-extrabold">APIs,</span> I strive to deliver
              visually appealing, functional, and user-focused digital
              experiences.
            </p>

            <p>
              Currently diving deeper into the{" "}
              <span className="text-orange-400 font-extrabold">MERN stack,</span> I am building
              full-stack projects that combine clean UI design with robust
              backend systems — aiming to create impactful solutions that blend
              performance with creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;