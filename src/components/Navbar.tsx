'use client'
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#133364] text-gray-300">
      <div className="text-2xl font-bold text-pink-600 cursor-pointer hover:text-gray-400 duration-300">AYESHA.</div>
      {/* menu */}
      <ul className="hidden md:flex ">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/skills">
          <li>Skills</li>
        </Link>
        <Link href="/work">
          <li>Work</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      {/* hamburger menu  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <Link href="/" className="py-6 text-4xl">
          <li>Home</li>
        </Link>
        <Link href="/about" className="py-6 text-4xl">
          <li>About</li>
        </Link>
        <Link href="/skills" className="py-6 text-4xl">
          <li>Skills</li>
        </Link>
        <Link href="/work" className="py-6 text-4xl">
          <li>Work</li>
        </Link>
        <Link href="/contact" className="py-6 text-4xl">
          <li>Contact</li>
        </Link>
      </ul>
      {/* social icons */}
      <div
        className="hidden lg:flex fixed flex-col top-[35%] left-0"
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Link className="flex justify-between items-center w-full text-gray-300" href="https://linkedin.com/in/ayeshanadeemabbas">LinkedIn <FaLinkedin size={30}/>
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <Link className="flex justify-between items-center w-full text-gray-300" href="https://github.com/AyeshaNadeemgithub">Github <FaGithub size={30}/>
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link className="flex justify-between items-center w-full text-gray-300" href="ayeshanadeemabbas@gmail.com">Email <HiOutlineMail size={30}/>
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link className="flex justify-between items-center w-full text-gray-300" href="www.linkedin.com/in/ayeshanadeemabbas">Resume<BsFillPersonLinesFill size={30}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
