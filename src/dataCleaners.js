export const crawlCleaner = (obj) => {
  return obj.results.map(movie => {
    return {text: movie.opening_crawl,
            title: movie.title,
            year: movie.release_date}
  })
}


export const peopleDataCleaner = (obj) => {
  return obj.results.map(person => {
    return { name: person.name,
             homeworld: {findPlanetName(person.homeworld)},
             species: {findSpecies(person.species)},
             popOfHomeworld: {}
            }
  })
}

findPlanetName(url) {

}
