import { Component } from "react";
import MonsterCard from "./monster-card";
class CardList extends Component {
  render() {
    const { monsters } = this.props; // destructuring

    return (
      <div>
        {monsters.map((monster) => {
          console.log(monster.name);
          return (
            <div key={monster.id}>
              <MonsterCard name={monster.name} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
