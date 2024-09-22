import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // whenever the state changes within the component the component re-render
  // console.log("component is rendering/re-rendering");

  const handleClick = () => {
    setCount(count + 1);
    // console.log(count);
    // this will give old count here(not updated)

    // state updates are batched
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // this will increase count by 1 not by 4

    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // this will increase count by 4
  };
  return (
    <button
      // onClick={() => setCount(count + 1)}
      onClick={handleClick}
      className="bg-violet-400 text-white p-4 rounded-md mt-10"
    >
      You clicked me {count} times
    </button>
  );
};

export default Counter;
