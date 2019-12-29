import React, {useState} from "react";
import {numbers} from "../../../data";

const Numbers = () => {
  const [number, setNumber] = useState(numbers);


  return (
    number.map(digit => {
    return <button>{digit}</button>
    })

  )

}

export default Numbers;