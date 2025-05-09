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

const App = () =>{
  return (
    <>
    <Toaster position="top-right"/>
    <Navbar />
  <MainPage />
  <Skills />
  <Projects />
  <Certificates />
  <Contact />
  </>
  )
}
export default App;