const ItemCard = ({ item, onViewDetails }) => {
    const engagementScore = item.likes + item.shares + item.comments;
    const reach = ((item.followers * engagementScore) / 100).toFixed(2);
  
    return (
      <div className="card">
        <h3>{item.name}</h3>
        <p>Engagement Score: {engagementScore}</p>
        <p>Reach: {reach}</p>
        <p>Category: {item.category}</p>
        <p>Location: {item.location}</p>
        <button onClick={() => onViewDetails(item)}>View Details</button>
      </div>
    );
  };
  
  export default ItemCard;
  