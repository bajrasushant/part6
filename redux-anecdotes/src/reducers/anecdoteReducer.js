import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    vote(state, action) {
      const votedAnecdote = action.payload;
      return state.map((anecdote) =>
        anecdote.id === votedAnecdote.id ? votedAnecdote : anecdote,
      );
    },
    setAnecdote(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const voteAnecdote = (anecdoteToVote) => {
  return async (dispatch) => {
    const response = await anecdoteService.update(anecdoteToVote.id, {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1,
    });
    dispatch(vote(response));
  };
};

export const { vote, setAnecdote, appendAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
