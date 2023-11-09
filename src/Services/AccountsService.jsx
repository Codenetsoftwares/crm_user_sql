import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;
console.log(API_HOST);

class AccountsService {
  userRegister(data) {
    return axios({
      method: "post",
      url: API_HOST + "/api/accounts/user/register",
      data: data,
    });
  }
  userVerifiction(data) {
    return axios({
      method: "post",
      url: API_HOST + "/api/accounts/verify-email",
      data: data,
    });
  }
  userLogin(data) {
    return axios({
      method: "post",
      url: API_HOST + "/api/accounts/user/login",
      data: data,
    });
  }
  addBank(data, user) {
    return axios({
      method: "post",
      url: API_HOST + "/api/user/add-bank-name",
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }

  addupi(data, user) {
    return axios({
      method: "post",
      url: API_HOST + "/api/user/add-upi-name",
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }

  addweb(data, user) {
    console.log("data", data);
    return axios({
      method: "post",
      url: API_HOST + "/api/user/add-website-name",
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }
  getprofile(user, id) {
    return axios({
      method: "get",
      url: `${API_HOST}/api/user-profile-data/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }
  editprofile(data, id, user) {
    return axios({
      method: "put",
      url: `${API_HOST}/api/user-profile-edit/${id}`,
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }
  ResetPassword(data, user) {
    return axios({
      method: "post",
      url: `${API_HOST}/api/user/reset-password`,
      data: data,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }
}

export default new AccountsService();
