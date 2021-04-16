import React, { useReducer, useContext, createContext } from "react";
import { LOAD_MOVIES_OK, LOAD_MOVIES_FAIL, LOAD_MOVIES_START } from "./Types";

export const MovieStoreContext = createContext();
MovieStoreContext.displayName = "MovieStoreContext";

const initialState = {
  movies: [],
  error: false,
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MOVIES_OK:
      return {
        ...state,
        movies: [...action.payload],
        loading: false,
        error: false,
      };
    case LOAD_MOVIES_FAIL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MovieStoreContext.Provider value={[state, dispatch]}>
      {children}
    </MovieStoreContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieStoreContext);
};
