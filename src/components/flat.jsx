import React from 'react';


const Flat = ({ 
  flat,
  selectedFlat,
  selectFlat,
  index
}) => {
  return (
    <div onClick={selectFlat[index]} className={`card ${selectedFlat ? 'active' : ''}`} style={{ backgroundImage: `url(${flat.imageUrl})` }}>
      <div className="category">
        <h2>{flat.name}</h2>
      </div>
      <div className="card-description">
        <h3>
          {flat.price}
          <strong> {flat.priceCurrency}</strong>
        </h3>
      </div>
    </div>
  );
};

export default Flat;
