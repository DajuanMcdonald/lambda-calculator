import React, {useState} from "react";

const Display = () => {
  const [total, setTotal] = useState(0);
  return (

    <div className="display">{total}</div>

  );
};

export default Display;
