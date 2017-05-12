import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ id, data, keyName, faveClick, favoritesData }) => {
  const checkIfFavorited = (key) => {
    let favoriteClass = '';
    if (Object.keys(favoritesData).includes(key)) {
      favoriteClass = 'favorite markFavorite';
    } else {
      favoriteClass = 'markFavorite'
    }
    return favoriteClass;

  };

  return(
    <div className='card'>
      <button className={checkIfFavorited(keyName)}
              onClick={ () => { faveClick(id) } }
              id={id}>
        &#9734;
      </button>

      {Object.keys(data).map((key, index) => {
        if (typeof data[key] === 'string') {
          return (
            <p key={index} className='card-text'>{key.toUpperCase()}: {data[key]}</p>
          )
        } else {
          return (
            <p key={index} className='card-text'>{key.toUpperCase()}: &nbsp;
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

Card.propTypes = {
  key: PropTypes.string,
  id: PropTypes.number,
  data: PropTypes.object.isRequired,
  keyName: PropTypes.string.isRequired,
  faveClick: PropTypes.func.isRequired,
  favoritesData: PropTypes.object.isRequired
}
