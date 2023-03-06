import axios from "axios";
import {
  addPackage,
  deletePackage,
  editPackage,
  setPackagesData,
} from "../slices/package-slice";
import { API_BASE_URL } from "../../config";
import { toast } from "react-toastify";

export const getPackagesDataFromAPI = () => {
  return async (dispatch) => {
    const getPackages = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/packages`);
      return data;
    };
    try {
      const packages = await getPackages();
      dispatch(setPackagesData(packages));
    } catch (error) {
      toast.error("Fetch packages data failed 🚨", {
        toastId: "id",
      });

      console.error(error);
    }
  };
};

export const deletePackageFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_BASE_URL}/packages/${id}`);
      dispatch(deletePackage(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addPackageFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { data: _package } = await axios.post(
        `${API_BASE_URL}/packages`,
        data
      );
      dispatch(addPackage(_package));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editPackageFromAPI = (id, data) => {
  return async (dispatch) => {
    try {
      const { data: _package } = await axios.put(
        `${API_BASE_URL}/packages/${id}`,
        data
      );
      dispatch(editPackage(_package));
    } catch (error) {
      console.error(error);
    }
  };
};
