import React from 'react';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import twitter from '../assets/icons/twitter.webp';
import mail from '../assets/icons/mail.png';

const Footer = () => {
  return (
    <footer className=" w-full bg-[rgba(0,0,0,0.8)] sm:px-8 px-4 py-1 border-t border-[#1a202c] text-white text-center">
      <div className="flex justify-center items-center gap-4">
        <a href="https://github.com/Shreyanshi-Vashistha" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-6 h-6 rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/shreyanshi-vashistha/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6 rounded-full" />
        </a>
        <a href="https://twitter.com/Shreyanshi2008" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-6 h-6 rounded-full" />
        </a>
        <a href="mailto:shreyanshi.vashistha97@gmail.com">
          <img src={mail} alt="Email" className="w-6 h-6 rounded-full" />
        </a>
      </div>
      <p>&copy; 2024 - Shreyanshi Vashistha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
