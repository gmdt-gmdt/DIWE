import axios from "axios";
import {
  addUser,
  deleteUser,
  editUser,
  setUserData,
} from "../slices/user-slice";
import { API_BASE_URL } from "../../config";
//import jwt from 'jwt-decode' // import dependency

export const getUsersDataFromAPI = () => {
  return async (dispatch) => {
    const getUsers = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/users`);
      return data;
    };
    try {
      const users = await getUsers();
      dispatch(setUserData(users));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteUserFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
      dispatch(deleteUser(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addUserFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { username, email, password, country, city, phone, isAdmin } = data;

      console.log(username, data);
      const { data: img } = await axios.get(
        `https://api.dicebear.com/5.x/fun-emoji/svg?seed=${username ?? "diwe"}`
      );

      console.log(img, data);

      const { data: user } = await axios.post(`${API_BASE_URL}/auth/register`, {
        username,
        email,
        country,
        img,
        city,
        phone,
        password,
        isAdmin,
      });
      dispatch(addUser(user));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editUserFromAPI = (id, data) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.put(
        `${API_BASE_URL}/users/${id}`,
        data
      );
      dispatch(editUser(user));
    } catch (error) {
      console.error(error);
    }
  };
};
