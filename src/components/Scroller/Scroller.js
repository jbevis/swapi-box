import React from 'react';
import PropTypes from 'prop-types';

export const Scroller = ({ crawlText }) => {
  const pickRandomFilm = (array) => {
    if (!array.length) {
      return (
        <div />
      )
    } else {
      let randomMovie = array[Math.floor(Math.random() * array.length)];
      return (
        <div>
          <p>{randomMovie.text}</p>
          <p className='scroller-title'>{randomMovie.title}</p>
          <p>{randomMovie.year}</p>
        </div>
      )
    }
  }

  return (
    <article className='crawl'>
      {pickRandomFilm(crawlText)}
    </article>
  )
}

Scroller.propTypes = {
  crawlText: PropTypes.array.isRequired
}
