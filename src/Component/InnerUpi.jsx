import React, { useState } from "react";
import AccountsService from "../Services/AccountsService";
import { useAuth } from "../Utils/Auth";

const InnerUpi = () => {
  const auth = useAuth();
  const [upiId, setUpiId] = useState();
  const [upiphone, setUpiphone] = useState();
  const [upiApp, setUpiApp] = useState();

  const upiIdChange = (e) => {
    setUpiId(e.target.value);
  };

  const upiPhoneChange = (e) => {
    setUpiphone(e.target.value);
  };
  const upiAppChange = (e) => {
    setUpiApp(e.target.value);
  };
  const handelsubmit = () => {
    const data = {
      upi_details: [
        {
          upi_id: upiId,
          upi_number: upiphone,
          upi_app: upiApp,
        }
      ],
    };
    AccountsService.addupi(data, auth.user)
      .then((response) => {
        console.log(response.data);
        alert("UPI ID Added Sucessfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(upiApp, upiId);
  return (
    <div>
      <div
        className="modal fade"
        id="innerupi"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Please Provide The Details
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body ">
              <div className="d-flex flex-column modal-body gap-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="UPI ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  onChange={upiIdChange}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="UPI Phone Number"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  onChange={upiPhoneChange}
                />
                <select class="form-select" onChange={upiAppChange}>
                  <option selected>UPI APP NAME</option>
                  <option value="Google Pay">GPAy</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm">Paytm</option>
                  <option value="BHIM UPI">BHIM UPI</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handelsubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerUpi;
