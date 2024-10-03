// import React from 'react'
import Card from "../component/Card";
import data from "../data/MOCK_DATA.json";

const Product = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="w-4/5 mx-auto flex flex-wrap gap-6 justify-center">
        {data.map((Item) => {
          return <Card name={Item.name} category={Item.category} />;
        })}
      </div>
    </div>
  );
};

export default Product
 