import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;
console.log(API_HOST);

class TransactionService {
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
}
export default new TransactionService();
