export const crawlCleaner = (obj) => {
  console.log('Still cleaning...');
  return obj.results.map(movie => {
    console.log('Cleaned a bit');
    return {text: movie.opening_crawl,
            title: movie.title,
            year: movie.release_date}
  })
}

const findPlanetName = (url) => {}
const findSpecies = (url) => {}

export const peopleDataCleaner = (obj) => {
  return obj.results.map(person => {
    let homeworld = person.homeworld;
    let species = person.species;
    return { name: person.name,
             homeworld: `${findPlanetName(homeworld)}`,
             species: `${findSpecies(species)}`,
             population: {}
            }
  })
}
