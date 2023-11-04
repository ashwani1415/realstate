import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyItem: [],
};

const propertySlice = createSlice({
  name: "propertyData",
  initialState,
  reducers: {
    //add property ---
    addItem(state, action) {
      const newItem = action.payload;
      state.newItem;
    },
  },
});
