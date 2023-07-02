import { Component } from "react";

class MonsterCard extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="card-list">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default MonsterCard;
