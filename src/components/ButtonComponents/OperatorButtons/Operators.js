import React, {useState} from "react";
import OperatorButton from "./OperatorButton";

import {operators} from "../../../data";
const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops] = useState(operators);
  return (

    <div className="operator">
      {ops.map((op, index) => {return <OperatorButton  key={index} op={op.char} />})}
    </div>

  );
};

export default Operators;
