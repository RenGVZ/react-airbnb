import React from 'react';


const Flat = (
  {
    flat,
    selectedFlat,
    selectFlat,
    index
  }
) => {
  return (
    <div onClick={() => selectFlat(index)} className={`card ${selectedFlat ? 'active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.2)), url(${flat.imageUrl})` }}>
      <div className="category">
        <h2>{flat.name}</h2>
      </div>
      <div className="card-description">
        <h3>
          {flat.price}
          <br></br>
          {flat.priceCurrency}
        </h3>
      </div>
    </div>
  );
};

export default Flat;
