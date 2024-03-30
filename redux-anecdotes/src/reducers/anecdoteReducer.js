import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },

    vote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find((n) => n.id === id);
      const votedAnecdote = {
          ...anecdoteToVote, votes: anecdoteToVote.votes + 1
      };
      return state.map(anecdote => anecdote.id === id ? votedAnecdote : anecdote)
    },
    setAnecdote(state, action) {
      return (action.payload)
    }
  }
})

export const { createAnecdote, vote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer;
