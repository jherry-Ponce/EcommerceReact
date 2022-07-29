import { Routes, Route } from "react-router-dom";
import { Carshopping } from "../Components/CarroShopping/Carshopping";
import Footer from "../Components/Footer/Footer";
import { NavBar } from "../Components/Header/NavBar";
import Product from "../Components/Products/ProductsDetail";
import { Categoryproducts } from "../Pages/Categoryproducts";
import { Home } from "../Pages/Home";
import { Loegado } from "../Pages/Logeado";

export const RouterTienda = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Product" element={<Product/>} />
        <Route path="Category" element={<Categoryproducts/>} />
        <Route path="Logeado" element={<Loegado/>}/>
        <Route path="cart" element={<Carshopping/>}/>
      </Routes>
    <Footer/>
    </>
  );
};
