import React, {useState} from "react";

//import any components needed
import {operators} from "../../../data";
//Import your array data to from the provided data file

const Operators = (props, index) => {
  // STEP 2 - add the imported data to state
  const [ops, setOps] = useState(operators);
  return (

    <div className="operator">
      {ops.map(op => {return <button key={index} className="operators">{op.char}</button>})}
    </div>

  );
};

export default Operators;
