import React, { Component } from 'react';
import './App.css';
import avengersData from './components/avengersData';
import AvengersList from './components/AvengersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengersData
    };
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers: by Randy Calderon</h1>
        </header>
        <div className="container-avengers">
         <AvengersList avengersData={this.state.avengers}/>
        </div>
      </div>
    );
  }
}

export default App;
