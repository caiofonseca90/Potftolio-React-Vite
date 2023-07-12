import { FaBuffer, FaHouseUser,FaUser } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import {GiSkills} from "react-icons/gi";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
 
  const Menu = [
    {title:'Introdução', icon:<FaHouseUser />, link:'#intro'},
    {title:'Sobre', icon:<FaUser />, link:'#about'},
    {title:'Skills', icon:<GiSkills />, link:'#skills'},
    {title:'Projetos', icon:<FaBuffer />, link:'#projects'},
    {title:'Contatos', icon:<AiOutlineMail />, link:'#contacts'},
  ];
  
  return (
    
    <nav className="gap-5 flex-row lg:flex-col max-[780px]:rounded-full max-[780px]:hidden icons">
      <Tooltip id="tooltip" />    
      {Menu.map((menu,index  )=> (
        <a href={menu.link} key={index} 
          className="lg:text-[1.7rem] hover:text-purple-400 hover:scale-125 duration-200">
          <span 
          data-tooltip-id="tooltip"
          data-tooltip-content={menu.title}
          >
            {menu.icon}
          </span>
        </a>
      ))
      }
    </nav>
  )
};

export default NavBar;