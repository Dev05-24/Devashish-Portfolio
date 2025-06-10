/**
 * @copyright 2025 codewithdev
 * @license Apache-2.0
 */

// Components
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Sklls";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import { Toaster } from "react-hot-toast";
import About from "./components/About";

const App = () =>{
  return (
    <>
    <div className="min-h-screen w-full">
    <Toaster position="top-right"/>
    <Navbar />
  <MainPage />
  <About />
  <Skills />
  <Projects />
  <Certificates />
  <Contact />
  </div>
  </>
  )
}
export default App;