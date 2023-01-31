import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    czech: false,
  },
  reducers: {
    setCzech(state, action) {
      state.czech = true;
    },
    setEnglish(state, action) {
      state.czech = false;
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice;
