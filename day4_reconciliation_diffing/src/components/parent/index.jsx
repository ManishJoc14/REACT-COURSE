import React, { useMemo, useState } from "react";
import Child from "../child";

const Parent = () => {
  const [state, setState] = useState(0);
  // console.log("parent rendering...");

  const handleClick = () => {
    setState(state + 1);
  };

  // console.log(child);

  // const h1_vdom = <h1>Virtual</h1>;
  // const h1_real = document.createElement("h1");
  // h1_real.innerText = "Real";

  // const memochild = useMemo(() => <Child />, []);

  return (
    <div>
      <p>Parent</p>
      <button onClick={handleClick}>Re-render Parent{state}</button>
      <Child />
    </div>
  );
};

export default Parent;
