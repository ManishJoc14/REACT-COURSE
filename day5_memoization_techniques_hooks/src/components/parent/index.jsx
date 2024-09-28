import React from "react";
import { useState } from "react";
import Child from "../child";
import { useMemo } from "react";
import { useCallback } from "react";
import Child2 from "./../child2";

const Parent = () => {
  const [text, setText] = useState("navin");

  console.log("parent re-rendering..");

  //   const memoized = useMemo(() => <Child />, []);
  //   const memoizedData = useMemo(() => ({ fname: "manish" }), []);

  //   const handleClick = () => {
  //     console.log("Button cliked");
  //   };

  
  //   const memoizedFunc = useCallback(handleClick, []);
  //   const memoizedFunc = useMemo(() => handleClick, []);

  const child2Meoized = useMemo(() => <Child2 />, []);

  return (
    <div>
      <h1>Parent</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* <Child name="sakshi" handleClick={memoizedFunc} /> */}

      <Child children={child2Meoized} />

      {/* <Child> <Child2 /> </Child> */}
      {/* <Child children={<Child2 />} /> */}
    </div>
  );
};

export default Parent;
