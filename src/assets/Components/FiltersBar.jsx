import { useState } from 'react';

const FiltersBar = ({ onApplyFilters, onClearFilters }) => {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(150);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const maxRange = 200;
  const clearFilters = () => {
    setMinPrice(0);
    setMaxPrice(maxRange);
    setSelectedSize(null);
    setSelectedColor(null);
    setSelectedCategories([]);
    onClearFilters();
  };
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      minPrice,
      maxPrice,
      selectedSize,
      selectedColor,
      selectedCategories,
    });
  };

  const colors = ['Blue', 'White', 'Black', 'Red', 'Green', 'Yellow'];;
  const minPosition = (minPrice / maxRange) * 100;
  const maxPosition = (maxPrice / maxRange) * 100;

  return (
    <div>
      {/* Category Filter */}
      <div className="filter-section">
        <h3>Category</h3>
        <div className="category-options">
          {['T-shirts', 'Shirts', 'Shorts', 'Hoodies', 'Jeans'].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <h3>Price</h3>
        <div className="price-slider-wrapper">
          <div className="price-slider">
            <div className="slider-track" />
            <div
              className="active-track"
              style={{ left: `${minPosition}%`, right: `${100 - maxPosition}%` }}
            />
            <input
              type="range"
              min="0"
              max={maxRange}
              value={minPrice}
              onChange={handleMinChange}
              className="range-input min"
            />
            <input
              type="range"
              min="0"
              max={maxRange}
              value={maxPrice}
              onChange={handleMaxChange}
              className="range-input max"
            />
          </div>
          <div className="price-labels">
            <span>$0</span>
            <span>${maxRange}</span>
          </div>
          <div className="selected-range">Selected: ${minPrice} - ${maxPrice}</div>
        </div>
      </div>

      {/* Colors Filter */}
      <div className="filter-section">
        <h3>Colors</h3>
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className={`color-circle ${selectedColor === color ? 'selected' : ''} ${
                color === 'White' || color === 'Yellow' ? 'white' : ''
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      </div>

      {/* Sizes Filter */}
      <div className="filter-section">
        <h3>Size</h3>
        <div className="size-options">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button id="apply-filters" onClick={() => onApplyFilters({ minPrice, maxPrice, selectedColor, selectedSize, selectedCategories })}>
        Apply Filters
      </button>

      <button id="clear-filters" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersBar;
