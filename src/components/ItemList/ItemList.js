import Item from '../Item/item';
import './ItemList.css';
import React from 'react';

const ItemList = React.memo(({ products = [] }) => {
  if (!products.length) {
    return <p className='lista-vacia'>No encontramos productos para esta categoría por el momento.</p>;
  }

  return products.map(dat => <Item key={dat.id} info={dat} />);
});

export default ItemList;
