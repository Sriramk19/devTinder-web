import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,

    removeUserFromFeed: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload); //action.payload is the id we ae sending
      return newArray;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
