import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlantDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [plant, setPlant] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/category/f`)
      .then((res) => res.json())
      .then((data) => setPlant(data.plants));
  }, [id]);
  const {name}=plant
  return (
    <div className="card bg-base-100 max-w-5xl mx-auto shadow-sm">
      <figure className="w-66 h-66">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
