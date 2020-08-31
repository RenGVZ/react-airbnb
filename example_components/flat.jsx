import React, { Component } from 'react';


class Flat extends Component {
  flatChange = () => {
    this.props.selectFlat(this.props.index);
  };

  render() {
    const { flat, selected } = this.props;
    return (
      <div onClick={this.flatChange} className={`card ${selected ? 'active' : '' }`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')` }}>
        <div className="card-category">
          <p>
            {flat.price}
            <span> <strong>{flat.priceCurrency}</strong></span>
          </p>
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
