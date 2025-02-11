import React from 'react';
import 'remixicon/fonts/remixicon.css'
import img11 from '../Images/image 11.png';
import img12 from '../Images/image 12.png';
import img13 from '../Images/image 13.png';
import img14 from '../Images/image 14.png';

const items = [
  { id: 1, image: img11, title: "T-shirt with Tape Details", price: "$100" },
  { id: 2, image: img12, title: "Skinny Fit Jeans", price: "$140" },
  { id: 3, image: img13, title: "Checkered Shirt", price: "$100" },
  { id: 4, image: img14, title: "Sleeve Striped T-shirt", price: "$150" }
];

const TopSelling = ({ h1 }) => {
  return (
    <section className="category">
      <div className="category-start">
        <h1 className="category-title">{h1}</h1>
      </div>
      <div className="category-container">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <div className="img-wrapper">
              <img src={item.image} alt={item.title} />
              <button className="add-to-cart">
              <i className="ri-shopping-bag-line"></i>
              </button>
            </div>
            <div className="cat-product-things">
              <div className="cat-title">{item.title}</div>
              <div className="cat-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="category-button">
        <button>Vew all</button>
      </div> */}
    </section>
  );
};

export default TopSelling;
