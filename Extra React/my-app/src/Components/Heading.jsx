import { useState } from "react";
import "./Heading.css";

function Heading({ filterRestaurants }) {
  const [searchInput, setSearchInput] = useState("");

  const searchChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const clickHandler = () => {
    filterRestaurants(searchInput);
  };

  return (
    <>
    <div className="container">
      <div className="heading">
        <h1>Bhojan Bajar</h1>
      </div>
      <div>
        <input className="searchbar" type="text" placeholder="search" value={searchInput} onChange={searchChangeHandler} />
      </div>
    </div>
      <button onClick={clickHandler} className="searchButton">Search</button>
      </>
  );
}

export default Heading;
