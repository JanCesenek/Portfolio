import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    czech: true,
    url: "/",
  },
  reducers: {
    setCzech(state, action) {
      state.czech = true;
    },
    setEnglish(state, action) {
      state.czech = false;
    },
    setUrl(state, action) {
      state.url = action.payload;
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice;
