import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // This effect runs after the first render and also whenever the count changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1 );
    }, 1000);

    // cleanup funtion
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   // cleanup funtion
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [count]);

  return (
    <>
      <h2>Count is {count}</h2>
    </>
  );
};

export default Counter;
