import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input
          type="text"
          placeholder="Search by college/university or City..."
          id="search_icon"
        />
        <button className="location-btn">
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          Locate Me
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
