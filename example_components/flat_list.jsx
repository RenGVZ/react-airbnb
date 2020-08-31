import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            selectFlat={selectFlat}
            selected={flat.name === selectedFlat.name}
            key={flat.lat}
            index={index}
          />);
      })
      }
    </div>
  );
};

export default FlatList;
