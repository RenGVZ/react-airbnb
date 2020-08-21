import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderFlats = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
        />
      );
    });
  };

  return (
    <div>
      { renderFlats() }
    </div>
  );
};

export default FlatList;
