import React from 'react';
import 'remixicon/fonts/remixicon.css'
import img7 from '../Images/image 7.png';
import img8 from '../Images/image 8.png';
import img9 from '../Images/image 9.png';
import img10 from '../Images/image 10.png';

const items = [
  { id: 1, image: img7, title: "T-shirt with Tape Details", price: "$120" },
  { id: 2, image: img8, title: "Skinny Fit Jeans", price: "$240" },
  { id: 3, image: img9, title: "Checkered Shirt", price: "$180" },
  { id: 4, image: img10, title: "Sleeve Striped T-shirt", price: "$130" }
];

const Category = ({ h1 }) => {
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
              <i class="ri-shopping-bag-line"></i>
              </button>
            </div>
            <div className="cat-product-things">
              <div className="cat-title">{item.title}</div>
              <div className="cat-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="category-button">
        <button>Vew all</button>
      </div>
    </section>
  );
};

export default Category;
