import React from 'react';
import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat flat={flat} key={flat.name} />) }
    </div>
  );
};

export default FlatList;
