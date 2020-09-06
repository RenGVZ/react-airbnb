import React, { Component } from 'react';
import { flats } from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = () => {
    console.log("Here");
  }

  render() {
    const { selectedFlat } = this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          Map Here
        </div>
      </div>
    );
  }
}

export default App;
