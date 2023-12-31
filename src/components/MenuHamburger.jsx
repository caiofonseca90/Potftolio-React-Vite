import { useState } from "react"
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const MenuHamburger = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  
  const Menu = [
    {title:'Introdução',link:'#intro'},
    {title:'Sobre',link:'#about'},
    {title:'Skills',link:'#skills'},
    {title:'Projetos',link:'#projects'},
    {title:'Contato',link:'#contacts'},
  ];
  
  function openNav () {
    setOpenNavBar(!openNavBar);
  }
  function closeNav() {
    setOpenNavBar(false);
  }
  
  return (
    <div className="min-[780px]:hidden">
      {/* hamb area */}
      <div id="menuhamb">
        {openNavBar ? (
          // icon close menu
          <div className=" flex flex-col h-[100%] w-[100%] items-end modal ">
            <AiOutlineClose
              onClick={openNav}
              className="text-[1.7rem] hover:scale-125 hover:text-purple-400 
              text-neutral-200 cursor-pointer top-5 fixed right-5 bg-transparent ease-out z-50"
            />  
            <nav className="container text-white w-[22rem] h-screen 
            max-[510px]:w-screen max-[510px]:h-[40%] text-center duration-200 pt-28 shadow-md">
              <ul className="flex flex-col justify-center gap-8 relative pb-10">
                {Menu.map((menu,index) => (
                  <a 
                  onClick={closeNav}
                  href={menu.link} key={index}
                  className="hover:text-purple-400 font-semibold hover:scale-110 bg-transparent duration-200 ">
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
            className="text-[1.7rem] hover:scale-125 hover:text-purple-400 
            text-neutral-200 cursor-pointer top-5 fixed right-5 bg-transparent translate-x-0 ease-out "
          />
        )}
      </div>
    </div>
  )
}

export default MenuHamburger
