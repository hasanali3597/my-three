import React, { createContext, useState } from "react";
import Navebar from "../Components/Navebar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

export const CardContext =createContext({})

const Root = () => {
  const [cart, setCart] = useState([]);
  const navigation =useNavigation()
  console.log(navigation.state
)
  return (
    <CardContext.Provider value={{cart,setCart}}>
      <Navebar />
      {
        navigation?.state === 'loading'? <LoadingSpinner/> : <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      }

      <Footer />
    </CardContext.Provider>
  );
};

export default Root;
