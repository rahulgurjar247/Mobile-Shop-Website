import { useState } from "react";
import data from "../data/MOCK_DATA.json";
import Card from "./Card";
import {Link}  from "react-router-dom"
const TrendingProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerSlide = 3;
  const totalItems = data.length

  const nextSlide = ():void => {
    if (currentIndex < totalItems - itemsPerSlide) {
      setCurrentIndex(currentIndex+1)      
    }
  }
  const prewSlide = ():void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex-1)      
    }
  }
  
  return (
    <div className="mt-10 w-2/3 mx-auto flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between" >
        <div className="text-2xl">Trending Item</div>
        <div className="hover:cursor-pointer">
          <Link to={"/product"} >View all</Link>
        </div>
        </div> 
    <button
      onClick={prewSlide}      
      className="absolute left-40 top-[600px]   text-[50px]">{"<"}</button>
    <div
      className="w-full overflow-hidden mt-5 flex gap-7  transition-transform duration-300 ease-out "
      // style={{transform:`translateX(-${(currentIndex*270)}px)`}}
    >
      {data.map((item) => {
        return (
          <div
            style={{transform:`translateX(-${(currentIndex*275)}px)`}}
            className="transition-transform duration-300 ease-out ">
            <Card name={item.name} description={ item.category} />
          </div>        
        )
      })}  

    </div> 
    <button className="absolute right-36 top-[600px]   text-[50px]"
      onClick={nextSlide}
    >{">"}</button>
    
    
  </div>);
};

export default TrendingProduct;
