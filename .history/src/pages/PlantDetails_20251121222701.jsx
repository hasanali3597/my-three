import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlantDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [plant, setPlant] = useState([]);
  useEffect(() => {
    // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setPlant(data?.plants));
    // fetch dta using axios
    axios(`https://openapi.programming-hero.com/api/plant/${id}`)
     .then((data) => con(data?.plants));
  }, [id]);
  console.log(plant);
  const { image, description, category, name, price } = plant;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-48">
          <img className="w-full h-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h1>By Now : {price}</h1>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">By Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
