
import React, {  useContext, } from "react";
import { useLocation, } from "react-router-dom";
import { CardContext } from "../root/root";

const PlantDetails = () => {
  const { cart, setCart } = useContext(CardContext);
  //   const { id } = useParams();
  //   console.log(id);
  //   const [plant, setPlant] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setPlant(data?.plants));
  //     fetch dta using axios
  //     axios(`https://openapi.programming-hero.com/api/plant/${id}`)
  //      .then((data) => setPlant(data.data.plants

  // ));
  //   }, [id]);
  const location = useLocation();
  console.log(location);
  // const { data } = useLoaderData();

  const { image, description, name, price } = location.state;
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
            <button
              onClick={() => setCart((prv) => [...prv, location?.state])}
              className="btn btn-primary"
            >
              By Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
