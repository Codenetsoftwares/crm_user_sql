import React from "react";

const LoginMain = () => {
  return (
    <div>
      <div
        style={{ marginTop: "15rem" }}
        className="d-flex justify-content-center"
      >
        <div
          class="card text-center bg-light"
          style={{
            width: "30rem",
            height: "30rem",
            border: "10px solid #16c2e0",
            borderRadius: "10px",
          }}
        >
          <div class="card-header text-bold">Obhisab.com</div>
          <div class="card-body d-flex justify-content-center mt-5">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control "
                  aria-describedby="emailHelp"
                  placeholder="Enter username here"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control "
                  placeholder="Enter password here"
                />
              </div>
              <div class="mb-3">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
