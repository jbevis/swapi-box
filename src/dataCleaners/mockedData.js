export const mockedCrawl = {
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": 'string',
      "release_date": "1977-05-25"
    }
  ]
}

export const mockedPeople = {"results": [
        {
            "name": "Luke Skywalker",
            "homeworld": "http://swapi.co/api/planets/1/",
            "species": "http://swapi.co/api/species/1/"
        }
      ]}

export const mockedPlanets =  {
  "results": [
    {
      "name": "Alderaan",
      "climate": "temperate",
      "terrain": "grasslands, mountains",
      "population": "2000000000",
      "residents": [
        "http://swapi.co/api/people/1/"
      ]
    }
  ]
}

export const mockedVehicles = {
  "results": [
    {
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "crew": "46",
      "passengers": "30",
      "vehicle_class": "wheeled",
    }
  ]
}

export const mockedHomeworld = {
  "name": "Tatooine",
  "climate": "arid",
  "terrain": "desert",
  "population": "200000",
  "residents": [
    "http://swapi.co/api/people/1/"
  ]
}

export const mockedSpecies = {
  name: "Human"
}

export const mockedPerson = [
        {
            "name": "Luke Skywalker",
            "homeworld": "http://swapi.co/api/planets/1/",
            "species": [
                "http://swapi.co/api/species/1/"
            ]
        }
    ]
