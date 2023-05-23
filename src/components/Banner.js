import React from 'react';
//Link
import { Link } from 'react-scroll';
//imagens
import Image from '../assets/avatar2.svg';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants 
import { fadeIn } from '../variants';
const Banner = () => {
  return( 
    <section className='min-h-[85vh] lg:;min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          {/*texto */}
          <div className='flex-1 text-center font-secundary lg:text-left'>
          <motion.h1 
              variants={fadeIn('up',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false, amount:0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                Guilherme <span>Francisco</span>
            </motion.h1>
         <motion.div 
              variants={fadeIn('up',0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once:false, amount:0.7}} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mi-4'> Sou </span>
                <TypeAnimation sequence={[
                  'Desenvelvedor',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className='text-red-600'
                wrapper='span'
                repeat={Infinity}
              />
          </motion.div>
          <motion.p 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}} 
            className='mb-8 max-w-lg mx-auto text-slate-700 font-semibold lg:mx-0 '> 
              Sou um profissional fascinado por Tecnologia e Designe.
          </motion.p>
          <motion.div 
            variants={fadeIn('up',0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link  to='contact'activeClass='active' smooth={true} spy={true}>
              <button className='btn btn-lg'>Contato</button>
            </Link>
            <a href='#'className='text-red-600 btn-link font-medium text-[26px]'>Portifólio</a>
          </motion.div>
          </div>
          <motion.div 
            variants={fadeIn('down',0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            className='hidden lg:flex flex-1 max-w-[550px] lg:max-[482px]'>
            {/*imagem */}
            <img src={Image} width={'550'} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
