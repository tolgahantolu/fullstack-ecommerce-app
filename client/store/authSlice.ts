import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { authUser } = authSlice.actions;
export default authSlice.reducer;
