import React, { useState, useEffect } from "react";
import AccountsService from "../Services/AccountsService";
import { useAuth } from "../Utils/Auth";

const ModalBankView = () => {
  const auth = useAuth();
  const id = auth.user.id;
  const [bankdata, setBankdata] = useState({});
  const [upidata, setUpidata] = useState({});

  useEffect(() => {
    AccountsService.getprofile(auth.user, id).then((res) =>
      setBankdata(res.data.Bank_Details)
    );

    AccountsService.getprofile(auth.user, id).then((res) =>
      setUpidata(res.data.Upi_Details)
    );
  }, [auth, id]);
  console.log("This is bank view=>>", bankdata);
  console.log("This is UPI view=>>", upidata);

  return (
    <div>
      <div
        className="modal fade"
        id="modalbkview"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Payment Details
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div class="card">
                {bankdata && Object.keys(bankdata).length > 0 ? (
                  <div class="card-body">
                    <h5>Bank Info :</h5>
                    <p>
                      Account Holder Name:&nbsp;
                      {bankdata.accountHolderName}
                    </p>
                    <p>Account Number:&nbsp;{bankdata.accountNumber}</p>
                    <p>Bank Name:&nbsp;{bankdata.bankName}</p>
                    <p>IFSC Code:&nbsp;{bankdata.ifscCode}</p>
                  </div>
                ) : null}

                {upidata && Object.keys(upidata).length > 0 ? (
                  <div className="card-body mt-2">
                    <h5>UPI Info :</h5>
                    <p>UPI ID: {upidata.upiId}</p>
                    <p>UPI APP Name: {upidata.upiApp}</p>
                    <p>UPI Phone Name: {upidata.upiNumber}</p>
                  </div>
                ) : null}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBankView;
