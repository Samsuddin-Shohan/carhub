// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid p-5 bg-dark text-start text-white">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <h5>
            <img
              src="https://i.ibb.co/G77ZRsF/car-hub.png"
              width="150"
              height="100"
              className="d-inline-block align-top "
              alt=""
              style={{ borderRadius: "20%" }}
            />
            <br />
          </h5>
          <p>Your Trusted Car Rental Site</p>
        </div>
        <div className="col-lg-3 footer-link col-sm-12">
          <h5>Quick Link</h5>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contactUs">Contact Us</Link>
        </div>
        <div className="col-lg-3 col-sm-12">
          <h5>Subscribe to our Newsletter</h5>
          <p>
            Subscribe our newsletter for notify update of our future tour
            program and choose your best one.
          </p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <br />
          <br />
          {/* <Button variant="outline-info">Subcribe</Button> */}
        </div>
        <div className="col-lg-3 col-sm-12">
          <h5>Our Instagram</h5>
          <h5>Our Facebook</h5>
          <p>
            carHub is a renowned and Trusteed Car Rental site, successfully over
            2 years running. Now it's time to introduce our website car
            <span className="text-info">Hub</span>.
          </p>
        </div>
      </div>
      <div>
        <small>Powered by @ CSE18</small>
      </div>
    </div>
  );
};

export default Footer;
