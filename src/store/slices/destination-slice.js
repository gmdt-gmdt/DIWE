import { createSlice } from "@reduxjs/toolkit";

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    destinations: [],
  },
  reducers: {
    setDestinationsData: (state, { payload }) => {
      state.destinations = payload;
    },
    addDestination: (state, { payload }) => {
      state.destinations.push(payload);
    },
    editDestination: (state, { payload }) => {
      state.destinations = state.destinations.map((dest) => {
        return dest.id === payload.id ? { ...dest, ...payload } : dest;
      });
    },
    deleteDestination: (state, { payload }) => {
      state.destinations = state.destinations.filter(
        (dest) => dest.id !== payload
      );
    },
  },
});
export const {
  setDestinationsData,
  addDestination,
  editDestination,
  deleteDestination,
} = destinationsSlice.actions;
export default destinationsSlice.reducer;
