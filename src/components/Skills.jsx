import { GiSkills } from "react-icons/gi"
import { SiTailwindcss } from "react-icons/si"
import { FaBootstrap, FaFigma, FaJs, FaReact } from "react-icons/fa"

const Skills = () => {
  const Skills = [
    {title:'React Js',icon:<FaReact />,effect:'left' },
    {title:'Javascript',icon:<FaJs />,effect:'top'},
    {title:'Tailwind',icon:<SiTailwindcss />,effect:'bottom'},
    {title:'BootStrap',icon:<FaBootstrap />,effect:'right'},
    {title:'Figma',icon:<FaFigma />,effect:'right'},
  ];

  return (
    <section id="skills" className=" pt-28 max-w-[50rem] min-w-[25rem] lg:max-w-[80%] lg:min-w-[45rem] h-[70vh] text-start m-auto flex flex-col">

      <div className=" border md:border-2 border-purple-300 w-28 md:w-36 flex justify-evenly p-2 rounded-3xl text-center  ">
        <GiSkills className="text-[1rem] md:text-[1.2rem] text-white" />
        <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">Skills</p>
      </div>


      <div className="p-3">
        <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-normal">
          Minhas principais <span className="text-purple-400">skills</span>. 
        </p>
      </div>

      {/* Area icons Skills */}

      <div className=" p-3 mt-10 md:flex md:flex-row md:justify-around md:items-center 
      grid grid-cols-3 grid-rows-2 grid-flow-row sm:gap-4 gap-8">
      
        {Skills.map((itens ,index) => (
          <div key={index} className="grid gap-1 sm:gap-5 text-center md:flex md:flex-col justify-center hover:scale-110 duration-200 ease-in-out">
            <span key={index}>
            <span className="text-neutral-400 text-[4rem] sm:text-[8rem] hover:text-purple-400 hover:delay-75 delay-75 hover:transition-all cursor-pointer ">
              {itens.icon}
            </span>
            <label className="text-neutral-400 md:text-[1.2rem] font-bold">{itens.title}</label>  
            </span>
          </div>
        ))
        }
      </div>
      
    </section>  
  )
}

export default Skills
