import React from 'react';
import './App.css';
import Greet from "./components/Greet";
import Person from "./components/Person";
import PeopleList from './components/PeopleList';

function App() {
  const personName = {
      firstName: "Abhishek",
      lastName: "Hulage"
  }

  const peopleList = [
    {
      firstName: "Aditya",
      lastName: "Birangal"
    },

    {
      firstName: "Pratik",
      lastName: "Kale"
    },

    {
      firstName: "Pradyumna",
      lastName: "Gayake"
    },

  ]

  return (
    <div className="App">
      <Greet name="Abhishek" />
      <Person personName={personName} />
      <PeopleList names={peopleList} />
    </div>
  );
}

export default App;
