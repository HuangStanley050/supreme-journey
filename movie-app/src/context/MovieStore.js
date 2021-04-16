import React, { useReducer, useContext, createContext } from "react";

export const MovieStoreContext = createContext();
MovieStoreContext.displayName = "MovieStoreContext";

const initialState = {
  movies: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
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
