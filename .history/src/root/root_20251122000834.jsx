import React from "react";
import Navebar from "../Components/Navebar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation =useNavigation()
  console.log(navigation.state
)
  return (
    <div>
      <Navebar />
      {
        na
      }

      <Footer />
    </div>
  );
};

export default Root;
