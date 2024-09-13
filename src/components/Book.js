import React from 'react';
import "./components.css"


export default function Book(props) {
  const { bookItem, onAddBook, onAddFav } = props;
  return (
    <a className='Book' onClick={() => onAddBook(bookItem)}>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <img className="image-panel" src={bookItem.image} alt={bookItem.name} />
      <div className='star' onClick={() => onAddFav(bookItem)}>
        +
      </div>
    </a>
  );
}