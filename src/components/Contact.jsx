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
          <h1 className="text-xl lg:text-3xl font-semibold my-5 transform transition-all duration-500 hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
          GET IN TOUCH
          </h1>
          <div className="absolute rounded-full bg-orange-400 h-64 w-48 -top-10 -left-45 md:h-72 md:w-[22rem] md:-top-40 md:-left-70
                  lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-left-120 xl:h-[19rem] xl:w-[34rem] xl:-top-30 xl:-left-100 backdrop-blur-3xl"
            style={{ filter: "blur(200px)" }}
          ></div>
          <div
        className="absolute rounded-full bg-orange-400 h-40 w-48 -top-30 -right-40 md:h-72 md:w-[22rem] md:-top-40 md:-right-70 lg:h-[15rem] lg:w-[32rem] lg:-top-40 lg:-right-120 xl:h-[19rem] xl:w-[34rem] xl:-top-70 xl:-right-90 backdrop-blur-3xl"
        style={{ filter: "blur(200px)" }}
          ></div>
          <h1 className="text-4xl lg:text-7xl text-orange-400 font-extrabold mb-10 transform transition-all duration-500 hover:scale-105 bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">Reach Out</h1>
          <div className="">
            <p className="text-sm lg:text-xl lg:w-xl mx-auto text-white">Whether you're passionate about crafting seamless user experiences, building intelligent web applications, or exploring the intersection of AI and frontend development, I’m always open to connecting. Let’s collaborate to create impactful solutions and push the boundaries of innovation through clean code, smart design, and emerging technologies.</p>
          </div>
          <button className="px-6 py-4 border-white rounded-3xl mt-10 font-extrabold bg-orange-400 text-white cursor-pointer hover:scale-110 ease-in-out duration-300 text-sm lg:text-lg">Contact Me</button>

        <div className="flex items-center mt-10 gap-10 justify-center">
            <a
              href="https://www.linkedin.com/in/devashish-kunwar-533895177"
              target="_blank"
            >
              <i className="fa-brands animate-bounce fa-linkedin text-3xl transition-transform transform hover:scale-110 text-blue-500"></i>
            </a>
            <a href="https://github.com/Dev05-24" target="_blank">
              <i className="fa-brands text-blue-50 fa-github text-3xl animate-bounce transition-transform transform hover:scale-110"></i>
            </a>
            <a href="https://leetcode.com/u/DEV0902/" target="_blank">
              <i className="fa-brands fa-code text-3xl animate-bounce transition-transform transform hover:scale-110"></i>
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