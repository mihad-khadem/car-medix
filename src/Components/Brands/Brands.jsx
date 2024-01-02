import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { id, name, brandImg } = brand;
 
  return (
    <div>
      <Link to={`/car/brand/${name}`}>
        <div>
          <div className="card w-80 h-60 bg-base-100 p-5 shadow-xl">
            <figure>
              <img className="w-36" src={brandImg} alt="Shoes" />
            </figure>
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brands;
