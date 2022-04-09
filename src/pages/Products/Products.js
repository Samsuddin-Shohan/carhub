import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>;

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  return (
    <>
      <div>
        <h2 className="text-info mt-5">Our Cars</h2>
      </div>
      <div className="container-fluid">
        <div className="products-container" id="products">
          {products.map((item) => (
            <Product key={item._id} item={item}></Product>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
