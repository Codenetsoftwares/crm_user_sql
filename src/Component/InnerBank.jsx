import { number } from "prop-types";
import React, { useState } from "react";
import AccountsService from "../Services/AccountsService";
import { useAuth } from "../Utils/Auth";

const InnerBank = () => {
  const [bname, setBname] = useState("");
  const [accno, setAccno] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [hname, setHname] = useState("");
  
  const auth = useAuth();
  // console.log("This is Auth==>>>", auth);
  const bnamechnage = (e) => {
    setBname(e.target.value);
  };
  const accnochnage = (e) => {
    setAccno(e.target.value);
  };
  const ifscchnage = (e) => {
    setIfsc(e.target.value);
  };
  const hnamechnage = (e) => {
    setHname(e.target.value);
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    const data = {
      bankName: bname,
      accountNumber: accno,
      ifscCode: ifsc,
      accountHolderName: hname,
    };
    AccountsService.addBank(data, auth.user)
      .then((response) => {
        // console.log(response.data);  
        alert("Bank Added Sucessfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="innerbnk"
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

            <div className="d-flex flex-column modal-body gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name of Bank *"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={bnamechnage}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Acc No. *"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={accnochnage}
              />
              <input
                type="text"
                className="form-control"
                placeholder="IFSC CODE *"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={ifscchnage}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Name of the Acc. Holder *"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={hnamechnage}
              />
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

export default InnerBank;
