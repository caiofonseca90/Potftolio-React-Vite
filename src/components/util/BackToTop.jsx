import { useState, useEffect } from "react"
import {AiOutlineToTop} from "react-icons/ai";

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            window.screenY > 100 ? setBackToTop(true) : setBackToTop(false);
        })
    },[])
    
    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    };

   return (
    <div className="p-4 cursor-pointer bg-transparent ">
        {backToTop || (
            <button className=" py-4 px-4 rounded-full cursor-pointer
            hover:delay-75 hover:transition-all hover:shadow font-bold "
            data-tooltip-id="tooltip" data-tooltip-content="Ao topo"
            onClick={scrollTop}>
                <AiOutlineToTop className="text-[1.6rem] lg:text-[2.3rem] bg-transparent text-purple-500 hover:scale-105"/>
            </button>
        )}
    </div>
  )
}

export default BackToTop