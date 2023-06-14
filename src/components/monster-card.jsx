import { Component } from "react";

class MonsterCard extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default MonsterCard;
