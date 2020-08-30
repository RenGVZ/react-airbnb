import React from 'react';


const Flat = ({ flat, selectFlat, selected, index }) => {
  const flatChange = () => {
    selectFlat(index);
  };
  
  return (
    <div onClick={flatChange} className={`card ${selected ? 'active' : '' }`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')` }}>
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
};

export default Flat;
