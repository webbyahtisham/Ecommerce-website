import React from 'react';
// import { Link } from 'react-router-dom';

const Button = ({ name, link, onClick }) => {
  return (
    <>
      {link ? (
        <a href={link} className="button">
          {name}
        </a>
      ) : (
        <button className="button" onClick={onClick}>
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
