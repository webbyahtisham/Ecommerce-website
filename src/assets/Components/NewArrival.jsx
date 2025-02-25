import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../Pages/Product';

const NewArrival = ({ h1 }) => {
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState([]);

  // Pick exactly 4 products and keep them stable
  useEffect(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
    setRandomProducts(shuffled);
  }, []);

  const handleProductClick = (item) => {
    const slugTitle = item.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${item.id}/${slugTitle}`, { state: { product: item } });
  };

  return (
    <section className="category">
      <div className="category-start">
        <h1 className="category-title">{h1}</h1>
      </div>
      <div className="category-container">
        {randomProducts.map((item) => (
          <div 
            className="card" 
            key={item.id} 
            onClick={() => handleProductClick(item)}
          >
            <div className="img-wrapper">
              <img src={item.img} alt={item.title} />
              <button className="add-to-cart">
                <i className="ri-shopping-bag-line"></i>
              </button>
            </div>
            <div className="cat-product-things">
              <div className="cat-title">{item.title}</div>
              <div className="cat-price">
                {item.discountPrice ? (
                  <>
                    <span className="new-price">${item.discountPrice}</span>
                    <span className="old-price">${item.price}</span>
                    <span className="discount">-{item.discount}%</span>
                  </>
                ) : (
                  <span>${item.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="category-button">
        <button>View all</button>
      </div>
    </section>
  );
};

export default NewArrival;
