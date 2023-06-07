import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Agus" },
        { name: "Juan" },
        { name: "Nico" },
        { name: "Mateo" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
