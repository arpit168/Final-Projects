import React, { useState } from "react";


const Form = () => {
    const [name, setName] = useState("");
  return (
    <>
      <div className="bg-black">
        <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
      <h2 className="bg-white">{name}</h2>
      </div>
    </>
  );
};

export default Form;
