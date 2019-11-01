import React from "react";
import Radium from "radium"; //from hover effects etc etc

import "./Person.css";

const Person = ({ name, age, children, click, changed }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I am {name} and I am {age} years old
      </p>
      <p>{children}</p>
      <div className="ui input">
        <input type="text" onChange={changed} value={name} />
      </div>
    </div>
  );
};

export default Radium(Person);
