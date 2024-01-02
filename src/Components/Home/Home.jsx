import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLoaderData, useLocation } from "react-router-dom";
import Brands from "../Brands/Brands";
import Contact from "../Contact/contact";

const Home = () => {
  const location = useLocation()
  
  const [brands, setBrands] = useState()
  useEffect(() => {
      fetch('./car.json')
      .then(res => res.json())
      .then(data => setBrands(data.brands))

  }, [])
  
  return (
    <div>
      <div className="">
        <img className="static" src="/car1.jpg" alt="" />
        <div className="absolute top-64 px-3 lg:top-[360px] lg:px-14 ">
          <h2 className="text-3xl font-bold">Car Medix</h2>
          <p className="text-lg text-gray-950/60">
            Make your dreams come true.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-0 mx-6 gap-5 my-10 ">
        {
          brands?.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
        }
      </div>
      <div>
      <Contact/>
      </div>
      <div className="static">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
