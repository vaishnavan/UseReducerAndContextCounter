import React, { useContext } from "react";
import { mycontext } from "./context";

export default function Counter() {
  const { state, dispatch } = useContext(mycontext);

  const { count } = state;

  const handleAdd = () => {
    dispatch({ type: "ADD" });
  };

  const handleSub = () => {
    dispatch({ type: "SUB" });
  };

  return (
    <>
      <h3>count: {count}</h3>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </>
  );
}
