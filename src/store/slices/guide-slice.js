import { createSlice } from "@reduxjs/toolkit";

export const guidesSlice = createSlice({
  name: "guides",
  initialState: {
    guides: [],
  },
  reducers: {
    setGuidesData: (state, { payload }) => {
      state.guides = payload;
    },
    addGuide: (state, { payload }) => {
      state.guides.push(payload);
    },
    editGuide: (state, { payload }) => {
      state.guides = state.guides.map((dest) => {
        return dest.id === payload.id ? { ...dest, ...payload } : dest;
      });
    },
    deleteGuide: (state, { payload }) => {
      state.guides = state.guides.filter((dest) => dest.id !== payload);
    },
  },
});
export const { setGuidesData, addGuide, editGuide, deleteGuide } =
  guidesSlice.actions;
export default guidesSlice.reducer;
