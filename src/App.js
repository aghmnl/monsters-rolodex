import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Agus", lastName: "Minetto" },
      company: "Henry",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hola {this.state.name.firstName}!</p>
          <button
            onClick={() => {
              this.setState({ name: "Juan" });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
