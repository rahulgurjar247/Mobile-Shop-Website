// import React from 'react'

const Navbar = () => {
  return (
       <nav className=" fixed backdrop-blur-md bg-white z-0 w-screen py-2  ">
            <div className="w-2/3 mx-auto flex justify-between items-center">
            <div id="logo" className="font-bold font-sans text-red-500 shadow-sm shadow-zinc-900">DhramRaj Mobile</div>            
                 <div>
                      <ul className=" flex gap-7 font-mono text-lg [&_li]:cursor-pointer transition-transform duration-500 ease-out  ">
                         <li className="hover:text-blue-200">Home</li>
                         <li className="hover:text-blue-200">ABOUT</li>
                         <li className="hover:text-blue-200">PRODUCTS</li>
                         <li className="hover:text-blue-200">REPAIR</li>
                         <li className="hover:text-blue-200">CONTACT US</li>
                      </ul>
            </div>
            </div>
       </nav>
  )
}

export default Navbar
