import React from "react";

const FilterSidebar = () => {
  return (
    <div className="filter-panel">
      <h1>Filters</h1>

      {/* Price Section */}
      <div className="filter-section">
        <h4>Price</h4>
        <div className="price-range">
          <input
            type="range"
            min="400"
            max="2609"
            defaultValue="2609"
            className="slider"
            id="maxPrice"
          />
          <div className="price-labels">
            <span>₹400</span>
            <span>₹2609</span>
          </div>
        </div>
      </div>

      <hr />

      {/* Category */}
      <div className="filter-section">
        <h4>Category</h4>
        <label><input type="checkbox" /> 1-seater</label>
        <label><input type="checkbox" /> 2-seater</label>
        <label><input type="checkbox" /> 3-seater</label>
        <label><input type="checkbox" /> 4-seater</label>
      </div>

      <hr />

      {/* Type */}
      <div className="filter-section">
        <h4>Type</h4>
        <label><input type="checkbox" /> AC</label>
        <label><input type="checkbox" /> Non-AC</label>
      </div>

      <hr />

      {/* Distance */}
      <div className="filter-section">
        <h4>Distance</h4>
        <div className="distance-range">
          <input
            type="range"
            min="500"
            max="10000"
            defaultValue="500"
            step="100"
            className="slider"
            id="distanceSlider"
          />
          <div className="price-labels">
            <span>500m</span>
            <span>10km</span>
          </div>
        </div>
      </div>

      <hr />

      {/* Furnished */}
      <div className="filter-section">
        <h4>Furnished</h4>
        <label><input type="checkbox" /> Furnished</label>
        <label><input type="checkbox" /> Non-Furnished</label>
      </div>

      <hr />

      {/* Ratings */}
      <div className="filter-section">
        <h4>Ratings</h4>
        <label><input type="checkbox" /> 4.5+</label>
        <label><input type="checkbox" /> 4+</label>
        <label><input type="checkbox" /> 3+</label>
        <label><input type="checkbox" /> 2+</label>
        <label><input type="checkbox" /> 1+</label>
      </div>

      <hr />

      {/* Additional Features */}
      <div className="filter-section">
        <h4>Aditional Features</h4>
        <label><input type="checkbox" /> Wifi</label>
        <label><input type="checkbox" /> Laundary</label>
        <label><input type="checkbox" /> Mess</label>
      </div>

      <hr />

      {/* Button */}
      <div className="filter-section">
        <button className="show-result-btn">Show Results</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
