import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
const PlantCard = React.lazy(() => import("../components/PlantCard"));

const Home = () => {
  // const [plants, setPlants] = useState([]);

  // useEffect(() => {
  //   fetch("https://openapi.programming-hero.com/api/plants")
  //     .then((res) => res.json())
  //     .then((data) => setPlants(data.plants));
  // }, []);
  const { plants } = useLoaderData();
  console.log(plants);
  return (
    <div>
      <p>Welcome Home</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center">
        <Suspense
          fallback={
            <p className="text-center w-full  ">
              <span className="loading loading-spinner text-info"></span>
            </p>
          }
        >
          {plants.map((plant) => (
            <PlantCard plant={plant} key={plant.id} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
