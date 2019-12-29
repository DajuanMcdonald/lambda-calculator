import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {specials} from "../../../data";
import Display from "../../DisplayComponents/Display";
import { render } from "react-dom";
const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [spec, setSpec] = useState(specials);

  return (
    <div>
      
      {spec.map( s => {return <button className="specials">{s}</button>})}

    </div>
    
  );
};

export default Specials;
