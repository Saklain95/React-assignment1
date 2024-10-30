import React from "react";
import Person from "./Person.js";
import Button from "./Button.js";
import Header from "./Header.js";
import List from "./List.js";

function App() {
  function handleClick() {
    alert("button clicked by you ")
  }
  let items = ['p','w','s','k','i','l','l','s'];

  return (
    <div className="App">
      <Person name="John cena" age={30} />
      <Button text="Click me" onClick={handleClick} />
      <Header title="this is a header" />
      <List items={items} />
    </div>
  );
}

export default App;

