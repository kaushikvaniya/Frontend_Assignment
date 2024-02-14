import { useState } from "react";

export default function Counter() {
  const [value, setvalue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setvalue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setvalue(value - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setvalue(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
