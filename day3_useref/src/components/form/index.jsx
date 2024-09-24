import React, { useState, useRef } from "react";

const Form = () => {
  const [name, setName] = useState("navin");

  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  console.log({ name });
  return (
    <form>
      <label>
        Name:{" "}
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button onClick={handleClick}>Focus input</button>
    </form>
  );
};

export default Form;
