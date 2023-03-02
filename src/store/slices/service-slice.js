import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
  },
  reducers: {
    setServicesData: (state, { payload }) => {
      state.services = payload;
    },
    addService: (state, { payload }) => {
      state.services.push(payload);
    },
    editService: (state, { payload }) => {
      state.services = state.services.map((dest) => {
        return dest.id === payload.id ? { ...dest, ...payload } : dest;
      });
    },
    deleteService: (state, { payload }) => {
      state.services = state.services.filter((dest) => dest.id !== payload);
    },
  },
});
export const { setServicesData, addService, editService, deleteService } =
  servicesSlice.actions;
export default servicesSlice.reducer;
