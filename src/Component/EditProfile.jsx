import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./EditTransaction.css";
import EditIcon from "../Assets/edit-icon.jpg";
// import { toast } from "react-toastify";
import AccountsService from "../Services/AccountsService";
import { useAuth } from "../Utils/Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log("This is Auth", auth);
  const { id } = useParams();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [contact, setContact] = useState("");
  // const [acntHolder, setacntHolder] = useState("");
  // const [acntNumber, setacntNumber] = useState("");
  // const [bankName, setBankName] = useState("");
  // const [ifsc, setIfsc] = useState("");
  // const [upi, setUpi] = useState("");
  // const [upiId, setUpiId] = useState("");

  // useEffect(() => {
  //   AccountsService.getprofile(auth.user, id).then((res) => {
  //     return (
  //       console.log(res.data),
  //       setFName(),
  //       setLName(),
  //       setContact(),
  //       setacntHolder(),
  //       setacntNumber(),
  //       setBankName(),
  //       setIfsc(),
  //    )
  //   });
  // }, []);

  useEffect(() => {
    AccountsService.getprofile(auth.user, id).then((res) => {
      console.log("getres", res.data);
      setFName(res.data.firstname);
      setLName(res.data.lastname);
      setContact(res.data.contactNumber);
      // setacntHolder(res.data.bankDetail.accountHolderName);
      // setacntNumber(res.data.bankDetail.accountNumber);
      // setBankName(res.data.bankDetail.bankName);
      // setIfsc(res.data.bankDetail.ifscCode);
      // setUpi(res.data.upiDetail.upiApp);
      // setUpiId(res.data.upiDetail.upiId);
    });
  }, []);

  const fnameChange = (e) => {
    setFName(e.target.value);
  };
  const lnameChange = (e) => {
    setLName(e.target.value);
  };
  const contactChange = (e) => {
    setContact(e.target.value);
  };
  // const acntHolderChange = (e) => {
  //   setacntHolder(e.target.value);
  // };
  // const acntNumberChange = (e) => {
  //   setacntNumber(e.target.value);
  // };
  // const bankNameChange = (e) => {
  //   setBankName(e.target.value);
  // };
  // const ifscChange = (e) => {
  //   setIfsc(e.target.value);
  // };
  // const upiChange = (e) => {
  //   setUpi(e.target.value);
  // };
  // const upiIdChange = (e) => {
  //   setUpiId(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: fname,
      lastname: lname,
      contactNumber: contact,
      // bankDetail: { acntHolder, acntNumber, bankName },
      // upiDetail: { upi, upiId },
      // webSiteDetail: {},
    };
    console.log(id, data);
    AccountsService.editprofile(data, id, auth.user)
      .then((response) => {
        console.log("res", response.data);
        navigate("/welcome");
        toast.success("Edited Successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed! Invalid Data");
      });
  };

  return (
    <div className="EditTransaction">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div
        className="wrapper"
        style={{
          transition: "transform 0.3s",
          transform: "scale(1)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <div className="logo">
          <img src={EditIcon} alt="" />
        </div>
        <div className="text-center mt-4 name">Edit Profile</div>
        <form className="p-3 mt-3">
          <div className="modal-body d-flex justify-content-center">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="FirstName"
                  name="firstname"
                  value={fname}
                  onChange={fnameChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="LastName"
                  value={lname}
                  onChange={lnameChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Contact"
                  value={contact}
                  onChange={contactChange}
                />
              </div>
              {/* <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Account Holder Name"
                  value={acntHolder}
                  onChange={acntHolderChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Account Number"
                  value={acntNumber}
                  onChange={acntNumberChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Bank Name"
                  value={bankName}
                  onChange={bankNameChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="IFSC Code"
                  value={ifsc}
                  onChange={ifscChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Upi"
                  value={upi}
                  onChange={upiChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Upi ID"
                  value={upiId}
                  onChange={upiIdChange}
                />
              </div> */}
            </form>
          </div>
          <button className="btn mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
