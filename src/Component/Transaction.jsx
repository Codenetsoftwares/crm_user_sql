import React, { useEffect, useState } from "react";
import AccountsService from "../Services/AccountsService";
import { useAuth } from "../Utils/Auth";
import { Link, useNavigate } from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { CSVLink } from "react-csv";

const Transaction = () => {
  const auth = useAuth();
  const id = auth.user.id;
  const [toggle, setToggle] = useState(true);
  const [documentView, setDocumentView] = useState([]);
  const [documentFilter, setDocumentFilter] = useState([]);
  const [startDatevalue, SetStartDatesetValue] = useState(new Date());
  const [endDatevalue, setEndDateValue] = useState(new Date());
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    AccountsService.getprofile(auth.user, id).then(
      (res) => (
        setDocumentView(res.data.transactionDetail),
        setAccountData(res.data.transactionDetail)
      )
    );
  }, [auth, id]);

  console.log(documentView);

  const handelDate = () => {
    const sdate = moment(startDatevalue, "DD-MM-YYYY HH:mm").toDate();
    const edate = moment(endDatevalue, "DD-MM-YYYY HH:mm").toDate();
    const filteredDocuments = documentView.filter((data) => {
      const transactionDate = new Date(data.createdAt);
      return transactionDate >= sdate && transactionDate <= edate;
    });
    setDocumentFilter(filteredDocuments);
    setToggle(false);
  };

  const handleStartDatevalue = (e) => {
    SetStartDatesetValue(moment(e).format("DD-MM-YYYY HH:mm"));
  };

  const handleEndDatevalue = (e) => {
    setEndDateValue(moment(e).format("DD-MM-YYYY HH:mm"));
  };

  const handleReset = () => {
    setDocumentView(accountData);
    setToggle(true);
    SetStartDatesetValue("");
    setEndDateValue("");
  };

  return (
    <div style={{ backgroundColor: "#ecfc9d" }}>
      <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
        <ul className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/welcome">
              <b>Your Profile</b>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/transaction">
              <b>Your Transactions</b>
            </Link>
          </li>
          {/* <li className="breadcrumb-item active" aria-current="page">
                    Log Out
                  </li> */}
        </ul>
      </nav>

      <div className="d-flex pt-2 justify-content-center">
        <h6 className="fw-bold text-nowrap pt-2"> Start Date</h6>
        <Datetime
          value={startDatevalue}
          onChange={handleStartDatevalue}
          dateFormat="DD-MM-YYYY"
          timeFormat="HH:mm"
          className="ms-2"
        />
      </div>
      <div className="d-flex pt-2 justify-content-center mb-3">
        <h6 className="fw-bold text-nowrap pt-2"> End Date</h6>
        <Datetime
          value={endDatevalue}
          onChange={handleEndDatevalue}
          dateFormat="DD-MM-YYYY"
          timeFormat="HH:mm"
          className="ms-3"
        />
      </div>
      <div className="d-flex pt-3 justify-content-center mb-2">
        <div className="mx-2">
          <button
            type="button"
            className="btn btn-dark"
            style={{ boxShadow: "17px 15px 27px -9px rgba(0, 0, 0, 0.41)" }}
            onClick={handelDate}
          >
            Filter
          </button>
        </div>
        <div className="mx-2">
          <button
            type="button"
            className="btn btn-dark"
            style={{ boxShadow: "17px 15px 27px -9px rgba(0, 0, 0, 0.41)" }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="mx-2">
          {toggle ? (
            <div className="mx-2">
              <CSVLink data={documentView} className="btn btn-success">
                Download Data
              </CSVLink>
            </div>
          ) : (
            <div className="mx-2">
              <CSVLink data={documentFilter} className="btn btn-success">
                Download Filter Data
              </CSVLink>
            </div>
          )}
        </div>
      </div>

      <div className=" container mt-5">
        {/* This is for Deposit Card Normal View */}
        <div
          className="card  rounded-2 mb-2"
          style={{
            boxShadow: "26px -13px 32px -15px rgba(29,29,31,0.68)",
            backgroundImage:
              "linear-gradient(90deg, rgba(60,251,165,1) 0%, rgba(171,246,241,1) 50%, rgba(60,251,165,1) 100%)",
          }}
        ></div>
        {toggle ? (
          <small>
            {/* Normal View */}
            <table class="table table-bordered  table-sm table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl w-auto">
              {/* This is for Deposit Card Normal View */}
              {/* <div
            className="card  rounded-2 mb-2"
            style={{
              boxShadow: "26px -13px 32px -15px rgba(29,29,31,0.68)",
              backgroundImage:
                "linear-gradient(90deg, rgba(60,251,165,1) 0%, rgba(171,246,241,1) 50%, rgba(60,251,165,1) 100%)",
            }}
          > */}
              <thead className="table-success">
                <tr align="center" bgcolor="green" className="fs-6">
                  <th scope="col fs-6" className="text-primary">
                    Date & Time
                  </th>
                  <th scope="col  fs-6" className="text-primary">
                    Amount
                  </th>
                  <th scope="col  fs-6" className="text-primary">
                    Txn Id
                  </th>
                  <th scope="col  fs-6" className="text-primary">
                    Txn Type
                  </th>
                  <th scope="col fs-6" className="text-primary">
                    Gateway
                  </th>
                  <th scope="col fs-6" className="text-primary">
                    Created By
                  </th>
                  {/* <th scope="col fs-6" className="text-primary">
                    User Id
                  </th> */}
                  <th scope="col fs-6" className="text-primary">
                    Introducer
                  </th>
                  <th scope="col" className="text-primary">
                    Bank
                  </th>
                  <th scope="col" className="text-primary">
                    Website
                  </th>
                </tr>
              </thead>
              {/* </div> */}
              <tbody>
                {documentView.length > 0 ? (
                  documentView.map((data, i) => {
                    return (
                      <tr align="center" className="fs-6">
                        <td>
                          {" "}
                          {new Date(data.createdAt).toLocaleString(
                            "default"
                          )}{" "}
                        </td>
                        <td className="">
                          {data.amount && (
                            <p className="col fs-6">{data.amount}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6">{data.depositAmount}</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6">{data.withdrawAmount}</p>
                          )}
                        </td>
                        <td>
                          {data.transactionID && (
                            <p className="col fs-6 ">{data.transactionID}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td>
                        <td>
                          {data.transactionType && (
                            <p className="col fs-6 ">{data.transactionType}</p>
                          )}
                        </td>
                        <td>
                          {data.paymentMethod && (
                            <p className="col fs-6">{data.paymentMethod}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td>
                        <td>{data.subAdminName}</td>
                        {/* <td>
                          {data.paymentMethod && (
                            <p className="col fs-6">{data.userId}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td> */}
                        <td>
                          {data.paymentMethod && (
                            <p className="col fs-6">
                              {data.introducerUserName}
                            </p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td>
                        <td>
                          <p className="col fs-6">
                            {data.bankName ? data.bankName : "N.A"}
                          </p>
                        </td>
                        <td>
                          <p className="col fs-6">
                            {data.websiteName ? data.websiteName : "N.A"}
                          </p>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h1 className="text-center">No Transaction Found</h1>
                )}
              </tbody>
            </table>
          </small>
        ) : (
          <small>
            {/* Normal View */}
            <table class="table table-bordered  table-sm table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl w-auto">
              {/* This is for Deposit Card Normal View */}
              {/* <div
            className="card  rounded-2 mb-2"
            style={{
              boxShadow: "26px -13px 32px -15px rgba(29,29,31,0.68)",
              backgroundImage:
                "linear-gradient(90deg, rgba(60,251,165,1) 0%, rgba(171,246,241,1) 50%, rgba(60,251,165,1) 100%)",
            }}
          > */}
              <thead className="table-success">
                <tr align="center" bgcolor="green" className="fs-6">
                  <th scope="col fs-6" className="text-primary">
                    Date & Time
                  </th>
                  <th scope="col  fs-6" className="text-primary">
                    Amount
                  </th>
                  <th scope="col  fs-6" className="text-primary">
                    Txn Id
                  </th>
                  <th scope="col  fs-6" className="text-primary">
                    Txn Type
                  </th>
                  <th scope="col fs-6" className="text-primary">
                    Gateway
                  </th>
                  <th scope="col fs-6" className="text-primary">
                    Created By
                  </th>
                  {/* <th scope="col fs-6" className="text-primary">
                    User Id
                  </th> */}
                  <th scope="col fs-6" className="text-primary">
                    Introducer
                  </th>
                  <th scope="col" className="text-primary">
                    Bank
                  </th>
                  <th scope="col" className="text-primary">
                    Website
                  </th>
                </tr>
              </thead>
              {/* </div> */}
              <tbody>
                {documentFilter.length > 0 ? (
                  documentFilter.map((data, i) => {
                    return (
                      <tr align="center" className="fs-6">
                        <td>
                          {" "}
                          {new Date(data.createdAt).toLocaleString(
                            "default"
                          )}{" "}
                        </td>
                        <td className="">
                          {data.amount && (
                            <p className="col fs-6">{data.amount}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6">{data.depositAmount}</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6">{data.withdrawAmount}</p>
                          )}
                        </td>
                        <td>
                          {data.transactionID && (
                            <p className="col fs-6 ">{data.transactionID}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td>
                        <td>
                          {data.transactionType && (
                            <p className="col fs-6 ">{data.transactionType}</p>
                          )}
                        </td>
                        <td>
                          {data.paymentMethod && (
                            <p className="col fs-6">{data.paymentMethod}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td>
                        <td>{data.subAdminName}</td>
                        {/* <td>
                          {data.paymentMethod && (
                            <p className="col fs-6">{data.userId}</p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td> */}
                        <td>
                          {data.paymentMethod && (
                            <p className="col fs-6">
                              {data.introducerUserName}
                            </p>
                          )}
                          {data.depositAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                          {data.withdrawAmount && (
                            <p className="col fs-6 ">N.A</p>
                          )}
                        </td>
                        <td>
                          <p className="col fs-6">
                            {data.bankName ? data.bankName : "N.A"}
                          </p>
                        </td>
                        <td>
                          <p className="col fs-6">
                            {data.websiteName ? data.websiteName : "N.A"}
                          </p>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h1 className="text-center">No Transaction Found</h1>
                )}
              </tbody>
            </table>
          </small>
        )}
      </div>
    </div>
  );
};

export default Transaction;
