import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { totalCostOfCart } from "../arraySlice";
import CartModal from "./SubComponents/CartModal";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function Navbar() {
  const cartData = useSelector((state) => state.cart.cartValue);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const checkoutData = useSelector((state) => state.cart.checkoutData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("isUserLogin"));
  console.log(data.email);
  const signOutData = () => {
    signOut(auth).then(() => {
      navigate("/login");
      localStorage.setItem(
        "isUserLogin",
        JSON.stringify({ isLoggedIn: false })
      );
      window.location.reload();
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand pb-2" href="#">
            Shopi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 pt-1">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    All
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/clothes" className="nav-link">
                    Clothes
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/electronics" className="nav-link">
                    Electronics
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/furniture" className="nav-link">
                    Furniture
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/shoes"
                    className="nav-link"
                    activeClassName="selected"
                  >
                    Shoes
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/miscellaneous"
                    className="nav-link"
                    activeClassName="selected"
                  >
                    Miscellaneous
                  </NavLink>
                </li>
              </ul>

              <div className="d-flex flex-column flex-lg-row">
                <p className="py-2 px-2">
                  <i class="fa-solid fa-envelope pe-2"></i>
                  {data.email}
                </p>
                <button
                  className="btn btn-danger text-white me-2 mb-sm-2 mb-md-2"
                  onClick={signOutData}
                >
                  Log Out
                </button>
              </div>

              <span className="mt-2 me-2">
                <NavLink
                  to="/myorders"
                  className="nav-link"
                  activeClassName="selected"
                >
                  {" "}
                  My Orders
                </NavLink>
              </span>

              <span>
                <i
                  className="fa-solid fa-cart-shopping fontData px-2 my-sm-2 my-md-2 py-sm-2 py-md-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                ></i>
                <span className="fontData">
                  {checkoutData == false ? cartData.length : 0}
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <CartModal />
    </>
  );
}

export default Navbar;
