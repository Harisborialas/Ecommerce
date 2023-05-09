import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Feature from "../Feature/Index";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <div>Loading...</div>;
  return (
    <>
      <Feature cards={categories} />
    </>
  );
};

export default Categories;
