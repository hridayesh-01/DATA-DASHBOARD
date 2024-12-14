import React, { useState } from 'react';
import ItemCard from './ItemCard';
import Filters from './Filters';
import Modal from './Modal';

const Dashboard = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFilter = (category, range) => {
    const [min, max] = range;
    const filtered = data.filter(
      (item) =>
        (!category || item.category === category) &&
        (item.likes + item.shares + item.comments >= min) &&
        (item.likes + item.shares + item.comments <= max)
    );
    setFilteredData(filtered);
  };

  const handleSort = (criteria, order) => {
    const sorted = [...filteredData].sort((a, b) => {
      const valA = criteria === 'engagement' ? a.likes + a.shares + a.comments : a.followers;
      const valB = criteria === 'engagement' ? b.likes + b.shares + b.comments : b.followers;
      return order === 'asc' ? valA - valB : valB - valA;
    });
    setFilteredData(sorted);
  };

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div>
      <Filters
        categories={[...new Set(data.map((item) => item.category))]}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <div className="dashboard">
        {filteredData.map((item, index) => (
          <ItemCard key={index} item={item} onViewDetails={openModal} />
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} isOpen={true} onClose={closeModal} />}
    </div>
  );
};

export default Dashboard;
