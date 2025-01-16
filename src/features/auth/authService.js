import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    const expirationInMinutes = 60;
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + expirationInMinutes * 60 * 1000
    ); // minutes

    Cookies.set("user", JSON.stringify(response.data), {
      expires: expirationDate,
    });
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    const expirationInMinutes = 60;
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + expirationInMinutes * 60 * 1000
    ); // minutes

    Cookies.set("user", JSON.stringify(response.data), {
      expires: expirationDate,
    });
  }

  return response.data;
};

// Logout user
const logout = () => {
  Cookies.remove("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
