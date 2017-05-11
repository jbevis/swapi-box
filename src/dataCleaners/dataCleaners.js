export const crawlCleaner = (obj) => {
  return obj.results.map(movie => {
    return {text: movie.opening_crawl,
            title: movie.title,
            year: movie.release_date}
  })
}

export const peopleCleaner = (obj) => {
  return obj.results.reduce((acc, person) => {
    if (!acc[person.name]) {
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
    return acc
  }, {})
}

export const planetCleaner = (obj) => {
  return obj.results.reduce((acc, planet) => {
    if(!acc[planet.name]) {
      acc[planet.name] = {};
      acc[planet.name].name = planet.name;
      acc[planet.name].terrain = planet.terrain;
      acc[planet.name].population = planet.population;
      acc[planet.name].residents = [];

      if (!planet.residents.length) {
        acc[planet.name].residents = 'no residents';
      } else {
        planet.residents.forEach((residentURL) => {
          fetch(residentURL)
            .then(resp => resp.json())
            .then(resident => {
              acc[planet.name].residents.push(resident.name)})
            .catch(() => 'error')
        })
      }
    }
    return acc
  }, {})
}

export const vehicleCleaner = (obj) => {
  return obj.results.reduce((acc, vehicle) => {
    if (!acc[vehicle.name]) {
      acc[vehicle.name] = {};
      acc[vehicle.name].name = vehicle.name;
      acc[vehicle.name].model = vehicle.model;
      acc[vehicle.name].class = vehicle.vehicle_class;
      acc[vehicle.name].passengers = vehicle.passengers;
    }
    return acc
  }, {});
};
