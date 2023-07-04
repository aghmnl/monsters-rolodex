import MonsterCard from "./monster-card";
import "../styles/card-list.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { id, name, email } = monster;
      return (
        <div key={id}>
          <MonsterCard name={name} id={id} email={email} />
        </div>
      );
    })}
  </div>
);
export default CardList;
