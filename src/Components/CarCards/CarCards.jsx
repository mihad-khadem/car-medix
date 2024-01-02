import React from "react";
import { Link, useParams } from "react-router-dom";

const CarCards = ({ car }) => {
    
    console.log(car);

  const { _id, name, image, price, details, type, rating, brandName } = car;
  return (
    <div className="my-5">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            
            src={image}
            className="max-w-[300px] h-60 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-xl my-2">Brand : <strong>{brandName}</strong></h2>
            <p className="py-3">
              {details}
            </p>
            <p className="text-xl my-2">Price : <strong>{price} $</strong></p>
            <p className="text-xl my-2">Type : <strong>{type}</strong></p>
            <p className="text-xl my-2">Ratting : <strong>{rating} </strong></p>
            <div className="flex justify-center gap-10">
            <Link to={`/details/${_id}`}><button className="btn btn-outline">View Details</button></Link>
           <Link to={`/update/${_id}`}> <button className="btn btn-outline">Update</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
