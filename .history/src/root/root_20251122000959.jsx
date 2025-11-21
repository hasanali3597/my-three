import React from "react";
import Navebar from "../Components/Navebar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const Root = () => {
  const navigation =useNavigation()
  console.log(navigation.state
)
  return (
    <div>
      <Navebar />
      {
        navigation?.state === 'loading'? <LoadingSpinner/> : <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      }

      <Footer />
    </div>
  );
};

export default Root;
