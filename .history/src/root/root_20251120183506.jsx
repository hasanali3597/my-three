import React from "react";
import navebar from "../Components/Navebar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const Root = () => {
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
