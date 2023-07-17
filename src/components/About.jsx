import { FaUser } from "react-icons/fa";


const AboutMe = () => {
  
  return (
    <div>
      <section id="about" className=" pt-10 lg:pt-28 max-w-[50rem] min-w-[15rem] lg:max-w-[80%] lg:min-w-[45rem] text-start mb-[5rem] m-auto flex flex-col">
        <div className=" border md:border-2 border-purple-300 w-28 md:w-36 flex justify-evenly p-2 rounded-3xl text-center">
          <FaUser className="text-[1rem] md:text-[1.2rem] text-white" />
          <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">Sobre</p>
        </div>
        <div className="p-3">
          <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-normal">
            <span className="text-purple-400">Criar</span>, <span className=" ">inovar</span> e aprimorar!
          </p>
        </div>
        <div className=" px-5 mt-4">
          <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-neutral-400 leading-relaxed text-">
            Formado em Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia, foi onde descobri durante o percurso que sempre me identifiquei mais com o lado visual e criativo do código, e a partir dai foi me despertando uma enorme curiosidade em me aprofundar nesse mundinho maravilhoso e divertido do desenvolvimento front-end.<br/>
            Com foco voltado a interface do usuário (UI) e desenvolvimento front-end, procuro proporcionar uma experiência única, atraente e que seja com uma usabilidade totalmente intuitiva ao usuário. Trabalho com as ferramentas e tecnologias atuais para que meus projetos sejam entregues com a maior qualidade possível levando aos usuários uma melhor navegação independente dos dispositivos usados com foco total em responsividade.
          </p>
        </div>
    </section>  
    </div>
  )
}

export default AboutMe;