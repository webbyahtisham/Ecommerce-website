import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ name, link, onClick }) => {
  return (
    <>
      {link ? (
        <NavLink to={link} className="button">
          {name}
        </NavLink>
      ) : (
        <button className="button" onClick={onClick}>
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
