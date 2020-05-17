import axios from "axios";

const url = "http://localhost:8086/api/v1";

const api = {
  login(email, password) {
    return axios.post(`${url}/auth/login`, {
      email: email,
      password: password
    });
  },
  categories() {
    return axios.get(`${url}/category`);
  },
  category(name) {
    return axios.get(`${url}/category/${name}`);
  },
  recipe(name) {
    return axios.get(`${url}/recipe/${name}`);
  },
  refresh_token() {
    const token = JSON.parse(localStorage.getItem("token"));

    return axios.get(`${url}/users/checks`, {
      grant_type: "refresh_token",
      refresh_token: token["access_token"],
      headers: {
        Authorization: `Bearer ${token["access_token"]}`
      }
    });
  }
};

export default api;
