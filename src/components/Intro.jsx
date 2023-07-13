import {FaHouseUser} from "react-icons/fa";

const IntroMe = () => {

  return (
    <section id="intro" className=" max-w-[50rem] min-w-[25rem] lg:max-w-[80%] lg:min-w-[45rem] justify-center text-start m-auto 
      flex flex-col xl:mt-20 h-[80vh]">
      {/* intro area */}

      <div className=" mb-10 border md:border-2 border-purple-300 w-28 md:w-36  flex justify-around p-2 rounded-3xl text-center ">
        <FaHouseUser className="text-[1rem] md:text-[1.2rem] text-white" />
        <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">Introdução</p>
      </div>
      
      <div className="p-3">
        <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[4.2rem] leading-normal">Olá, me chamo <span className="text-purple-300 font-bold">Caio</span> e sou Front-End Developer, 
        me aprofundando no universo do <span className="text-purple-300">UI</span>/<span className="text-purple-200">UX</span>-Designer.
        </p>
      </div>  
      
      <div className=" p-3 mt-4">
        <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-neutral-400">Fazendo o que ama da forma mais divertida possivel.</p>
      </div>
    </section>
  )
}

export default IntroMe;