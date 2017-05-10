import React, { Component } from 'react';
import './App.css';
import { Button } from '../Button/Button';
import { CardGrid } from '../CardGrid/CardGrid';
import { Scroller } from '../Scroller/Scroller';
import { crawlCleaner } from '../../dataCleaners.js'
import { peopleCleaner, planetCleaner, vehicleCleaner } from '../../dataCleaners.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      dataToDisplay: {},
      people: {},
      planets: {},
      vehicles: {},
      favorites: {},
      movieCrawls: []
    }
  }

  setCrawlState(dataObj) {
    let cleanCrawlData = crawlCleaner(dataObj);
    this.setState({movieCrawls: cleanCrawlData})
  }

  setPeopleState(dataObj) {
    let cleanPeopleData = peopleCleaner(dataObj);
    this.setState({people: cleanPeopleData});
  }

  setPlanetState(dataObj) {
    let cleanPlanetData = planetCleaner(dataObj);
    this.setState({planets: cleanPlanetData});
  }

  setVehicleState(dataObj) {
    let cleanVehicleData = vehicleCleaner(dataObj);
    this.setState({vehicles: cleanVehicleData});
  }

  componentWillMount() {
    const filmApi = 'http://www.swapi.co/api/films';
    fetch(filmApi)
      .then((resp) => resp.json())
      .then((films) => {
        this.setCrawlState(films)
      })
      .catch((error) => {
        alert('film api busted')
      })

    const peopleApi = 'http://www.swapi.co/api/people';
    fetch(peopleApi)
      .then(resp => resp.json())
      .then((people) => {
        this.setPeopleState(people)
      })

    const planetApi = 'http://www.swapi.co/api/planets';
    fetch(planetApi)
      .then((resp) => resp.json())
      .then((planets) => {
        this.setPlanetState(planets)
      })

    const vehicleApi = 'http://www.swapi.co/api/vehicles';
    fetch(vehicleApi)
      .then((resp) => resp.json())
      .then((vehicles) => {
        this.setVehicleState(vehicles)
      })
  }

  handleClickFaves() {
    let data = this.state.favorites;
    this.setState({dataToDisplay: data})
  }

  handleClickPeople() {
    let data = this.state.people;
    this.setState({dataToDisplay: data})
  }

  handleClickPlanets() {
    let data = this.state.planets;
    this.setState({dataToDisplay: data})
  }

  handleClickVehicles() {
    let data = this.state.vehicles;
    this.setState({dataToDisplay: data})
  }

  render() {
    return (
      <main id="App">
        <header className="App-header">
          <h2>SWAPI-Box</h2>
          <Button name='Favorites'
                  onClick={this.handleClickFaves.bind(this)} />
        </header>
        <section className='scroller-cards-holder'>
          <article className='scroller'>
            <Scroller crawlText={this.state.movieCrawls}/>
          </article>
          <article className='buttons'>
            <Button name='people'
                    onClick={this.handleClickPeople.bind(this)}/>
            <Button name='planets'
                    onClick={this.handleClickPlanets.bind(this)} />
            <Button name='vehicles'
                    onClick={this.handleVehicles.bind(this)} />
          </article>
          <CardGrid data={this.state.dataToDisplay} />
        </section>
      </main>
    );
  }
}

export default App;
