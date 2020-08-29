import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import simpleMap from './google_map_react';
import SimpleMap from './google_map_react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  setNewFlat = (e) => {
    console.log(e);
    // this.setState({
    //   selectedFlat: e.target
    // });
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} clicked={this.setNewFlat} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
