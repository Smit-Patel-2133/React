import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen duration-2000 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flax flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-while px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none px-4  py-1 rounded-xl text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
