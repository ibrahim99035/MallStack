import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../../CSS/CardGrid.css';

import { fetchStores } from '../../API/store/getstores';

import { fetchProducts } from '../../API/product/getproducts';

const CardGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stores on component mount
  useEffect(() => {
    const getStores = async () => {
      try {
        const storesData = await fetchProducts();
        setData(storesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getStores();
  }, []);

  if (loading) {
    return <div id='loadingDiv'>Loading...</div>;
  }

  if (error) {
    return <div id='errorDiv'>Error: {error}</div>;
  }

  return (
    <div id='products'>
      <h2>تصفح الأثاث</h2>
      <div className="card-grid">
        {data.map((card, index) => (
          <Card
            key={index}
            image={card.coverImage}
            title={card.name}
            description={card.description}
          />
        ))}
      </div>
      <a href="/malls" className="slider-button">المزيد</a>
    </div>
  );
};

export default CardGrid;