import React, { useState } from "react";
import "./Login.css";
import BodyBG from "../Assets/bg.jpg";
import Happy from "../Assets/Happy.png";
import { Link } from "react-router-dom";
import AccountsService from "../Services/AccountsService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const[persist,setPersist]=useState('')
  const [activeTab, setActiveTab] = useState(3);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
    console.log(tabNumber);
  };

  const handleClickUser = (e) => {
    setUserId(e.target.value);
  };
  const handleClickPassword = (e) => {
    setPassword(e.target.value);
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      toast.error("Username and password cannot be empty");
      return;
    }
    AccountsService.userLogin({
      userName: userId,
      password: password,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("user", res.data.token.accessToken);
          console.log(auth);
          auth.login();
          navigate("/welcome");
          toast.success("Login Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data) {
          toast.error(err.response.data.message);
        } else {
          console.error("Error occurred:", err);
        }
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   switch (activeTab) {
  //     case 1:
  //       AccountService.depositlogin({
  //         email: userId,
  //         password: password,
  //         // persist: persist,
  //       })
  //         .then((res) => {
  //           console.log(res);
  //           if (res.data.status === 200) {
  //             localStorage.setItem("user", res.data.token.accessToken);
  //             console.log(auth);
  //             console.log("deposit");
  //             // toast.success('Login Successfully')
  //             toast.success("Login successfull");
  //             auth.login();
  //             navigate("/dashboard");
  //           }
  //           else{
  //             toast.error(res.data.message);
  //             navigate("/");
  //           }
  //         })

  //         .catch((err) => {
  //           // console.log(err.data);
  //           if (!err.response) {
  //             toast.error(err.data.message);
  //             return;
  //           }
  //           if (err.response.status === 403) {
  //             navigate("/dashboard", {
  //               state: { user: userId },
  //               replace: false,
  //             });
  //             return;
  //           }
  //         });
  //       break;

  //     case 2:
  //       AccountService.withdrawlogin({
  //         email: userId,
  //         password: password,
  //         // persist: persist,
  //       })
  //         .then((res) => {
  //           console.log(res);
  //           if (res.data.status === 200) {
  //             toast.success("Login successfull");
  //             localStorage.setItem("user", res.data.result.accessToken);
  //             auth.login();
  //             navigate("/dashboard");
  //           }
  //           else{
  //             toast.error(res.data.message);
  //             navigate("/");
  //           }
  //         })
  //         .catch((err) => {
  //           if (!err.response) {
  //             toast.error(err.message);
  //             return;
  //           }
  //           if (err.response.status === 403) {
  //             navigate("/dashboard", {
  //               state: { user: userId },
  //               replace: false,
  //             });
  //             return;
  //           }
  //         });
  //       break;

  //     case 3:
  //       AccountService.adminlogin({
  //         email: userId,
  //         password: password,
  //         // persist: persist,
  //       })
  //         .then((res) => {
  //           console.log('res',res);
  //           console.log('res',res.data.token.accessToken);
  //           if (res.status === 200) {
  //             localStorage.setItem("user", res.data.token.accessToken);
  //             localStorage.setItem("role", res.data.role);
  //             console.log("===>",auth);
  //             console.log("withdraw");
  //             toast.success('Login Successfully')
  //             // alert("login successfull");
  //             auth.login();
  //             navigate("/welcome");
  //           }
  //           else{
  //             toast.error(res.data.message);
  //             navigate("/");
  //           }
  //         })
  //         .catch((err) => {
  //           if (!err.response) {
  //            alert(err.message);
  //             return;
  //           }
  //           if (err.response.status === 403) {
  //             navigate("/admindash", {
  //               state: { user: userId },
  //               replace: false,
  //             });
  //             return;
  //           }
  //         });
  //       break;
  //   }
  // }
  return (
    <div
      className="bg-info d-flex justify-content-center  align-items-center vh-100"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,217,252,1) 0%, rgba(231,233,195,0.9668242296918768) 100%)",
      }}
    >
      <div
        className=" card bg-transparent   p-5 rounded-3 justify-content-center kaushik"
        style={{
          width: " 25 rem",
          opacity: "100%",
          height: "30rem",
          display: "grid",
          placeItems: "center",
          boxShadow: "16px 15px 41px 3px rgba(0,0,0,0.62)",
        }}
      >
        {/* Tab List*/}
        <div className="nav" >
          <ul
            className="nav nav-pills nav-justified nav-tabs custom-nav-tabs"
            role="tablist"
            style={{ width: "23rem", marginLeft: "-0.3rem", cursor: "pointer" }}
          >
            {/* <li className="nav-item text-center" style={{ width: "33%" }}>
              <a
                className={`nav-link ${
                  activeTab === 1 ? "active" : ""
                } text-black fw-bold `}
                data-toggle="tab"
                aria-selected={activeTab === 1}
                onClick={() => handleClick(1)}
              >
                <b className="text-white" style={{ fontWeight: "800" }}>
                  Deposit
                </b>
              </a>
            </li>
            <li className="nav-item text-center" style={{ width: "33%" }}>
              <a
                className={`nav-link ${
                  activeTab === 2 ? "active" : ""
                } text-black fw-bold`}
                data-toggle="tab"
                aria-selected={activeTab === 2}
                onClick={() => handleClick(2)}
              >
                <b className="text-white">Withdraw</b>
              </a>
            </li> */}
            <li className="nav-item text-center" style={{ width: "33%" }}>
              <a
                className={`nav-link ${
                  activeTab === 3 ? "active" : ""
                } text-black fw-bold`}
                data-toggle="tab"
                aria-selected={activeTab === 3}
                onClick={() => handleClick(3)}
              >
                <b className="text-white">Obhisab.com</b>
                <br />
              </a>
            </li>
          </ul>
        </div>

        <span
          className="input-group-text px-2"
          style={{
            background:
              "linear-gradient(189deg, rgba(115,245,230,1) 0%, rgba(0,255,226,1) 100%)",
          }}
        >
          {activeTab === 1 && (
            <i
              className="fas fa-coins"
              style={{
                fontSize: "24px",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            ></i>
          )}
          {activeTab === 2 && (
            <i
              className="fas fa-money-check"
              style={{
                fontSize: "24px",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            ></i>
          )}
          {activeTab === 3 && (
            <i
              className="happy"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Happy} />
            </i>
          )}
        </span>

        <form
          style={{
            width: "18rem",
          }}
        >
          {/* UID input group */}
          <div className="input-group mb-3">
            {/* <div className="input-group-prepend">
              <span
                className="input-group-text px-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
                }}
              >
                <i
                  className="fas fa-user"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></i>
              </span>
            </div> */}
            <input
              type="email"
              placeholder="UserName"
              className="form-control"
              id="userId"
              onChange={handleClickUser}
            />
          </div>

          {/* Password input group */}
          <div className="input-group mb-3">
            {/* <div className="input-group-prepend">
              <span
                className="input-group-text px-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,200,174,1) 0%, rgba(221,34,34,0.8379726890756303) 72%)",
                }}
              >
                <i
                  className="fas fa-lock"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></i>
              </span>
            </div> */}
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="password"
              onChange={handleClickPassword}
            />
          </div>

          {/* Submit button */}
          <div style={{ marginBottom: "2rem" }}>
            <button
              type="submit"
              className="btn form-control fw-bolder text-white"
              value={"Log In"}
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
              onClick={handelsubmit}
            >
              Log In
            </button>
          </div>
          {/* <div className="d-flex justify-content-center pb-2">
            <Link to="register">
              <b>Dont Have a Account ? Register</b>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <p to="/forpas">
              {" "}
              <Link to="/forpass">Forgot Password?</Link>{" "}
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
