import React from 'react';

export const Scroller = ({ crawlText }) => {
  const pickRandomFilm = (array) => {
    if (array.length) {
      let randomMovie = array[Math.floor(Math.random() * array.length)];
      return (
        <div>
          <p>{randomMovie.text}</p>
          <p>{randomMovie.title}</p>
          <p>{randomMovie.year}</p>
        </div>
      )
    } else {
      return (
        <p>In a galaxy far, far away ... </p>
      )
    }
  }

  return (
    <article className='crawl'>
      {pickRandomFilm(crawlText)}
    </article>
  )
}
