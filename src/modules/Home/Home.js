import React from "react";
import Hero from "../../Components/Hero/Index";
import Statics from "../../Components/Statiscs/Index";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../Components/ProductCard/Index";
import Products from "../Products/Index";
import Categories from "../../Components/Categories/Index";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popuar Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading...</div>
      )}
      
      <Statics />
    </>
  );
};

export default Home;
