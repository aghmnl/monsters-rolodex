import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // inicializo el estado
    this.state = {
      monsters: [],
    };
    console.log("1");
  }

  // Acción que ocurre cuando el componente App se monta (aparece por primera vez)
  componentDidMount() {
    console.log("3");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((users) => this.setState({ monsters: users })); // Acá se usa users porque es lo que devuelve el .json y lo llamé así
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state) // Notar que lo hice con arrowFuction para poder pasar este callback y dejé comentada la línea más simple
        )
      );
  }

  render() {
    console.log("2");
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
