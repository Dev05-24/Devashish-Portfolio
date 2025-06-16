import React, { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_zcn6elj",
      "template_tnsh68b",
      formref.current,
      "44o9e7JfPfHXdO8rX"
    ).then(()=>{
      toast.success("Message sent successfully");
      setIsSubmitted(true);
      setFormState({name:"", email:"", message:""})
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch(()=>{
      toast.error("Failed to send message. Try again");
    });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <div className="flex items-center sm:items-start relative py-20 min-h-screen mx-10 " id="contact">
        <Toaster position="top-right"/>
      <div className="relative text-center overflow-hidden w-full">
        <div>
          <h1 className="text-xl lg:text-3xl font-semibold my-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
          GET IN TOUCH
          </h1>
          <div className="absolute rounded-full bg-orange-400 h-64 w-48 -top-10 -left-45 md:h-72 md:w-[22rem] md:-top-40 md:-left-70
                  lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-left-120 xl:h-[19rem] xl:w-[34rem] xl:-top-30 xl:-left-100 backdrop-blur-3xl animate-pulse"
            style={{ filter: "blur(200px)" }}
          ></div>
          <div
        className="absolute rounded-full bg-orange-400 h-64 w-48 -top-30 -right-40 md:h-72 md:w-[22rem] md:-top-40 md:-right-70 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-right-120 xl:h-[19rem] xl:w-[34rem] xl:-top-70 xl:-right-90 backdrop-blur-3xl animate-pulse"
        style={{ filter: "blur(200px)" }}
          ></div>
          <h1 className="text-4xl lg:text-7xl text-orange-400 font-extrabold mt-10 transform transition-all duration-500 hover:scale-110 bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg animate-bounce">Reach Out</h1>
          <div className="">
            <p className="text-sm lg:text-xl lg:w-xl mx-auto text-white">Whether you're passionate about crafting seamless user experiences, building intelligent web applications, or exploring the intersection of AI and frontend development, I’m always open to connecting. Let’s collaborate to create impactful solutions and push the boundaries of innovation through clean code, smart design, and emerging technologies.</p>
          </div>
          <button className="px-6 py-4 rounded-3xl mt-10 font-extrabold border-2 border-orange-400 text-white cursor-pointer hover:bg-orange-400 transform transition hover:scale-110 ease-in-out duration-300 text-sm lg:text-lg">Contact Me</button>

        <div className="flex items-center mt-10 gap-10 justify-center">
            <a
              href="https://www.linkedin.com/in/devashish-kunwar-533895177"
              target="_blank"
            >
              <i className="fa-brands animate-bounce fa-linkedin text-3xl transition-transform transform hover:scale-125 duration-300 text-blue-500"></i>
            </a>
            <a href="https://github.com/Dev05-24" target="_blank">
              <i className="fa-brands text-blue-50 fa-github text-3xl animate-bounce transition-transform transform duration-300 hover:scale-125"></i>
            </a>
            <a href="https://leetcode.com/u/DEV0902/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8 fill-current text-orange-500 duration-300 text-3xl animate-bounce transition-transform transform hover:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
                  <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
                  <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
                  <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
                </svg>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>     
  );
}

export default App;

{/* <form
        ref={formref}
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.07)] transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/10"
        >
          <div className="space-y-2 group">
            <label
              htmlFor="name"
              className="block text-sm font-medium transition-all duration-300 group-hover:text-white text-gray-300 tracking-wide"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 placeholder-gray-500 hover:border-white/30"
              placeholder="Enter Name"
            />
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="email"
              className="block text-sm font-medium transition-all duration-300 group-hover:text-white text-gray-300 tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 placeholder-gray-500 hover:border-white/30"
              placeholder="abc@example.com"
            />
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="message"
              className="block text-sm font-medium transition-all duration-300 group-hover:text-white text-gray-300 tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-500 hover:border-white/30"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 px-4 rounded-md font-medium flex items-center justify-center space-x-2 transform transition-all duration-500 hover:scale-[1.02] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] relative overflow-hidden group/button"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-500" />
            {isSubmitted ? (
              <>
                <CheckCircle className="w-5 h-5 transition-transform duration-500 rotate-0 group-hover/button:rotate-12" />
                <span className="tracking-wide">Sent!</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 transition-transform duration-500 rotate-0 group-hover/button:rotate-12" />
                <span className="tracking-wide">Send Message</span>
              </>
            )}
          </button>
        </form> */}