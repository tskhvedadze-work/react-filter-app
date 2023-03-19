import { useState } from "react";

import { persons } from "./config/mock.persons";

import { searchPerson } from "./utils/searchPerson";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        value={searchTerm}
        placeholder="საძიებო სიტყვა"
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <h1>Searched Items</h1>
      <ul>
        {persons?.map((person) => {
          if (searchTerm === "") {
            return;
          }
          if (searchPerson(person.name, searchTerm)) {
            return (
              <li key={person.name}>
                {person.name}
                <br />
                {person.city}
                <br />
                {person.age}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default App;
