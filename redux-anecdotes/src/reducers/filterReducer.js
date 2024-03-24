export const filterSearch = (substring) => {
  return {
    type: "FILTER_SEARCH",
    payload: substring
    }
}

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_SEARCH":
      return action.payload
    default:
      return state
  }
};

export default filterReducer;
