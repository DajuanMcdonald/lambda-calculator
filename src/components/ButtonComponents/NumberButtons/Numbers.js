import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = (props, index) => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);
  
  return (
    <div>
{number.map(numb => { return <NumberButton value={numb} key={numb} putNumber = {props.putNumber} /> })}
    </div>
  );
};

export default Numbers;
