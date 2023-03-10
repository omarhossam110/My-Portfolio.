import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// AOS Animation css & Js Files
import Aos from "aos";
import "aos/dist/aos.css";


const Technical_skills = [
  {
    id: "s1",
    title: "HTML",
    percent: "94",
  },
  {
    id: "s2",
    title: "CSS",
    percent: "94",
  },
  {
    id: "s3",
    title: "JavaScript",
    percent: "85",
  },
  {
    id: "s4",
    title: "JQuery",
    percent: "87",
  },
  {
    id: "s5",
    title: "Sass",
    percent: "94",
  },
  {
    id: "s6",
    title: "Bootstrap",
    percent: "90",
  },
  {
    id: "s7",
    title: "ES6",
    percent: "90",
  },
  {
    id: "s8",
    title: "React",
    percent: "85",
  },
];

function App() {
  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <Intro></Intro>
      <About></About>
      <Skills TechnicalSkills={Technical_skills}></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
