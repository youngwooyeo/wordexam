import React from 'react';
import "./components.css"


export default function Favs(props) {
  const { favItem, onAddBook, onRemoveFav } = props;
  return (
    <a className='Book'  onClick={() => onAddBook(favItem)}>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <img className="image-panel" src={favItem.image} alt={favItem.name} />
      <div className='star' onClick={() => onRemoveFav(favItem)}>
    -
      </div>
    </a>
  );
}