import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountsService from "../Services/AccountsService";
import { useAuth } from "../Utils/Auth";

const ResetPassWord = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Create onChange handlers for each input field
  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmNewPassword) {
      toast.error("Please fill in all password fields.");
      return;
    }
    if (newPassword === confirmNewPassword) {
      const data = {
        userName: auth.user.userName,
        // oldPassword: oldPassword,
        password: confirmNewPassword,
      };
      AccountsService.ResetPassword(data, auth.user)
        .then((res) => {
          console.log("res", res);
          toast.success(res.data.message);
          navigate("/welcome");
          //   window.location.reload();
        })
        .catch((err) => {
          // console.log('error',err.response.data.message)
          toast.error(err.response.data.message);
          return;
        });
    } else {
      toast.error("Password Should be Same");
    }
  };

  const handleBackButton = (e) => {
    navigate("/welcome");
  };

  return (
    <div className="container mt-5 pt-5 d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        style={{ width: "30rem", border: "2px solid black" }}
      >
        <div className="ml-2 mr-2">
          {/* <div className="form-group ">
            <label htmlFor="exampleInputEmail1 ">
              {" "}
              &nbsp;&nbsp;Old Password*
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Old Password"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              &nbsp;&nbsp;New Password*
            </label>

            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">
              &nbsp;&nbsp;Confirm New Password*
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
          <button
            type="button"
            className="btn btn-primary ml-2"
            onClick={handleBackButton}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassWord;
