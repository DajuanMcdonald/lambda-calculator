import React, {useState} from "react";
import {numbers} from "../../../data";

const Numbers = (props, index) => {
  const [number, setNumber] = useState(numbers);


  return (

      <div className="number">

        {number.map(digit => {return <button key={digit} className="numbers">{digit}</button>})}
      </div>


   
    
          

  )

}

export const Zero = () => {
  const [zero, setZero] = useState(numbers[9])

  return (
    numbers[9]
    
    )
    
  }
  console.log(numbers[9]);

export default Numbers;
