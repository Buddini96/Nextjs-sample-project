"use client";

import { useState } from "react";

function page() {
  const [inputValue, setInputValue] = useState("");
  
  const handleClick = (para) => {
    alert(para);};
  
    const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h2 style={{ padding: "15px" }}>
        Event Handling, Creating Functions & Managing States | UseState
      </h2>
      <div style={{ padding: "15px" }}>
        <input
          type="text"
          style={{ padding: "10px" }}
          onChange={handleChange}
        />
        <button
          style={{ padding: "10px" }}
          onClick={() => handleClick("hello")}
        >
          Click me
        </button>

        <div>
          <h3 style={{ padding: "10px" }}>Value is : {inputValue}</h3>
        </div>

        {inputValue == "Buddini" && (
          <div style={{ color: "white" }}>
            <h1>Members area</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              enim, assumenda velit vero placeat molestias quibusdam aspernatur
              est ratione praesentium nemo ea quas quaerat amet, cumque id
              architecto animi maiores.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
