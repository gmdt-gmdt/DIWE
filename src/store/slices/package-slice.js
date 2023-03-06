import { createSlice } from "@reduxjs/toolkit";

export const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
  },
  reducers: {
    setPackagesData: (state, { payload }) => {
      state.packages = payload;
    },
    addPackage: (state, { payload }) => {
      state.packages.push(payload);
    },
    editPackage: (state, { payload }) => {
      state.packages = state.packages.map((pack) => {
        return pack.id === payload.id ? { ...pack, ...payload } : pack;
      });
    },
    deletePackage: (state, { payload }) => {
      state.packages = state.packages.filter(
        (pack) => pack.id !== payload
      );
    },
  },
});
export const {
  setPackagesData,
  addPackage,
  editPackage,
  deletePackage,
} = packagesSlice.actions;
export default packagesSlice.reducer;
