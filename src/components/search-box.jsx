import "../styles/search-box.css";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <div>
      <input
        id="search" // agrego esto para que no lo mencione como warning Chrome
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
