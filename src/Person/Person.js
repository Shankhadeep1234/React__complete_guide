import React from "react";
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

export default Person;
