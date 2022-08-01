import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

// The Home page component manages the state currentCategory, which is passed to the ProductList component as a prop and instructs which category's products should be retrieved using Apollo.

const Home = () => {
  const [currentCategory, setCategory] = useState("");
// To set that currentCategory value, however, the setCategory callback function is passed to the CategoryMenu component as a prop to be executed on a new category pick.
  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
