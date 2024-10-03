// import React from 'react'

import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className=" fixed backdrop-blur-md bg-white z-40 w-screen py-2  ">
      <div className="w-2/3 mx-auto flex justify-between items-center max-md:min-w-full">
        <div className="max-md:p-2">
          <Logo color={"black"} />
        </div>
        <div className=" ">
          <ul className=" flex gap-7 font-mono text-lg [&_li]:cursor-pointer transition-transform duration-500 ease-out max-md:hidden ">
            <li className="hover:text-blue-200">Home</li>
            <li className="hover:text-blue-200">ABOUT</li>
            <li className="hover:text-blue-200">PRODUCTS</li>
            <li className="hover:text-blue-200">REPAIR</li>
            <li className="hover:text-blue-200">CONTACT US</li>
          </ul>
        </div>
        <div className="max-md:flex p-2  md:hidden">---</div>
      </div>
    </nav>
  );
};

export default Navbar
