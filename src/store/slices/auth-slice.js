import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
