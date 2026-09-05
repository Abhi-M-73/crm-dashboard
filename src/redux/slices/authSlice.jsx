import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: sessionStorage.getItem("token") || null,
  isAuthenticated: !!sessionStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      console.log(user, token);
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;