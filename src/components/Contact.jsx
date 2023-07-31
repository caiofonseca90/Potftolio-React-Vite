import {AiOutlineMail} from "react-icons/ai";

const Contact = () => {

  
  return (
    <section id="contacts" className=" pt-16 max-w-[40rem] min-w-[15rem] lg:max-w-[80%] lg:min-w-[45rem] text-start mt-[5rem] m-auto flex flex-col mb-[5rem]">
      <div className=" border md:border-2 border-purple-300 w-28 md:w-36 flex justify-evenly p-2 rounded-3xl text-center h-full">
        <AiOutlineMail className="text-[1rem] md:text-[1.2rem] text-white" />
        <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">Contato</p>
      </div>
      <div className="p-3">
        <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-normal">
        Precisando de uma<span className="text-purple-400"> ajudinha</span> ?
        </p>
      </div>
      <form className="flex flex-col justify-center">
        <div className=" grid grid-flow-col grid-cols-2 grid-rows-2  gap-[3rem] p-3">
            <div className="flex flex-col gap-3">
                <label htmlFor="namePerson" className="text-neutral-100 text-[1rem] md:text-[1.2rem]">Nome Completo  <span className="text-purple-300">*</span></label>
                <input name="namePerson"
                type="text" 
                placeholder="Nome Completo" 
                className="text-purple-400 placeholder:text-purple-400 placeholder:opacity-60 
                pt-1 text-[.9rem] md:text-[1.1rem] outline-none"  />
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="telPhone" className="text-neutral-100 text-[1rem] md:text-[1.2rem]">Telefone <span className="text-purple-300 text-[1rem]">(opcinal)</span></label>
                <input name="telPhone" 
                type="text" 
                placeholder="Seu número" 
                className="text-purple-400 placeholder:text-purple-400 placeholder:opacity-60 
                pt-1 text-[.9rem] md:text-[1.1rem] outline-none"  />
            </div>
            <div className="flex flex-col gap-3 ">
                <label htmlFor="email" className="text-neutral-100 text-[1rem] md:text-[1.2rem]">E-mail <span className="text-purple-300 text-[1rem]">*</span></label>
                <input name="email" 
                type="text" 
                placeholder="E-mail" 
                className="text-purple-400 placeholder:text-purple-400 placeholder:opacity-60 
                pt-1 text-[.9rem] md:text-[1.1rem] outline-none"  />
            </div>
        </div>
        <div className="flex flex-col gap-3 col-span-2  mt-[3rem] p-3">
            <label htmlFor="textarea" className="text-neutral-100 text-[1rem] md:text-[1.2rem]">Mensagem <span className="text-purple-300 text-[1rem]">*</span></label>
            <textarea name="textarea" 
            type="text" 
            placeholder="Em que posso lhe ajudar?" rows='5'
            className="text-purple-400 placeholder:text-purple-400 placeholder:opacity-60 
            pt-1 text-[.9rem] md:text-[1.1rem] outline-none resize-none "  />
        </div>
        <span className="h-[.45px] rounded-full w-full bg-purple-300 "></span>
        <button className="bg-purple-400 rounded-full text-center text-[1.2rem] md:text-2xl font-bold ml-3
          cursor-pointer h-12 md:h-16 w-[12rem] md:w-[15rem] mt-[2rem] shadow-md hover:border-2 hover:border-purple-400 
          hover:bg-transparent hover:text-purple-500 transition-all delay-75">
              Fale comigo
        </button>
      </form>

    </section>  
  )
}

export default Contact