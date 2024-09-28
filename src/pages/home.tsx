// import React from 'react'
import image from "../assets/phone.png"
import TrendingProduct from "../component/trending"
 
const Home = () => {
  return (
    <div className="font-mono pt-5 w-screen" >
      <div className=" pt-24 w-2/3 mx-auto flex gap-24">
        <div className="flex flex-col gap-5">
          <h1 className=" text-3xl font-extrabold">
        Mobile And E-Mitra service 
          </h1>
          <p>Hey i am udaiLal dangi i Sell Mobile phone and  provide  <br /> a mobile 
            repair service also i provide <br />all type of E-mitra Service . </p>
          <div id="button" className="flex gap-4">
            <button className="bg-black text-white px-4 py-1 rounded-md">Products</button>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-md">Contact Us</button>            
          </div>
        </div>
        <div id="sideImage">
          <img src={ image} className="w-[400px]" />
        </div>
      </div>
      <TrendingProduct/>
      
    </div>

  )
}

export default Home
