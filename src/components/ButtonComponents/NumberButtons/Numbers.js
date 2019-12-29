import React, {useState} from "react";
import {numbers} from "../../../data";

const Numbers = () => {
  const [number, setNumber] = useState(numbers);


  return (

      <div className="number">

        {number.map(digit => {return <button className="numbers">{digit}</button>})}
      </div>


   
    
          

  )

}

export default Numbers;