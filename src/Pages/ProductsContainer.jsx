import { useEffect, useState } from "react";
//import Navbar from "../components/Navbar/Navbar";
import "./ProductsContainer.css";
import ProductGrid from "./ProductGrid";
import Navbar from "../components/Navbar/Navbar";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Navbar></Navbar>
      <ProductGrid products={products} />;
    </>
  );
};

export default ProductsContainer;
