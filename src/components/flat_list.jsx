import React from 'react';
import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      <Flat flats={flats} />
    </div>
  );
};

export default FlatList;
