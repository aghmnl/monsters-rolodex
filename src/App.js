import { Component } from "react";
import "./App.css";
import CardList from "./components/cards-list";
import SearchBox from "./components/search-box";
import Title from "./components/title";

class App extends Component {
  constructor() {
    super();

    // inicializo el estado
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Acción que ocurre cuando el componente App se monta (aparece por primera vez)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        // cada vez que se utiliza setState vuelve a renderizar
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLocaleLowerCase().includes(searchField) // includes es case sensitive!!
    );
    return (
      <div className="App">
        <Title />
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
