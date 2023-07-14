import Herocontent from "./components/HeroContent"
import IntroMe from "./components/Intro"
import AboutMe from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import BackToTop from "./components/util/BackToTop"
import NavBar from "./components/util/NavBar"
import MenuHamburger from "./components/MenuHamburger"

import { Tooltip } from "react-tooltip";

function App() {
  
  return (
    <div className=" flex flex-col m-2">
      <Tooltip id="tooltip" />
      <div className="max-xl:mt-8 xl:fixed z-20">
        <Herocontent />
      </div>
      <div className="fixed right-0 z-30  ">
        <MenuHamburger />
      </div>
      <div className="fixed top-10 right-14 lg:top-80 bg-transparent z-30">
        <NavBar />
      </div>
      <div className="xl:ml-[21rem] 2xl:ml-[36rem] 2xl:w-[65vw]">
        <IntroMe />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div className="fixed z-30 right-5 bottom-5 bg-transparent">
        <BackToTop />
      </div>
    </div>
  )
}

export default App
