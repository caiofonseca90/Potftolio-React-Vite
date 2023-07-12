import { useState } from "react"
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const MenuHamburger = () => {
  const Menu = [
    {title:'Introdução',link:'#intro'},
    {title:'Sobre',link:'#about'},
    {title:'Skills',link:'#skills'},
    {title:'Projetos',link:'#projects'},
    {title:'Contato',link:'#contacts'},
  ];
  
  const [openNavBar, setOpenNavBar] = useState(false);
  
  function openNav () {
    setOpenNavBar(!openNavBar);
  }
  
  return (
    <div className="min-[780px]:hidden">
      {/* hamb area */}
      <div id="menuhamb" className="border bg-black">
        {openNavBar ? (
          // icon close menu
          <div className=" flex flex-col h-[100vh] w-screen modal items-end ">
            <AiOutlineClose
              onClick={openNav}
              className="text-[2rem] hover:scale-125 hover:text-purple-400 
              text-neutral-200 cursor-pointer top-10 fixed right-5 bg-transparent ease-out "
            />  
            <nav className="text-white w-[22rem] h-screen max-[510px]:w-screen max-[510px]:h-[40vh] text-center duration-200">
              <ul className="flex flex-col justify-center gap-8 relative top-[20%] ">
                {Menu.map( menu => (
                  // eslint-disable-next-line react/jsx-key
                  <a href={menu.link} key={menu.title}
                  className="hover:text-purple-400 font-semibold hover:scale-110 bg-transparent duration-200">
                    {menu.title}
                  </a>
                ))}
              </ul>
            </nav>
          </div>
        ) : (
          // icon open menu
          <AiOutlineMenu 
            onClick={openNav}
            className="text-[2rem] hover:scale-125 hover:text-purple-400 
            text-neutral-200 cursor-pointer top-10 fixed right-5 bg-transparent translate-x-0 ease-out "
          />
        )}
      </div>
    
    </div>
  )
}

export default MenuHamburger
