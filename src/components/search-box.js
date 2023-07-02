import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder } = this.props;

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
