import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => (
        <Flat
          flat={flat}
          index={index}
          selectFlat={selectFlat}
          selectedFlat={flat.name === selectedFlat.name}
          key={flat.lat}
        />
      ))}
    </div>
  );
};

export default FlatList;
