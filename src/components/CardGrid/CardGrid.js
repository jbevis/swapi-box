import React from 'react';
import { Card } from './Card/Card';

export const CardGrid = ({ data = {}, faveClick }) => {
  if (Object.keys(data).length) {
    return (
      <section className='card-grid'>
        {Object.keys(data).map((key, index) => {
            return (
              <Card key={index}
                    id={index}
                    data={data[key]}
                    faveClick={faveClick}/>
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
