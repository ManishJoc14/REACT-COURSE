import React, { useState } from "react";

const Inputs = () => {
  const [keys, setKeys] = useState([1, 3]);

  const handleChangeKeys = () => {
    // Change the keys to trigger re-render
    setKeys([keys[0] + 1, keys[1] + 4]);
  };

  let [inputs, setInputs] = useState([
    <input type="text" placeholder="firstname" />,
    <input type="text" placeholder="lastname" />,
  ]);

  // let arr = [
  //   {
  //     id: 1,
  //     name: "bibek1",
  //   },
  //   {
  //     id: 2,
  //     name: "bibek2",
  //   },
  //   {
  //     id: 3,
  //     name: "bibek3",
  //   },
  // ];

  const handleSwap = () => {
    setInputs([inputs[1], inputs[0]]);
  };

  return (
    <div>
      {/* {arr.map((obj) => (
        <h1 key={obj.id}>
          {obj.id} {obj.name}
        </h1>
      ))} */}

      {inputs.map((inp) => inp)}

      <button onClick={handleSwap}>swap elements</button>

      {/* <input
        key={keys[0]}
        data-key={keys[0]}
        type="text"
        placeholder="FirstName"
      />
      <input
        key={keys[1]}
        data-key={keys[1]}
        type="text"
        placeholder="LastName"
      /> */}

      {/* <button onClick={handleChangeKeys}>Change Keys</button> */}
    </div>
  );
};

export default Inputs;
