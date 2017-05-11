# SWAPI-Box

In this project we built a React application that taps into the Star Wars API (SWAPI), and returns data on various characters, planets, and vehicles from the Star Wars univers. The app allows users to view data based on the above categories, as well as letting them favorite various cards. The app uses asynchronous JS api calls, and was intented to teach us how to implement this effectively with Promises and fetchMock via testing.

## Motivation

This project is part of the Front end engineering curriculum at Turing School of Software and Design for module 3.

## Code Example

```
export const Card = ({ id, data, keyName, faveClick, favoritesData }) => {
  const checkIfFavorited = (key) => {
    let favoriteClass = '';
    if (Object.keys(favoritesData).includes(key)) {
      favoriteClass = 'favorite';
    } else {
      favoriteClass = 'unfavorite'
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
  ```
  ## Contributors
  Leta Keane and Jack Bevis
