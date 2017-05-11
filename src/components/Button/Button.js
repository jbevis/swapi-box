import React from 'react';

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

const { string, func } = React.PropTypes
Button.propTypes = {
  name: string.isRequired,
  onClick: func.isRequired,
  counter: string.isRequired
}
