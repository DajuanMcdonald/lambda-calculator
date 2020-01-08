import React, {useState} from "react";
import {numbers} from "../../../data";

const Numbers = (props, index) => {
  const [number, setNumber] = useState(numbers);


  return (

      <div className="number">

        {number.map(digit => {return <button key={digit} className="numbers">{digit}</button>})}
      </div>


   
    
          

  )

};

console.log(numbers[9]);

export default Numbers;
