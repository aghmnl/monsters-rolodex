import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster1: { name: "Agus" },
      monster2: { name: "Juan" },
      monster3: { name: "Nico" },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>
      </div>
    );
  }
}

export default App;
