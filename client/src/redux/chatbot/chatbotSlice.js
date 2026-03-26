import { createSlice } from "@reduxjs/toolkit";

// chatbotSlice.js
const initialState = {
  isOpen: false,
  view: "home",
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    openChat: (state, action) => {
      state.isOpen = true;
      state.view = action.payload || "home";
    },
    closeChat: (state) => {
      state.isOpen = false;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { openChat, closeChat, setView } = chatbotSlice.actions;
export default chatbotSlice.reducer;