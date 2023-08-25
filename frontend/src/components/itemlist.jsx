// ItemList.js
import React, { useState, useEffect } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/get');
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.log('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
