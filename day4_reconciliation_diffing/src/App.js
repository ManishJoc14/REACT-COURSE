import { useState } from "react";

export default function App() {
  const [isTrue, setTrue] = useState(true);

  console.log(1, <p>See here</p>);
  console.log(2, <p>{isTrue ? "Boys" : "Girls"}</p>);
  console.log(3, <p>Hello {isTrue ? "Boys" : "Girls"}</p>);
  return (
    <>
      <button onClick={() => setTrue((prev) => !prev)}>Re-render</button>
      <p>See here</p>  
      <p>{isTrue ? "Boys" : "Girls"}</p>
      <p>Hello {isTrue ? "Boys" : "Girls"}</p>
    </>
  );
}
