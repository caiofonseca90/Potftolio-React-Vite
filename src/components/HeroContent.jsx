import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Herocontent = () => {
  return (
    // container
    <div className="shadow-md rounded-3xl max-w-[50rem] min-w-[25 rem] m-auto mt-20 px-8 py-8 
    xl:w-[20rem] xl:mx-2 xl:mt-20 2xl:mt-auto 2xl:w-full 2xl:h-screen 2xl:mx-4 2xl:rounded-none">
      {/* header area Nome + função */}
      <div className="flex flex-row justify-between m-auto 2xl:mt-10">
        <h1 className="font-sans font-extrabold text-5xl text-gray-400 ">Caio</h1>
        <div className="flex flex-col w-full text-end">
          <span className="font-san font-medium text-1xl text-purple-300 2xl:text-2xl ">Front-End developer</span>
          <span className="font-san font- text-1xl text-purple-200 2xl:text-2xl">& UI Designer</span>
        </div>
      </div>
      {/* Area de foto */}
      <div className="mt-8 2xl:mt-12">
        <img className="rounded-3xl h-56 2xl:h-80 m-auto grayscale" src="../src/img/fotogit.jpg" alt="caio-fonseca" />
      </div>

      {/* area de contato */}
      <div className="mt-5 flex flex-col text-center 2xl:mt-8">
        <span className="text-gray-300 text-2xl xl:text-[1.3rem] justify-center ">caiofonseca1990@gmail.com</span>
        <span className="text-gray-300 text-2xl xl:text-[1.3rem] justify-center ">Lives in Santos-SP, Brazil</span>
        <span className="text-purple-300 text-4 justify-center pt-5 opacity-60 ">@ 2023 Caio, All Rights Reserved</span>
      </div>

      {/* Area socials */}
      <div className="flex flex-row m-auto mt-6 justify-evenly w-56 2xl:mt-12">
          <a href="https://instagram.com/_caioseca?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram className="text-gray-400 text-3xl 2xl:text-4xl cursor-pointer hover:text-purple-400 transition-all delay-75" /></a>
          <a href="https://www.linkedin.com/in/caio-fonseca-01251217b/"><FaLinkedin className="text-gray-400 text-3xl 2xl:text-4xl cursor-pointer hover:text-purple-500 transition-all delay-75" /></a>
          <a href="https://github.com/caiofonseca90/"><FaGithub className="text-gray-400 text-3xl cursor-pointer 2xl:text-4xl hover:text-purple-400 transition-all delay-75" /></a>
      </div>

      {/* button hire-me */}
      <div className="mt-10 2xl:mt-36">
        <a href="#contacts">
        <button  className="bg-purple-400 rounded-full text-center text-2xl font-bold cursor-pointer h-14 w-full shadow-md
            hover:border-2 hover:border-purple-400 hover:bg-transparent hover:text-purple-500 transition-all delay-75">
            Hire-me
          </button>
        </a>
          
      </div>  
    </div>
  )
};

export default Herocontent;

  