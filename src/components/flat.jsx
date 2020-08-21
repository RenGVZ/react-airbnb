import React, { Component } from 'react';


class Flat extends Component {
  render() {
    return(
      <div className="card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category"></div>
        <div className="card-description">
          <h2></h2>
          <p></p>
        </div>
        <div className="card-link"></div>
      </div>
    
    );
  }
}

export default Flat;
