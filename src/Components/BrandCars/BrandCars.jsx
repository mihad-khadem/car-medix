import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarCards from "../CarCards/CarCards";

// import CarCards from "../CarCards/CarCards";

const BrandCars = () => {
    const loadedCars = useLoaderData()

// console.log(products);
// console.log(loadedCars);

//   useEffect(() => {
//     fetch("/public/car.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);


  return (
    <div>
      <div className="">
        {
            loadedCars.map(car => <CarCards key={car._id} car={car}></CarCards>)
        }
      </div>
    </div>
  );
};

export default BrandCars;
