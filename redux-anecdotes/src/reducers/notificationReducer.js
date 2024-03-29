import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    newAnecdoteNotification(_, action) {
      return `"${action.payload}" anecdote created`
    },
    voteAnecdoteNotification(_, action) {
      return `you voted "${action.payload}"`
    },
    clearNotification() {
      return ""
    }
  },
});

export const { newAnecdoteNotification, voteAnecdoteNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
