import React from "react";
import DataProvider from "./context";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <DataProvider>
        <Counter />
      </DataProvider>
    </>
  );
}
