export const crawlCleaner = (obj) => {
  return obj.results.map(movie => {
    return {text: movie.opening_crawl,
            title: movie.title,
            year: movie.release_date}
  })
}

const findPlanetName = (url) => {}
const findSpecies = (url) => {}

export const peopleCleaner = (obj) => {
  return obj.results.reduce((acc, person) => {
    if(!acc[person.name]) {
      acc[person.name] = {};
      acc[person.name].name = person.name;

      fetch(person.homeworld)
        .then(resp => resp.json())
        .then(world => acc[person.name].homeworld = world.name)
        .catch(() => 'error')

      fetch(person.homeworld)
        .then(resp => resp.json())
        .then(world => acc[person.name].population = world.population)
        .catch(() => 'error')

      fetch(person.species)
        .then(resp => resp.json())
        .then(species => acc[person.name].species = species.name)
        .catch(() => 'error')

    }
    console.log(acc)
    return acc
  }, {})
}
