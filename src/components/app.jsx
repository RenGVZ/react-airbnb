import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import GoogleMapReact from './google_map_react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null
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
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}

export default App;
