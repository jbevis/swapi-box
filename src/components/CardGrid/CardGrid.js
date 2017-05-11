import React from 'react';
import { Card } from './Card/Card';

export const CardGrid = ({ data = {}, faveClick, favorites }) => {
  if (Object.keys(data).length) {
    return (
      <section className='card-grid'>
        {Object.keys(data).map((key, index) => {
            return (
              <Card key={index}
                    id={index}
                    data={data[key]}
                    keyName={key}
                    faveClick={faveClick}
                    favoritesData={favorites} />
            )
          })
        }
      </section>
    )
  } else {
    return (
      <section className='card-grid'>
        <h2 className='empty-grid'>Please select a category</h2>
      </section>
    )
  }
}
