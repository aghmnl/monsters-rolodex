import { Component } from "react";
// import MonsterCard from "../c/omponents/monster-card";

class CardList extends Component {
  render() {
    const { monsters } = this.props; // destructuring

    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
