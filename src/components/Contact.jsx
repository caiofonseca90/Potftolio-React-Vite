import { useState } from "react";
import {AiOutlineMail} from "react-icons/ai";

import emailjs from '@emailjs/browser';

const Contact = () => {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

function sendEmal(e){
  e.preventDefault();

  if( name ==='' || phone ==='' || email === '' || message === ''){
    alert('Prencha todos os campos!')
    return;
  }
  alert('ENVIADO TESTE');

  const templateParams ={
    from_name: name,
    message: message,
    email: email,
    phone: phone,
  }

  emailjs.send("service_bspffpc","template_bignr4m", templateParams,"vyAN4gbzM4W-5OdzS")
  .then((response) => {
    console.log('Email Enviado', response.status, response.text)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  },(err)=>{
    console.log('ERRO', err)
  })
}
  
  return (
    <section id="contacts" className=" pt-16 max-w-[40rem] min-w-[15rem] lg:max-w-[80%] lg:min-w-[45rem] text-start mt-[5rem] m-auto flex flex-col mb-[5rem]">
      <div className=" border md:border-2 border-purple-300 w-28 md:w-36 flex justify-evenly p-2 rounded-3xl text-center h-full">
        <AiOutlineMail className="text-[1rem] md:text-[1.2rem] text-white" />
        <p className="text-[.8rem] md:text-[1rem] text-white font-semibold">Contato</p>
      </div>
      <div className="p-3">
        <p className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-normal">
        Vamos trabalhar<span className="text-purple-400"> juntos</span> ?
        </p>
      </div>
      <form className="flex flex-col justify-center" onSubmit={sendEmal}>
        <div className=" grid grid-flow-col grid-cols-2 grid-rows-2  gap-[3rem] p-3">
            <div className="flex flex-col gap-3">
                <label htmlFor="namePerson" className="custom-label">
                  Nome Completo  <span className="text-purple-300">*</span>
                </label>
                <input name="namePerson"
                type="text" 
                placeholder="Nome Completo" 
                className="custom-input-name" 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="telPhone" className="custom-label">
                  Telefone <span className="text-purple-300 text-[1rem]">(opcinal)</span>
                </label>
                <input name="telPhone" 
                type="text" 
                placeholder="Seu número" 
                className="custom-input-phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-3 ">
                <label htmlFor="email" className="custom-label">
                  E-mail <span className="text-purple-300 text-[1rem]">*</span>
                </label>
                <input name="email" 
                type="text" 
                placeholder="E-mail" 
                className="custom-input-email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>

        <div className="flex flex-col gap-3 col-span-2  mt-[3rem] p-3">
            <label htmlFor="textarea" className="custom-label">
              Mensagem <span className="text-purple-300 text-[1rem]">*</span>
            </label>
            <textarea name="textarea" 
            type="text" 
            placeholder="Em que posso lhe ajudar?" rows='5'
            className="custom-input-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>
        </div>

        <span className="h-[.45px] rounded-full w-full bg-purple-300 "></span>
        <button className="custom-btn-contact">Fale comigo</button>
      </form>
    </section>  
  )
}

export default Contact