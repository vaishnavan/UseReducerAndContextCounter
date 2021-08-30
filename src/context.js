import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
export const mycontext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <mycontext.Provider value={{ state, dispatch }}>
      {children}
    </mycontext.Provider>
  );
}
