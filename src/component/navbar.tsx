import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Hamberger from "../assets/black-hamburger.png";
import CrossImage from "../assets/black-cross.png";

import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const [isHamberger, setHamberger] = useState(true);
  const hamburger = useRef<HTMLDivElement>(null);

  const handleHamberger = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    isHamberger ? setHamberger(false) : setHamberger(true);
  };
  return (
    <>
      <nav className=" fixed backdrop-blur-md bg-white z-20 w-screen py-2  ">
        <div className="w-2/3 mx-auto flex justify-between items-center max-md:min-w-full">
          <div className="max-md:p-2">
            <Logo color={"black"} />
          </div>
          <div className=" ">
            <ul className=" flex gap-7 font-mono text-lg [&_li]:cursor-pointer transition-transform duration-500 ease-out max-md:hidden ">
              <li className="hover:text-blue-200">
                <Link to="/home">home</Link>
              </li>
              <li className="hover:text-blue-200">
                <Link to="/home">ABOUT</Link>
              </li>
              <li className="hover:text-blue-200">
                <Link to="/product">PRODUCTS</Link>
              </li>
              <li className="hover:text-blue-200">REPAIR</li>
              <li className="hover:text-blue-200">CONTACT US</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-md:flex fixed right-2 p-4 z-50 md:hidden">
        <img
          src={isHamberger ? Hamberger : CrossImage}
          className="w-9 "
          onClick={handleHamberger}
        />
      </div>
      {!isHamberger && (
        <div
          ref={hamburger}
          className="fixed py-20 px-10 text-center bg-slate-50 h-[100vh] z-40 right-0 transition-all duration-200 ease-in-out"
        >
          <ul className=" flex flex-col gap-7 font-mono text-lg [&_li]:cursor-pointer transition-transform duration-500 ease-out ">
            <li className="hover:text-blue-200">
              <Link to="/home">home</Link>
            </li>
            <li className="hover:text-blue-200">
              <Link to="/home">ABOUT</Link>
            </li>
            <li className="hover:text-blue-200">
              <Link to="/product">PRODUCTS</Link>
            </li>
            <li className="hover:text-blue-200">REPAIR</li>
            <li className="hover:text-blue-200">CONTACT US</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
