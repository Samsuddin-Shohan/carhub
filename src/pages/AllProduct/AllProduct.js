import React from "react";
import { Link } from "react-router-dom";
import "../Product/Product.css";

const AllProduct = ({ item }) => {
  const { _id, Name, description, price, img } = item;
  return (
    <div>
      <div class="col mb-5">
        <div class="card">
          <img src={img} class="card-image" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{Name}</h5>
            <p class="card-text">{description}</p>
            <h3>BDT {price}</h3>
            <Link to={`/purchase/${_id}`}>
              <button type="button" class="btn btn-outline-info m-2">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
