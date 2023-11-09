import React from "react";
import InnerBank from "./InnerBank";
import InnerUpi from "./InnerUpi";
import sbi from "../Assets/sbi.png";
import axis from "../Assets/axiss.png";
import gpay from "../Assets/gpay.png";
import phpay from "../Assets/phonepe.png";

const ModalBank = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalbk"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Please Select an Option
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex justify-content-center">
              {/* <input
                type="text"
                class="form-control"
                placeholder="Name of the Bank"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              /> */}
              <button
                className="ml-2 rounded-bottom justify-content-center"
                style={{
                  width: "180px",
                  height: "100px",
                  border: "3px solid black",
                  backgroundColor: "#fef6a5",
                }}
                data-bs-toggle="modal"
                data-bs-target="#innerbnk"
              >
                &nbsp;<b>Bank</b> <br />
                &nbsp; &nbsp;
                <img src={sbi} style={{ width: "18px" }} />
                &nbsp;
                <img
                  src={axis}
                  style={{ width: "26px", backgroundColor: "white" }}
                />
              </button>
              <button
                className="ml-2 rounded-bottom"
                style={{
                  width: "180px",
                  border: "3px solid black",
                  backgroundColor: "#fef6a5",
                }}
                data-bs-toggle="modal"
                data-bs-target="#innerupi"
              >
                <b> UPI</b>
                <br />
                &nbsp;
                <img
                  src={gpay}
                  style={{
                    width: "27px",
                  }}
                />
                <img src={phpay} style={{ width: "35px" }} />
              </button>
            </div>
            <div className="modal-footer mb-4"></div>
          </div>
        </div>
      </div>
      <div>
        <InnerBank />
        <InnerUpi />
      </div>
    </div>
  );
};

export default ModalBank;
