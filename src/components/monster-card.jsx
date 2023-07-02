import { Component } from "react";
import "../styles/monster-card.css";

class MonsterCard extends Component {
  render() {
    const { name, id, email } = this.props;

    return (
      <div className="monster-card">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default MonsterCard;
