import React, {useState} from "react";

//import any components needed
import {operators} from "../../../data";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops, setOps] = useState(operators);
  return (
  ops.map(op => {return <button className="operators">{op.char}</button>})
  );
};

export default Operators;
