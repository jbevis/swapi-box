import React from 'react';

export const Button = ({ name = 'button' }) => {
  return (
    <button className={name}>
      {name.toUpperCase()}
    </button>
  )
}
