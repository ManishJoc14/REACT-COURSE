import React from "react";
import { useState, useRef } from "react";

const Counter = () => {
  let countLocal = 0;
  let countRef = useRef(0);
  const [countState, setCountState] = useState(0);
  // console.log("componet rendering");

  const handleClick = () => {
    countLocal = countLocal + 1; // doesn't cause re-render
    countRef.current = countRef.current + 1; // doesn't cause re-render
    setCountState(countState + 1); // cause re-render

    console.log({ countLocal, countRef: countRef.current, countState });
  };
  return (
    <>
      <button onClick={handleClick}>Re-render</button>
    </>
  );
};

export default Counter;
