import React from 'react';

export const Card = ({ id, data, faveClick }) => {
  return(
    <div className='card'>
      <button className='markFavorite'
              onClick={ () => { faveClick(id) } }
              id={id}>
        &#9734;
      </button>

      {Object.keys(data).map((key, index) => {
        if (typeof data[key] === 'string') {
          return (
            <p key={index}>{key.toUpperCase()}: {data[key]}</p>
          )
        } else {
          return (
            <p key={index}>{key.toUpperCase()}: &nbsp;
              {data[key].map((resident, index) => {
                if (data[key].length > 1) {
                  return (
                    <span>{resident}, </span>
                  )
                } else {
                  return (
                    <span>{resident}</span>
                  )
                }
              })}
            </p>
          )
        }
      })}
    </div>
  )
}
