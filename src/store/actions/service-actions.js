import axios from "axios";
import {
  addService,
  deleteService,
  editService,
  setServicesData,
} from "../slices/service-slice";
import { API_BASE_URL } from "../../config";

export const getServicesDataFromAPI = () => {
  return async (dispatch) => {
    const getServices = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/services`);
      return data;
    };
    try {
      const services = await getServices();
      dispatch(setServicesData(services));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteServiceFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_BASE_URL}/services/${id}`);
      dispatch(deleteService(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addServiceFromAPI = (data) => {
  return async (dispatch) => {
    try {
      const { data: service } = await axios.post(
        `${API_BASE_URL}/services`,
        data
      );
      dispatch(addService(service));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editServiceFromAPI = (id, data) => {
  return async (dispatch) => {
    try {
      const { data: service } = await axios.put(
        `${API_BASE_URL}/services/${id}`,
        data
      );
      dispatch(editService(service));
    } catch (error) {
      console.error(error);
    }
  };
};
