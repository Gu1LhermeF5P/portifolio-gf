import React from 'react';
//imagens header
import Logo from '../assets/gflogo.svg'
//Link
import { Link } from 'react-scroll';
const Header = () => {
  return( 
    <header className='py-7'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*Logo*/}
           <a href='#'>
            <img src={Logo} className='mt-6' width='155px'alt=''/>
          </a>
          {/* Botão*/}
          <Link  to='contact'activeClass='active' smooth={true} spy={true}>
          <button className='btn btn-sm'>Vamos trabalhar juntos</button>
          </Link>
        </div>
      </div>
  </header>
  );
};

export default Header;
