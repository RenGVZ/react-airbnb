import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
    console.log(this.props.selectedFlat)
  }
  render() {
    const { flat, selectedFlat } = this.props;
    return (
      <div onClick={this.handleClick} className={`card ${selectedFlat ? 'active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')` }}>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <div className="card-category">
          <p>{flat.price} <strong>{flat.priceCurrency}</strong></p>
        </div>
      </div>
    );
  }
}

export default Flat;
