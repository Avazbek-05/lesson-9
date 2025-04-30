import React from "react";
import Navbar from "./components/navber/navbar";
import Wrapper from "./components/wrapper/wrapper";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Basket from "./pages/basket/basket";
import Like from "./pages/like/like";
import NotFound from "./pages/not-found/notFound";
import MainLayout from "./components/main-layout/mainLayout";
const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/like" element={<Like />} />
        </Route>

        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
};

export default App;
