import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => (
        <Flat
          flat={flat}
          index={index}
          key={flat.name}
          selectedFlat={selectedFlat.name === flat.name}
          selectFlat={selectFlat}
        />
      ))}
    </div>
  );
};

export default FlatList;
