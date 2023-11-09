/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BodyBG from "../Assets/bg.jpg";
import { useNavigate } from "react-router-dom";
const ForPass = () => {
  const [resetPage, setResetpage] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const navigate = useNavigate();

  const handelEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handelPass = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  const handelCpass = (e) => {
    setCpass(e.target.value);
    console.log(cpass);
  };

  const handelEmailSubmit = () => {
    setResetpage(true);
    console.log(resetPage);
  };

  const handelResetChange = () => {
    setResetpage(false);
    console.log(resetPage);
  };
  const handelResetpass = () => {
    navigate("/");
  };

  const handelOtp = (e) => {
    setOtp(e.target.value);
    console.log(otp);
  };

  return (
    <>
      <div
        className="bg-info d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundImage: `url(${BodyBG})`, backgroundSize: "cover" }}
      >
        {resetPage === false ? (
          <div className="card text-center" style={{ width: "300px" }}>
            <div
              className="card-header h5 text-white"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
              }}
            >
              Password Reset
            </div>
            <div className="card-body px-5">
              <p className="card-text py-2">
                Enter email for recovery OTP to reset password.
              </p>
              <div className="form-outline">
                <input
                  type="email"
                  id="typeEmail"
                  className="form-control my-3"
                  placeholder="Enter Your Email"
                  onChange={handelEmailChange}
                />
              </div>
              <button
                type="submit"
                className="btn w-100 text-white"
                onClick={handelEmailSubmit}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
                }}
                onMouseOver={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, rgba(218,8,8,1) 0%, rgba(245,244,218,1) 97%)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)";
                }}
              >
                Proceed
              </button>
              <div className="d-flex justify-content-center mt-4">
                <Link to="/">Go Back</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="card text-center" style={{ width: "300px" }}>
            <div
              className="card-header h5 text-white"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
              }}
            >
              Password Reset
            </div>
            <div className="card-body px-5">
              <p className="card-text py-2">
                We have emailed you a code. Enter the code below.
              </p>
              <div className="form-outline">
                <lebel>
                  <b>Your Email</b>
                </lebel>
                <input className="form-control my-3" value={email} disabled />
                <input
                  className="form-control my-3"
                  placeholder="Enter Your OTP"
                  onChange={handelOtp}
                />
                <input
                  className="form-control my-3"
                  placeholder="Enter New Password"
                  onChange={handelPass}
                />
                <input
                  className="form-control my-3"
                  placeholder="Confirm Password"
                  onChange={handelCpass}
                />
              </div>
              <button
                type="submit"
                className="btn w-100 text-white"
                onClick={handelResetpass}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
                }}
                onMouseOver={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, rgba(218,8,8,1) 0%, rgba(245,244,218,1) 97%)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)";
                }}
              >
                Reset password
              </button>
              <button
                className="mt-2"
                style={{
                  border: "0",
                  backgroundColor: "white",
                  color: "#0a35f7",
                }}
                onClick={handelResetChange}
              >
                {" "}
                <u>Change Email?</u>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ForPass;
