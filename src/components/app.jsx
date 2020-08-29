import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import GoogleMapReact from './google_map_react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}

export default App;
