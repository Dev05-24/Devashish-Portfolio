import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // <div className="min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="flex items-center justify-center relative p-6" id="contact">
      {/* Background decoration */}
      <div className="w-full max-w-lg relative">

        <h1 className="text-5xl font-bold my-8 text-center transform transition-all duration-500 hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
          GET IN TOUCH
        </h1>

        <form
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
        </form>

    
      </div>
      </div>      

    // </div>
  );
}

export default App;
