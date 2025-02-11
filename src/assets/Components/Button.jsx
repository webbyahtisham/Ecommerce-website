import React from 'react'

const Button = ({name , link}) => {
  return (
    <>
      <button className='button' >
        <a href={link}>{name}</a>
      </button>
    </>
  )
}

export default Button
