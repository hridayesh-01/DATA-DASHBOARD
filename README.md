# Data Dashboard Application

This is a React-based Data Dashboard application that allows users to:
- Filter items by category.
- Sort items by engagement metrics.
- View detailed information about each item, including engagement history and location.

----------------------------------------------------------------------------------------------------------------------------

# Features

 1. **Category Filter**
- Users can filter data by selecting a category from a dropdown menu.
- Categories include `Tech`, `Fashion`, and `Sports`.

 2. **Sorting**
- Users can sort the data by engagement scores in ascending or descending order.

 3. **Item Details Modal**
- Clicking on the "View Details" button for any item opens a modal showing:
  - Item name
  - Category
  - Location
  - Likes, shares, and comments
  - Follower count

 4. **Dynamic Engagement Metrics**
- Engagement score is calculated as the sum of likes, shares, and comments.
- Reach is calculated as `(followers * engagement score / 100)`.

----------------------------------------------------------------------------------------------------------------------------

# Installation

**Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

----------------------------------------------------------------------------------------------------------------------------

# Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/data-dashboard.git
   cd data-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

----------------------------------------------------------------------------------------------------------------------------

# File Structure

```
.
├── public
├── src
│   ├── App.js           # Main React component
│   ├── App.css          # Application styling
│   ├── data
│   │   └── mockData.json  # Mock data for the application
│   └── index.js         # Application entry point
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

----------------------------------------------------------------------------------------------------------------------------

# Usage

1. Filter Data:
   - Use the dropdown menu to filter items by category.
   - Select "All Categories" to view all items.

2. Sort Data:
   - Click the "Sort by Engagement (Ascending)" or "Sort by Engagement (Descending)" buttons to sort items.

3. View Details:
   - Click the "View Details" button to see additional information about an item.

----------------------------------------------------------------------------------------------------------------------------

# Mock Data Structure

The mock data resides in `mockData.json` and follows this structure:
```json
{
  "id": 1,
  "name": "Tech Gadget A",
  "category": "Tech",
  "location": "San Francisco",
  "likes": 120,
  "shares": 30,
  "comments": 50,
  "followers": 1000
}

```

----------------------------------------------------------------------------------------------------------------------------

# Styling

- Custom CSS is used for a clean and responsive layout.
- Hover effects are implemented for buttons and cards.
- The modal is styled for seamless display of detailed information.
