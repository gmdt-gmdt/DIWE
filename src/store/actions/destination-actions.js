import axios from "axios";
import {
  addDestination,
  deleteDestination,
  editDestination,
  setDestinationsData,
} from "../slices/destination-slice";
import { API_BASE_URL } from "../../config";
import { toast } from "react-toastify";

export const getDestinationsDataFromAPI = () => {
  return async (dispatch) => {
    const getDestinations = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/destinations`);
      return data;
    };
    try {
      const destinations = await getDestinations();
      dispatch(setDestinationsData(destinations));
    } catch (error) {
      toast.error("Fetch destinations data failed 🚨", {
        toastId: "id",
      });

      console.error(error);
    }
  };
};

export const deleteDestinationFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_BASE_URL}/destinations/${id}`);
      dispatch(deleteDestination(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addDestinationFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { data: destination } = await axios.post(
        `${API_BASE_URL}/destinations`,
        data
      );
      dispatch(addDestination(destination));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editDestinationFromAPI = (id, data) => {
  return async (dispatch) => {
    try {
      const { data: destination } = await axios.put(
        `${API_BASE_URL}/destinations/${id}`,
        data
      );
      dispatch(editDestination(destination));
    } catch (error) {
      console.error(error);
    }
  };
};
