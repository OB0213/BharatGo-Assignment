import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

//this method is designed for registering data in the firebase
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function mySubmit(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        alert("User Registered Successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  }
  return (
    <div className="mydata">
      <div className="container-fluid h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="formdata row d-flex justify-content-center align-items-center mx-auto my-auto h-100 w-100">
          <div className="col-sm-12 col-md-8 col-lg-6 border border-black rounded-1 px-2 py-2">
            <h1 className="text-center">Sign up:</h1>
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
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="exampleFormControlInput1"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-100 my-2"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default Signup;
