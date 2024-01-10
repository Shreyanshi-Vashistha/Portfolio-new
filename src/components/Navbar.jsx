import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, myLogo } from '../assets';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
         
          <img
            src={myLogo}
            alt="logo"
            className="sm:w-[150px] sm:h-[90px] w-[100px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </Link>
       
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
           <a href="https://github.com/Shreyanshi-Vashistha" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-6 h-6 rounded-full" style={{ filter: 'invert(100%)' }} />
        </a>
        <a href="https://www.linkedin.com/in/shreyanshi-vashistha/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6 rounded-full" style={{ filter: 'invert(100%)' }} />
        </a>
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
  {toggle ? (
    <div
      className={`p-6 bg-flashWhite opacity-[0.98] absolute 
        top-0 left-0 w-full sm:w-auto h-[100vh] z-10 menu ${
        toggle ? 'menu-open' : 'menu-close'
      }`}
    >
      <div className="flex justify-end">
        <img
          src={close}
          alt="close"
          className="w-[22px] h-[22px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <ul className="list-none flex flex-col items-center justify-center mt-12">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? 'text-french' : 'text-eerieBlack'
            } text-[20px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer mb-4`}
            onClick={() => {
              setToggle(!toggle);
              setActive(nav.title);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
       <div className="flex gap-4">
          <a
            href="https://github.com/Shreyanshi-Vashistha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-6 h-6 rounded-full"
              style={{ filter: 'invert(100%)' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyanshi-vashistha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6 rounded-full"
              style={{ filter: 'invert(100%)' }}
            />
          </a>
        </div>
        
      </ul>
    </div>
  ) : (
    <img
      src={menu}
      alt="menu"
      className="w-[34px] h-[34px] object-contain cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
  )}
</div>


      </div>
    </nav>
  );
};

export default Navbar;
