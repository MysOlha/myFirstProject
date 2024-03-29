import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  name: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
  },
});
