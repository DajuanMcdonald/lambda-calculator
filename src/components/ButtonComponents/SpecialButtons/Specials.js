import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";


const Specials = () => {
  // STEP 2 - add the imported data to state

  const [spec] = useState(specials);

  return (
    <div>
      
      {spec.map(( s, index) => {return <SpecialButton key={index} s={s} className="specials"/>})}

    </div>
    
  );
};

export default Specials;
