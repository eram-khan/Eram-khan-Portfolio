// import React from 'react'
import{FaLinkedin} from "react-icons/fa";
import{FaGithub} from "react-icons/fa";
import{FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <div className="text-white-600 text-2xl font-bold">EK</div>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a 
          href="https://www.linkedin.com/in/eram-khan" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <FaLinkedin className="hover:text-bkue-500 transition duration-300"/>
        </a>
        <a 
          href="https://github.com/eram-khan" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <FaGithub className="hover:text-gray-400 transition duration-300"/>
        </a>
        <a 
          href="https://www.instagram.com/__eram.khan_459" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <FaInstagram className="hover:text-pink-500 transition duration-300"/>
        </a>
    </div>
  </nav>;
};

export default Navbar
