import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name = 'button', onClick, counter = '' }) => {

  const showCount = (counter) => {
    if (typeof counter === 'number') {
      return (
        <div className='counter'>
          {counter}
        </div>
      )
    }
  }

  return (
    <button className={name}
            onClick={onClick} >
      {name.toUpperCase()}
      {showCount(counter)}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
