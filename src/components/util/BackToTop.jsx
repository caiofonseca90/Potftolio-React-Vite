import { useState, useEffect } from "react"
// import {AiOutlineToTop} from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    // evento que verifica se a pagina está acima ou abaixo de 100vh, caso sim exibe o btn
    useEffect(() => {
        const handleScroll = () => {
          setIsButtonVisible(window.scrollY > window.innerHeight);
        };
    
        handleScroll();
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    // ao clicar no icone, a pagina volta ao topo
    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    };

   return (
    <div className="bg-transparent ">
        {isButtonVisible && (
            <button className="cursor-pointer hover:delay-75 hover:transition-all ease-in-out hover:shadow font-bold
             bg-neutral-800 rounded-full p-2 px-2 shadow-lg "
            data-tooltip-id="tooltip" data-tooltip-content="Ao topo"
            onClick={scrollTop}>
                <FaArrowUp className="text-[.6rem] lg:text-[1rem] bg-transparent text-purple-500 hover:scale-105 " />
            </button>
        )}
    </div>
  )
}

export default BackToTop