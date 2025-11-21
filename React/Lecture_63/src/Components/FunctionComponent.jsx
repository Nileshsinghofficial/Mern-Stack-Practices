import React from "react";
import { useState } from "react";

function FunctionComponent({name}) {
    const [num, setNum] = useState(54)
    console.log(name)
  return (
    <div>
      <h1>FunctionComponent</h1>
      <button  onClick={() => setNum(num + 1)}>Increment</button>
      <p>{num}</p>
      <h3>{name}</h3>
    </div>
  );
}

export default FunctionComponent;
