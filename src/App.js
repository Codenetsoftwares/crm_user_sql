import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./Component/Register";
import Welcome from "./Component/Welcome";
import { AuthProvider } from "./Utils/Auth";
import Profile from "./Component/Profile";
import { RequireAuth } from "./Utils/RequireAuth";
import EditProfile from "./Component/EditProfile";
import Transaction from "./Component/Transaction";
import ForPass from "./Component/ForPass";
import { ToastContainer } from "react-toastify";
import ResetPassWord from "./Component/ResetPassWord";
import LoginMain from "./Component/LoginMain";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>}></Route>
            <Route path="register" element={<Register />} />
            <Route path="forpass" element={<ForPass />} />

            <Route
              path="welcome"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />

            <Route
              path="editprofile/:id"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />

            <Route
              path="transaction"
              element={
                <RequireAuth>
                  <Transaction />
                </RequireAuth>
              }
            />
            <Route
              path="Resetpasword"
              element={
                <RequireAuth>
                 <ResetPassWord/>
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
