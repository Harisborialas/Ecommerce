import React from "react";
import ProductCard from "../../Components/ProductCard/Index";
import Categories from "../../Components/Categories/Index";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20 mb-10">
          <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
            Products
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            All Products
          </h1>
        </div>
      {products.length > 0 ? <ProductCard products={products} /> : <div>Loading...</div>}
    </>
  );
};

export default Products;
