import React, { useState } from 'react';

const Filters = ({ categories, onFilter, onSort }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [engagementRange, setEngagementRange] = useState([0, 5000]);

  const handleApplyFilters = () => {
    onFilter(selectedCategory, engagementRange);
  };

  return (
    <div className="filters">
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="range"
        min="0"
        max="5000"
        value={engagementRange[1]}
        onChange={(e) => setEngagementRange([0, parseInt(e.target.value)])}
      />
      <button onClick={handleApplyFilters}>Filter</button>
      <button onClick={() => onSort('engagement', 'asc')}>Sort Engagement ↑</button>
      <button onClick={() => onSort('engagement', 'desc')}>Sort Engagement ↓</button>
    </div>
  );
};

export default Filters;
