import React, { useState } from "react";
import "./App.css";
import mockData from "./data/mockData.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);
  const [selectedItem, setSelectedItem] = useState(null); // State to hold selected item details

  const categories = ["Tech", "Fashion", "Sports"];

  // Handle category filtering
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "") {
      setFilteredData(mockData); // Show all items if no category is selected
    } else {
      setFilteredData(mockData.filter((item) => item.category === category)); // Filter items by category
    }
  };

  // Handle sorting by engagement
  const handleSortChange = (order) => {
    const sortedData = [...filteredData];

    if (order === "asc") {
      sortedData.sort(
        (a, b) =>
          a.likes + a.shares + a.comments - (b.likes + b.shares + b.comments)
      ); // Ascending
    } else if (order === "desc") {
      sortedData.sort(
        (a, b) =>
          b.likes + b.shares + b.comments - (a.likes + a.shares + a.comments)
      ); // Descending
    }

    setFilteredData(sortedData);
  };

  // Handle "View Details" button
  const handleViewDetails = (item) => {
    setSelectedItem(item); // Set selected item
  };

  // Close modal
  const closeDetails = () => {
    setSelectedItem(null); // Clear selected item
  };

  return (
    <div className="App">
      <h1>Data Dashboard</h1>

      {/* Category Filter Dropdown */}
      <div className="filters">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Buttons */}
      <div className="filters">
        <button onClick={() => handleSortChange("asc")}>
          Sort by Engagement (Ascending)
        </button>
        <button onClick={() => handleSortChange("desc")}>
          Sort by Engagement (Descending)
        </button>
      </div>

      {/* Dashboard displaying filtered data */}
      <div className="dashboard">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Location: {item.location}</p>
            <p>Engagement Score: {item.likes + item.shares + item.comments}</p>
            <p>
              Reach:{" "}
              {(
                item.followers *
                (item.likes + item.shares + item.comments) /
                100
              ).toFixed(2)}
            </p>
            <button onClick={() => handleViewDetails(item)}>View Details</button>
          </div>
        ))}
      </div>

      {/* Modal for displaying item details */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedItem.name}</h2>
            <p>Category: {selectedItem.category}</p>
            <p>Location: {selectedItem.location}</p>
            <p>Likes: {selectedItem.likes}</p>
            <p>Shares: {selectedItem.shares}</p>
            <p>Comments: {selectedItem.comments}</p>
            <p>Followers: {selectedItem.followers}</p>
            <button onClick={closeDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;