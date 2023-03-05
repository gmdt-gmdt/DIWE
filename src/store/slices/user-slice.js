import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    setUserData: (state, { payload }) => {
      state.users = payload;
    },
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    editUser: (state, { payload }) => {
      state.users = state.users.map((pic) => {
        return pic.id === payload.id ? { ...pic, ...payload } : pic;
      });
    },

    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((pic) => pic.id !== payload);
    },
  },
});
export const { setUserData, addUser, editUser, deleteUser, loginUser } =
  usersSlice.actions;
export default usersSlice.reducer;
