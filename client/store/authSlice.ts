import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    email: null,
  },
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload.user;
      state.email = action.payload.email;
    },
  },
});

export const { authUser } = authSlice.actions;
export default authSlice.reducer;
