import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // inicializo el estado
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
    // console.log("constructor");
  }

  // Acción que ocurre cuando el componente App se monta (aparece por primera vez)
  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((users) => this.setState({ monsters: users })); // Acá se usa users porque es lo que devuelve el .json y lo llamé así
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
              filteredMonsters: users,
            };
          }
          // () => console.log(this.state) // Notar que lo hice con arrowFuction para poder pasar este callback y dejé comentada la línea más simple
        )
      );
  }

  render() {
    // console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            // console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter(
              (monster) =>
                monster.name.toLocaleLowerCase().includes(searchString) // includes es case sensitive!!
            );
            this.setState(() => {
              return { filteredMonsters: filteredMonsters };
            });
          }}
        />
        {this.state.filteredMonsters.map((monster) => {
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
