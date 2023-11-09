/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BodyBG from "../Assets/bg.jpg";
import { useNavigate } from "react-router-dom";
import AccountsService from "../Services/AccountsService";
import "./Register.css";

const Register = () => {
  const [resetPage, setResetpage] = useState(false);
  const [email, setEmail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const navigate = useNavigate();

  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handelFNameChange = (e) => {
    setfname(e.target.value);
  };

  const handelLNameChange = (e) => {
    setlname(e.target.value);
  };

  const handelnumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handelPass = (e) => {
    setPass(e.target.value);
  };

  const handelCpass = (e) => {
    setCpass(e.target.value);
  };

  const handelOtpSubmit = () => {
    console.log(email);
    if (!otp) {
      alert("Please Insert the Code that you have Recived");
      return;
    }
    AccountsService.userVerifiction({
      email: email,
      code: otp,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Verification done!! Welcome to Happy Wave");
          navigate("/");
          alert("Please Log in for Additional Fetures");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.res.data) {
          console.log(err.res.data.message);
        }
      });
  };

  const handleFirstSubmit = () => {
    if (!fname || !lname || !email || !number || !cpass || !pass) {
      alert("Please Fill All Required Fields");
      return;
    }
    if (pass !== cpass) {
      alert("Passwords doesn't match");
      return;
    }

    AccountsService.userRegister({
      firstname: fname,
      lastname: lname,
      email: email,
      contactNumber: number,
      password: cpass,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setResetpage(true);
          alert("Email Submited For Verification");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.res.data) {
          console.log(err.res.data.message);
        }
      });

    // console.log(resetPage);
  };

  const handelGoback = () => {
    setResetpage(false);
    console.log(resetPage);
  };

  // const handelResetpass = () => {
  //   navigate("/");
  // };

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
              className="card-header h5 text-white animated-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
              }}
            >
              <span>Happy Wave</span>
            </div>
            <div className="card-body px-5">
              <p className="card-text py-2">
                <b>
                  Join us today and become a part of our thriving community!
                </b>
              </p>
              <div className="form-outline">
                <input
                  className="form-control my-3"
                  placeholder="Enter Your Email *"
                  onChange={handelEmailChange}
                />
                <input
                  className="form-control my-3"
                  placeholder="Enter Your Contact No. *"
                  onChange={handelnumberChange}
                />
                <input
                  className="form-control my-3"
                  placeholder="First Name *"
                  onChange={handelFNameChange}
                />
                <input
                  className="form-control my-3"
                  placeholder="Last Name *"
                  onChange={handelLNameChange}
                />
                <input
                  type="password"
                  className="form-control my-3"
                  placeholder="Enter New Password *"
                  onChange={handelPass}
                />
                <input
                  className="form-control my-3"
                  placeholder="Confirm Password *"
                  onChange={handelCpass}
                />
              </div>
              <button
                type="submit"
                className="btn w-100 text-white"
                onClick={handleFirstSubmit}
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
                Proced
              </button>
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
              Register
            </div>
            <div className="card-body px-5">
              <p className="card-text py-2">
                We had send you a Verification Code to verify your account.
              </p>
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control my-3"
                  disabled
                  value={email}
                />
                <label>
                  <input
                    type="text"
                    className="form-control my-3"
                    placeholder="Enter Code *"
                    onChange={handelOtp}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn w-100 text-white"
                onClick={handelOtpSubmit}
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
                <button
                  onClick={handelGoback}
                  style={{ border: "0", background: "white", color: "blue" }}
                >
                  <u>Change Email?</u>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
