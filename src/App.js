import React from "react";
import Radium from "radium";

import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Shankhadeep", age: "24" },
      { id: 2, name: "Aheria", age: "20" },
      { id: 3, name: "Papiya", age: "54" }
    ],
    showPersons: false
  };

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.find(p => {
      return (p.id = id);
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = persons;

    this.setState({ persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); //create a copy of the array
    const persons = [...this.state.persons]; //the ES6 way
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey I am The React App</h1>
        <button
          className="ui button primary"
          style={{ borderRadius: "5px" }}
          onClick={this.nameChangeHandler}
        >
          Switch Name
        </button>
        <button
          className={
            this.state.showPersons ? "ui button red" : "ui button green"
          }
          style={{
            borderRadius: "5px",
            ":hover": { backgroundColor: "lightgreen" }
          }}
          onClick={this.togglePersonsHandler}
        >
          Toggle Content
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
