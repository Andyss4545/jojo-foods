// import all the neccesary hooks from the context api
import { useContext, useReducer, createContext } from "react";

// this is the data layer
export const StateContext = createContext();

// here is our entire provider
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(initialState, reducer)}>
    {children} {/*this is the entire app, e.g App.js */}
  </StateContext.Provider>
);

// this is the globl value to use anywhere in your components
export const GlobaStateValue = () => useContext(StateContext);
