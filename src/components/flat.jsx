import React from 'react';


const Flat = ({ flats }) => {
  return (
    <div>
      {flats.map((flat, index) => (
        <div className="card" key={index} style={{ backgroundImage: `URL(${flat.imageUrl})` }}>
          <h1>{flat.name}</h1>
          <p>{flat.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Flat;
