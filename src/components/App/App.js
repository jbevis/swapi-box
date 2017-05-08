import React, { Component } from 'react';
import './App.css';
import { Button } from '../Button/Button';
import { CardGrid } from '../CardGrid/CardGrid';
import { Scroller } from '../Scroller/Scroller';
import { crawlCleaner } from '../../dataCleaners.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
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

  componentWillMount() {
    const filmApi = 'http://www.swapi.co/api/films'
    fetch(filmApi).then((data) => {
      this.setCrawlState(data)
    }).catch((error) => {
      alert('film api busted')
    })
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h2>SWAPI-Box</h2>
          <Button />
        </header>
        <section>
          <Scroller crawlText={this.state.movieCrawls}/>
        </section>
        <section className='buttons'>
          <Button />
          <Button />
          <Button />
        </section>
        <CardGrid />
      </main>
    );
  }
}

export default App;
