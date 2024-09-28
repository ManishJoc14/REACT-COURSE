import React from "react";
import { memo } from "react";

const Child = memo(({children}) => {
  console.log("child re-rendering..");
  return (
    <div>
      <h1>Child </h1>
      {children}
    </div>
  );
});

export default Child;
