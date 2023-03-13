import axios from "axios";
import { API_BASE_URL } from "../../config";
import { login, logout } from "../slices/auth-slice";
import jwt from "jwt-decode"; // import dependency
import { toast } from "react-toastify";

//Auth
export const loginFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
      const { details } = response.data;
      const tokenFromApi = details.token;
      const tokenDecoded = jwt(tokenFromApi); // decode your token here
      localStorage.setItem("token", tokenDecoded);
      dispatch(login(tokenDecoded));

      toast.success("Successfully logged in");
    } catch (error) {
      toast.error("Login failed");
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
