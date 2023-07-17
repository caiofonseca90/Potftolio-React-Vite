import { FaBuffer } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="pt-28 max-w-[50rem] min-w-[15rem] lg:max-w-[80%] lg:min-w-[45rem] text-start m-auto flex flex-col">

        <div className=" border md:border-2  border-purple-300 w-28 md:w-36 flex justify-evenly p-2 rounded-3xl text-center  ">
        <FaBuffer className="text-[1rem] md:text-[1.2rem] text-white" />
            <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">
                Projetos
            </p>
        </div>
    {/* Title section */}
        <div className="p-3">
            <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-normal">
            Meus <span className="text-purple-400">projetos</span>. 
            </p>
        </div>
    {/* area projecsts */}
    
        <div className="md:grid md:grid-rows-3 md:grid-cols-2 md:gap-1 flex flex-col justify-center gap-3 md:max-w-[1200px] ">
            {/* grid1 */}
            <div className="col-span-2 bg-transparent p-1 ">
                <div className="flex flex-col justify-center overflow-hidden rounded-2xl">
                    <img className="hover:scale-105 opacity-60 hover:opacity-100 hover:transition-all delay-75 bg-cover bg-no-repeat h-[310px] md:max-w-full md:h-[410px] relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNa6chsV_gCPqNdiRNVxu2sa3y0J2H45fc6A0p9oN&s" alt="prj1" />
                </div>
                <div className="flex flex-row bg-transparent text-neutral-300 justify-around w-[150px] relative top-[-80px] pl-14">
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer">GitHub</span>
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer">Deploy</span>
                </div>
            </div>
            
            {/* grid 2 */}
            <div className=" bg-transparent p-1 ">
                <div className="flex flex-col justify-center overflow-hidden rounded-2xl">
                    <img className=" bg-cover hover:scale-105 opacity-60 hover:opacity-100 hover:transition-all delay-75 bg-no-repeat h-[310px]  md:h-[420px] relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNa6chsV_gCPqNdiRNVxu2sa3y0J2H45fc6A0p9oN&s" alt="prj1" />
                </div>
                <div className="flex flex-row bg-transparent text-neutral-300 justify-around w-[150px] relative top-[-80px] pl-14">
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer ">GitHub</span>
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer ">Deploy</span>
                </div>
            </div>
            {/* grid 3 */}
            <div className=" bg-transparent p-1  ">
                <div className="flex flex-col justify-center overflow-hidden rounded-2xl">
                    <img className=" bg-cover hover:scale-105 opacity-60 hover:opacity-100 hover:transition-all delay-75 bg-no-repeat h-[310px]  md:h-[420px] relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNa6chsV_gCPqNdiRNVxu2sa3y0J2H45fc6A0p9oN&s" alt="prj1" />
                </div>
                <div className="flex flex-row bg-transparent text-neutral-300 justify-around w-[150px] relative top-[-80px] pl-14">
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer">GitHub</span>
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer">Deploy</span>
                </div>
            </div>
            {/* grid 4 */}
            <div className="col-span-2 bg-transparent p-1 md:max-w-[1200px] ">
                <div className="flex flex-col justify-center overflow-hidden rounded-2xl">
                    <img className=" bg-cover hover:scale-105 opacity-60 hover:opacity-100 hover:transition-all delay-75 bg-no-repeat h-[310px] md:max-w-full md:h-[420px] relative" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNa6chsV_gCPqNdiRNVxu2sa3y0J2H45fc6A0p9oN&s" alt="prj1" />
                </div>
                <div className="flex flex-row bg-transparent text-neutral-300 justify-around w-[150px] relative top-[-80px] pl-14">
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer">GitHub</span>
                    <span className="p-4 rounded-full m-1 bg-neutral-800-400 text-purple-400 font-bold shadow-2xl cursor-pointer">Deploy</span>
                </div>
            </div>
        </div>
    
    </section>  
  )
};

export default Projects;