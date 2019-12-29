import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {specials} from "../../../data";
const Specials = () => {
  // STEP 2 - add the imported data to state
  const [spec, setSpec] = useState(specials);

  return (
  spec.map( s => {return <div><button>{s}</button></div>})
  );
};

export default Specials;
