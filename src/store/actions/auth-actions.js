import axios from "axios";
import { API_BASE_URL } from "../../config";
import { login, logout } from "../slices/auth-slice";
import jwt from "jwt-decode"; // import dependency

//Auth
export const loginFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
      const { details } = response.data;
      const tokenFromApi = details.token;
      const tokenDecoded = jwt(tokenFromApi); // decode your token here
      console.log(tokenDecoded);
      localStorage.setItem("token", tokenDecoded);
      dispatch(login(tokenDecoded));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logoutFromAPI = () => {
  return async (dispatch) => {
    dispatch(logout());
    localStorage.setItem("token", "");
  };
};

export const getCurrentUser = () => localStorage.getItem("token");
