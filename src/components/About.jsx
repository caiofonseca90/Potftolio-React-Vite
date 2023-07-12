// import { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import {Fade, Flip} from "react-reveal";

const AboutMe = () => {
  
  return (
    <div>
      <section id="about" className="pt-28 max-w-[50rem] min-w-[25rem] lg:max-w-[80%] lg:min-w-[45rem] text-start mb-[5rem] m-auto flex flex-col ">
        <Fade slide duration="2000">
          <div className=" border md:border-2 border-purple-300 w-28 md:w-36 flex justify-evenly p-2 rounded-3xl text-center">
            <FaUser className="text-[1rem] md:text-[1.2rem] text-white" />
            <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">Sobre</p>
          </div>
        </Fade>

        <div className="p-3">
          <Fade right duration='1500'>
            <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-normal">
              <span className="text-purple-400">Criar</span>, <span className=" ">inovar</span> e aprimorar!
            </p>
          </Fade>
        </div>
        
        <div className=" p-3 mt-4">
          <Flip top duration='1900'>
            <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-neutral-400 leading-relaxed text-left">
              Formado em Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia, foi onde descobri durante o percurso que sempre me identifiquei mais com o lado visual e criativo do código, e a partir dai foi me despertando uma enorme curiosidade em me aprofundar nesse mundinho maravilhoso e divertido do desenvolvimento front-end.<br/>
              Com foco voltado a interface do usuário (UI) e desenvolvimento front-end, procuro proporcionar uma experiência única, atraente e que seja com uma usabilidade totalmente intuitiva ao usuário. Trabalho com as ferramentas e tecnologias atuais para que meus projetos sejam entregues com a maior qualidade possível levando aos usuários uma melhor navegação independente dos dispositivos usados com foco total em responsividade.
            </p>
          </Flip>
        </div>
    </section>  
    </div>
  )
}

export default AboutMe;