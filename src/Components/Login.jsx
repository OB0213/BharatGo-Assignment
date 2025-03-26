import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { totalCostOfCart, setEmailId } from "../arraySlice";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState(""); //email for login
  const [password, setPassword] = useState(""); //password for login

  const dispatch = useDispatch(); //from redux

  const navigate = useNavigate(); //useNavigate Hook used for navigation

  async function mySubmit(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password) //for signIn with email using firebase
      .then((userCredentials) => {
         alert("User Logged In Successfully");
        const user = userCredentials.user;
        localStorage.setItem(
          "isUserLogin",
          JSON.stringify({ isLoggedIn: true, email: email }) //For User storing data in localStorage for user login and to remain loggedIn
        );
       navigate('/');
       window.location.reload();

      
        // setTimeout(() => {
        //   window.location.reload();
        //   //used to refresh the window
        //   // navigate("/");
        // }, 5000);
       
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }
  return (
    <div className="mydata">
      <div className="container-fluid h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="formdata row d-flex justify-content-center align-items-center mx-auto my-auto h-100 w-100">
          <div className="col-sm-12 col-md-8 col-lg-6 border border-black rounded-1 px-2 py-2">
            <h1 className="text-center">Login</h1>
            <form onSubmit={mySubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  id="exampleFormControlInput1"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="exampleFormControlInput1"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-100 my-2"
              ></input>
            </form>
            <p className="text-center">
              Not Registered:Go To{" "}
              <Link to="/signup" className="signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
