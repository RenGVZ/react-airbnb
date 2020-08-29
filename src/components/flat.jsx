import React from 'react';


const Flat = ({ flats }) => {
  return (
    <div>
      {flats.map((flat, index) => (
        <ul key={index}>
          <li>{flat.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Flat;
