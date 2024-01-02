import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CarDetails = () => {
  const loadedCar = useLoaderData();
  console.log(loadedCar);

  const { name, image, price, details, type, rating, brandName } = loadedCar;
  // Add to cart
  const handleAddToCart = () => {
    // Sending cart data
    fetch("https://carmedix-server-ppw2yl56z-mihads-projects.vercel.app/mycart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loadedCar),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("success", "Car Added to cart", "success");
        } else {
          Swal.fire("error", "Opps !!", "error");
        }
      });
  };
  return (
    <div className="flex mt-10 bg-gray-900/30 px-10 py-10 rounded-lg hover:shadow-2xl">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="pl-4">
        <h2 className="text-xl my-2">
          Name : <strong>{name}</strong>
        </h2>
        <h2 className="text-xl my-2">
          Brand : <strong>{brandName}</strong>
        </h2>
        <h2 className="text-xl my-2">
          Type : <strong>{type}</strong>
        </h2>
        <h2 className="text-xl my-2">
          Price : <strong>{price}</strong>
        </h2>
        <h2 className="text-xl my-2">
          Ratting : <strong>{rating}</strong>
        </h2>
        <p>Details: {details}</p>
        <div className="flex justify-center ">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline w-3/4 mt-10"
          >
            Add to my cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
