import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = () => {
  const [number] = useState(numbers);


  return (

      <div className="number">

        {number.map((digit, index) => {return <NumberButton key={index} digit={digit}/> })}
      </div>


   
    
          

  )

};

export default Numbers;
