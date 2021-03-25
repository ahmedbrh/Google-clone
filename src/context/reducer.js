// this is where the data gonna live !

export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM", // change or set the search  terms  of the actionTypes
};

const reducer = (state, action) => {
  console.log(action); // for debuggin

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
