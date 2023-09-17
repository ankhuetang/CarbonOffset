import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex justify-between items-center h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white relative shadow-sm font-extrabold text-lg' role='navigation'>
      <a href='/' className='pl-8'>
        Oceania
      </a>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggleNavbar}>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </div>
      <div className={`pr-8 md:block ${isOpen ? 'block' : 'hidden'}`}>
        <a href='/projects' className='p-4 text-white'>
          Projects
        </a>
        <a href='/calculator' className='p-4 text-white'>
          Calculator
        </a>
        <a href='/market' className='p-4 text-white'>
          Portfolio
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
