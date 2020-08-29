import React from 'react';
import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div>
      <Flat flats={flats} />
    </div>
  );
};

export default FlatList;
