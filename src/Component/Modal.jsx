import React, { useState } from "react";
import AccountsService from "../Services/AccountsService";
import Addi from "../Assets/addtionn.png";
import Subtr from "../Assets/subtraction.png";
import { useAuth } from "../Utils/Auth";
const Modal = () => {
  const auth = useAuth();
  // const [inputCount, setInputCount] = useState(1);
  const [inputData, setInputData] = useState("");
const handleInputChange=(data)=>{
  setInputData(data);
}
  // const handleInputChange = (index, value) => {
  //   const newData = [...inputData];
  //   console.log('input',newData)
  //   newData[index] = value;
  //   setInputData(newData);
  // };

  // const addInput = () => {
  //   setInputCount(inputCount + 1);
  //   setInputData([...inputData, ""]); 
  // };

  // console.log("Website Data", inputData);

  // const removeInput = () => {
  //   if (inputCount > 1) {
  //     setInputCount(inputCount - 1);
  //     setInputData(inputData.slice(0, -1));
  //   }
  // };

  const handelsubmit = (e) => {
    e.preventDefault();
    
    // const websiteData = inputData.map((websiteName) => ({
    //   websiteName: websiteName
    // }));
  
    AccountsService.addweb({ website_name: [inputData] }, auth.user)
      .then((response) => {
        // console.log(response.data);
        alert("Website(s) Added Successfully");
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
        id="modalweb"
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

            <div className="modal-body">
              <div>
                {/* {Array?.from({ length: inputCount })?.map((_, index) => ( */}
                  <input
                    // key={index}
                    type="text"
                    className="form-control"
                    placeholder="Website Name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                    value={inputData} // Set input value
                    onChange={(e) => handleInputChange( e.target.value)} 
                  />
                {/* ))} */}
                <div className="d-flex flex-row justify-content-center mt-2 gap-2">
                  {/* <span
                    className="input-group-text d-flex justify-content-center"
                    id="basic-addon2"
                    onClick={addInput}
                    style={{
                      cursor: "pointer",
                      width: "50px",
                      backgroundColor: "white",
                      border: "none",
                    }}
                  >
                    <img src={Addi} style={{ width: "26px" }} />
                  </span>
                  <span
                    className="input-group-text d-flex justify-content-center"
                    id="basic-addon3"
                    onClick={removeInput}
                    style={{
                      cursor: "pointer",
                      width: "50px",
                      backgroundColor: "white",
                      border: "none",
                    }}
                  >
                    <img src={Subtr} style={{ width: "25px" }} />
                  </span> */}
                </div>
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

export default Modal;
