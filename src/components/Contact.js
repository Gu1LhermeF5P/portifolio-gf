import React from 'react';
import { useState } from 'react';
import emailJs from '@emailjs/browser';
import { motion } from 'framer-motion';
//type animation
import { TypeAnimation } from 'react-type-animation';
//variants 
import { fadeIn } from '../variants'
const Contact = () => {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [menssage, setMenssage]= useState('');
  function sendEmail(e){
    e.preventDefault();
    if(name ===''|| email ==='' || menssage ===''){
      alert('Preencha os Campos');
      return;
    }
    const templateParams = {
      from_name: name,
      menssage: menssage,
      email: email
    }
    emailJs.send("service_4ekbwjg","template_e7sxt7v",templateParams,"sz2u6o20HjTy5RhEH")
    .then((response) => {
      console.log("Email envido", response.status, response.text)
      setName('')
      setEmail('')
      setMenssage('')
    },(err)=>{
      console.log("ERRO: ",err)
    })
  }
  return(
   <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*Text */}
          <motion.div 
           variants={fadeIn('right',0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false, amount:0.7}}
           className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase h2 text-red-600 font-medium mb-2
              tracking-wide'>
                Entre em Contato
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Vamos Trabalhar<br/>Juntos!</h2>
            </div>
          </motion.div>
          {/*form */}
          <motion.form
           variants={fadeIn('left',0.3)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false, amount:0.3}}
           className='flex-1 border-2 border-red-700 rounded-2xl flex flex-col gap-y-6
          pb-2 p-6 items-start bg-gray-600'
          onSubmit={sendEmail}>
            <input 
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-red-600 transition-all'
            type='text'
            value={name}
            onChange={(e) =>setName(e.target.value)}
            required
            placeholder='Digite seu Nome'
            />
             <input 
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-red-600 transition-all'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Digite seu E-mail'
            />
            <textarea 
            value={menssage}
            onChange={(e) => setMenssage(e.target.value)}
            className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-red-600 transition-all 
            resize-none mb-12'
            required
            placeholder='Deixe sua Mensagem'>
            </textarea>
            <button className='btn btn-lg'>Enviar Mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
    );
};

export default Contact;
