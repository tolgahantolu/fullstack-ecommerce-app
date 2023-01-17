import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload.user;
      state.email = action.payload.email;
    },
  },
});

export const { authUser } = authSlice.actions;
export default authSlice.reducer;
