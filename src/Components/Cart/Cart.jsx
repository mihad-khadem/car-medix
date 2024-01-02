import React from "react";
import Swal from "sweetalert2";
import MyCart from "../MyCart/MyCart";
const Cart = ({ cart, setMyCart, myCart }) => {
  const { _id, name, image, price, details, type, rating, brandName } = cart;
  console.log(_id);
  
  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        const url = `https://carmedix-server-q1yf37i3v-mihads-projects.vercel.app/mycart/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Request failed: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(`Deleted`, `Your ${type} has been deleted.`, "success");
              const remaining = myCart.filter((car) => car._id !== id);
              setMyCart(remaining);
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the item.",
              "error"
            );
          });
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(`Cancelled`, `Your ${name} is safe :)`, "error");
      }
    });
  };

  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl px-5">
          <figure>
            <img className="w-56" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              Brand : <strong>{brandName}</strong>
            </p>
            <p>
              Price : <strong>{price} $</strong>
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
