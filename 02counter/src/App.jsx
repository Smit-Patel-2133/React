import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 15;
  const addValue = () => {
    counter += 1;
    console.log("addValue clicked", counter);
  };
  return (
    <>
      <h1>smit patel</h1>
      <h2>counter value: 5</h2>
      <button onClick={addValue}>Add value:{counter}</button>
      <br />
      <button>remove value:{counter}</button>
      <p>footer :{counter}</p>
    </>
  );
}

export default App;
