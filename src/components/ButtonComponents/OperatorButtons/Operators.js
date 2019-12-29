import React, {useState} from "react";

//import any components needed
import {operators} from "../../../data";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops, setOps] = useState(operators);
  return (
  ops.map(op => {return <div><button>{op.char}</button></div>})
  );
};

export default Operators;
