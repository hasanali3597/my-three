import React from "react";
import Navebar from "../Components/Navebar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation =useNavigation()
  console.log()
  return (
    <div>
      <Navebar />
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;
