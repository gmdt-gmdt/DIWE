import axios from "axios";
import {
  addGuide,
  deleteGuide,
  editGuide,
  setGuidesData,
} from "../slices/guide-slice";
import { API_BASE_URL } from "../../config";
import { toast } from "react-toastify";

export const getGuidesDataFromAPI = () => {
  return async (dispatch) => {
    const getGuides = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/guides`);
      return data;
    };
    try {
      const guides = await getGuides();
      dispatch(setGuidesData(guides));
    } catch (error) {
      toast.error("Fetch guides data failed 🚨", {
        toastId: "id",
      });

      console.error(error);
    }
  };
};

export const deleteGuideFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_BASE_URL}/guides/${id}`);
      dispatch(deleteGuide(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addGuideFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { data: guide } = await axios.post(`${API_BASE_URL}/guides`, data);
      dispatch(addGuide(guide));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editGuideFromAPI = (id, data) => {
  return async (dispatch) => {
    try {
      const { data: guide } = await axios.put(
        `${API_BASE_URL}/guides/${id}`,
        data
      );
      dispatch(editGuide(guide));
    } catch (error) {
      console.error(error);
    }
  };
};
