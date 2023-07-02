import { Component } from "react";
import "./App.css";
import CardList from "./components/cards-list";
import SearchBox from "./components/search-box";

class App extends Component {
  constructor() {
    super();

    // inicializo el estado
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("1. constructor");
  }

  // Acción que ocurre cuando el componente App se monta (aparece por primera vez)
  componentDidMount() {
    console.log("3. componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((users) => this.setState({ monsters: users })); // Acá se usa users porque es lo que devuelve el .json y lo llamé así
      .then((users) =>
        // cada vez que se utiliza setState vuelve a renderizar
        this.setState(
          () => {
            return {
              monsters: users,
            };
          }
          // () => console.log(this.state) // Notar que lo hice con arrowFuction para poder pasar este callback y dejé comentada la línea más simple
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("2. render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLocaleLowerCase().includes(searchField) // includes es case sensitive!!
    );
    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
