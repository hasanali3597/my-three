import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { image, description, category, name, price, id } = plant;
  console.log(plant);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-48">
        <img className=" w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <h1>By Now : {price}</h1>
        <div className="card-actions justify-end">
          <Link to={`/plant-details/${}`}>
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
