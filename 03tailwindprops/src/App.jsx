import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "smit",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 p-4 m-4 rounded-xl">hello smit </h1>
      <Card userName="smit Patel" btnText="say hello" />
      <Card userName="jeel Patel" />
    </>
  );
}

export default App;
