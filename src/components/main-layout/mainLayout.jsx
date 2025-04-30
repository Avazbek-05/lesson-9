import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navber/navbar";
import Footer from "../footer/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
