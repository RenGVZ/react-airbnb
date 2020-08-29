import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, clicked }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat clicked={clicked} flat={flat} key={flat.name} />) }
    </div>
  );
};

export default FlatList;
