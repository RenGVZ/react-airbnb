import React from 'react';


const Flat = ({ flat, clicked }) => {
  const flatChange = (event) => {
    clicked(event.target);
  };
  return (
    <div onClick={flatChange} className="card" style={{ backgroundImage: `URL(${flat.imageUrl})` }}>
      <h3>
        {flat.price}
        <span> <strong>{flat.priceCurrency}</strong></span>
      </h3>
      <h2>{flat.name}</h2>
    </div>
  );
};

export default Flat;
