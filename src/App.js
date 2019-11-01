import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPersonSate] = useState({
    persons: [{ name: "Shankhadeep", age: "24" }, { name: "Aheria", age: "20" }]
  });

  const switchNameHandler = newName => {
    setPersonSate({
      persons: [{ name: newName, age: "24" }, { name: "Aheria", age: "20" }]
    });
  };

  const nameChangeHandler = e => {
    setPersonSate({
      persons: [
        { name: personState.persons[0].name, age: "24" },
        { name: e.target.value, age: "20" }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hey I am The React App</h1>
      <button
        className="ui button primary"
        style={{ borderRadius: "5px" }}
        onClick={() => switchNameHandler("IronMan")}
      >
        Switch Name
      </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={switchNameHandler}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        changed={nameChangeHandler}
      >
        My hobby is to study
      </Person>
    </div>
  );
};

export default App;
