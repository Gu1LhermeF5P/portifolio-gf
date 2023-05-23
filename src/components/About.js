import React from 'react';
//Link
import { Link } from 'react-scroll';
//countup
import CountUp from'react-countup';
//intersection onbserver hook
import { UseInterview, useInView } from'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants'
const About = () => {
  const [ref,inView] = useInView ({
    threshold:0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
           {/*Imagem*/}
           <motion.div 
             variants={fadeIn('right',0.3)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once:false, amount:0.7}}  
            className='flex-1 bg-about bg-contain bg-no-repeat h-[550px]
            mix-blend-color-dodge bg-top'>
          </motion.div>
          <div className='flex-1'>
            {/*Texto*/}
            <motion.div 
               variants={fadeIn('left',0.3)} 
               initial="hidden" 
               whileInView={'show'} 
               viewport={{once:false, amount:0.7}} 
              className='flex-1'>
              <h2 className='h2 text-red-600 '>Sobre mim</h2>
              <h3 className='h3 mb-4'>Sou um Desenvolvedor Front-end fascinado por Tecnologia.</h3>
              <p className='mb-6 text-slate-700 font-medium'>Em 2016 tive o conhecimento do básico do Digner com Photoshop, Ilustraitor, Adobe Premier ,After Efects e Blender. O primeiro contado que tive com a programação foi em 2016 com o famoso 'HELLO WORLD'
                , mas foi me aprofundar neste mundo Dev em 2022 onde me encantei pela programação.</p>
            </motion.div>
            {/* Starts*/}
            {/*<div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-red-600 mb-2'>
                  {inView ? 
                  <CountUp start={0} end={2} duration={8}/>
                  :null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de <br/> 
                  experiência 
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-red-600 mb-2'>
                  {inView ? 
                  <CountUp start={0} end={2} duration={8}/>
                  :null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                Projetos <br/>
                Completos
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-red-600 mb-2'>
                  {inView ? 
                  <CountUp start={0} end={2} duration={8}/>
                  :null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br/> 
                  Satisfeitos
                </div>
              </div>
                  </div>*/}
              <div className='flex gap-x-8 items-center'>
              <Link  to='contact'activeClass='active' smooth={true} spy={true}>
                <button className='btn btn-lg'>Contato</button>
              </Link>
                <a href='#' className='text-red-600 btn-link  text-[26px]'>
                  Portifólio</a>
              </div>      
         </div>        
        </div>
      </div>
    </section>
   );
};

export default About;
