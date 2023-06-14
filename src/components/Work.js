import React from 'react';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants'
//Imagens
import img1 from '../assets/starbucks.png';
import img2 from '../assets/cineclub.png';
import img3 from '../assets/pizza.png';
const Work = () => {
  return(
   <section className='section ' id='projects-skills'>
     <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
         variants={fadeIn('right',0.3)} 
         initial="hidden" 
         whileInView={'show'} 
         viewport={{once:false, amount:0.3}}
         className='flex-1 flex flex-col gap-y-4 mb-10 lg:mb-0'>
          {/*Texto*/}
          <h2 className='h2 text-red-600'><br/>Projetos <br/>Feitos</h2>
          <a href='https://github.com/Gu1LhermeF5P?tab=repositories'><button className='btn btn-sm w-[128px]'src="">Projetos</button></a>
            <p className='max-w-sm mb-16 text-slate-700 font-medium'>Os projetos Mostrados, são atividades feita desenvolvida e feitas em curso, em Html, Css, Javascript e Reactjs.</p>
           {/*img*/}
          <div className='group relative overflow-hidden border-2 
          border-grey/50 rounded-xl mr-2 mt-0'>
            {/* overlay*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=''/>
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-3xl  text-green-600 font-medium'>Uso de Grid Html/Css</span>
            </div>
            <div className='absolute -bottom-full left-12 
             group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-2xl text-white'>Starbucks Grid</span>
            </div>
          </div>
        </motion.div>
        <div className='flex-1 flex flex-col gap-y-11 ml-2'>
          {/*img*/}
          <motion.div 
           variants={fadeIn('right',0.3)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false, amount:0.3}}
           className='group relative overflow-hidden border-2 
           border-grey/50 rounded-xl'>
            {/* overlay*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt=''/>
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-3xl  text-orange-600 font-medium'>Uso de React</span>
            </div>
            <div className='absolute -bottom-full left-12 
             group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-2xl text-white'>Clubcine</span>
            </div>
          </motion.div >
          {/*img*/}
          <motion.div
            variants={fadeIn('right',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false, amount:0.3}}
            className='group relative overflow-hidden border-2 
            border-grey/50 rounded-xl'>
            {/* overlay*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/*img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=''/>
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-3xl  text-blue-400 font-medium'>Uso de Javascript</span>
            </div>
            <div className='absolute -bottom-full left-12 
             group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-2xl text-white '>Pizzaria Site</span>
            </div>
          </motion.div>
        </div>
      </div>
     </div>
    </section>
    );
};

export default Work;
