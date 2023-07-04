import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/cards-list";
import SearchBox from "./components/search-box";
import Title from "./components/title";

const App = () => {
  // setea los estados
  const [monsters, setMonsters] = useState([]); // inicializa el estado en []
  const [searchField, setSearchField] = useState(""); // inicializa el estado en ""
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users)); // OJO que acá el valor de users es distinto en memoria del que tenemos guardado, por venir de afuera.
  }, []); // useEffect se ejecuta la primera vez que se ejecuta App, y también cada vez que cambian los valores dentro de este array

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(
      (monster) => monster.name.toLocaleLowerCase().includes(searchField) // includes es case sensitive!!
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

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
};

export default App;
