import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlantDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [plant, setPlant] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data?.plants));
  }, []);
  const { image, description, category, name, price } = plant;
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
         
            <button className="btn btn-primary">View Details</button>
         
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
