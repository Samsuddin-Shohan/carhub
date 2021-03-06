import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import Footer from "../Home/Shared/Footer/Footer";
import Navigation from "../Home/Shared/Navigation/Navigation";
import "./Purchase.css";

const Purchase = () => {
  const { productId } = useParams({});
  const [product, setProduct] = useState({});

  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const orderProduct = data.find(
          (singleOrder) => singleOrder._id == productId
        );
        setProduct(orderProduct);
        // reset(orderPackage);
      });
  }, [productId]);

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "Pending";
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (data) {
          alert("Ordered successfully");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <>
      <Navigation />
      <div className="review-section m-auto container">
        <div className="row py-5 justify-content-center">
          <h1 className="mt-5 text-center text-info">
            Please Provide your Information for Booking
          </h1>
          <div class="card col-lg-6 col-sm-12 mb-5 mt-5 item-part px-5">
            <img src={product.img} class="details-image" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-info">{product.Name}</h5>
              <p class="card-text">{product.description}</p>
              <h3 class="card-text text-info">BDT {product.price}</h3>
            </div>
          </div>

          {/* Form Start here */}
          <div className="col-lg-6 col-sm-12">
            <div className="login-box w-75 m-auto mt-5">
              <div className="package-box border border d-flex justify-content-center align-items-center py-3">
                <div className="login-form w-100 overflow-hidden px-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("Name", { required: true })}
                      placeholder="Products Name"
                      className="p-2 my-2 w-100"
                    />
                    <br />
                    <input
                      {...register("name", { required: true })}
                      placeholder="Name"
                      className="p-2 my-2 w-100"
                    />
                    <br />
                    <input
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="p-2 my-2 w-100"
                    />
                    <br />
                    <input
                      {...register("price", { required: true })}
                      placeholder="Price"
                      className="p-2 my-2 w-100"
                    />
                    <br />
                    <input
                      {...register("date")}
                      placeholder="Date"
                      type="date"
                      className="p-2 my-2 w-100"
                    />
                    <br />
                    <input
                      {...register("address", { required: true })}
                      placeholder="Address"
                      className="p-2 my-2 w-100"
                    />
                    <br />
                    <input
                      {...register("phone", { required: true })}
                      placeholder="Phone Number"
                      className="p-2 my-2 w-100"
                    />
                    <br />

                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input
                      type="submit"
                      value="Confirm Booking"
                      className="btn btn-info w-75"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
