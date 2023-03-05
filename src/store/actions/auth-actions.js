import axios from "axios";
import { API_BASE_URL } from "../../config";
import { login, logout } from "../slices/auth-slice";
//import jwt from 'jwt-decode' // import dependency

//Auth
export const loginFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get(
        `${API_BASE_URL}/users?email=${data.email}&password=${data.password}`
      );

      // const { data: user } = await axios.post(
      //   `${API_BASE_URL}/users/login`,
      //   data
      // );

      //

      //const token = jwt(token); // decode your token here
      localStorage.setItem("token", generateToken(32));
      dispatch(login(users[0]));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logoutFromAPI = () => {
  return async (dispatch) => {
    //const { data: users } = await axios.get(`${API_BASE_URL}/auth/logout`);

    dispatch(logout());
    localStorage.setItem("token", "");
  };
};
/**
 * Just a wrapper around token generation
 * @param {Number} length
 * @returns token[string]
 */
function generateToken(length) {
  const a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}
export const getCurrentUser = () => localStorage.getItem("token");
