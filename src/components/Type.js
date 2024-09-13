import React from 'react';
import "./components.css"


export default function Type(props) {
  const { typeItem, onAddType } = props;
  return (
    <a className='Lesson' onClick={() => onAddType(typeItem)}>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      {/* <img className="image-panel" src={lessonItem.image} alt={lessonItem.name} /> */}
     
      {lessonItem.name}
      
    </a>
  );
}