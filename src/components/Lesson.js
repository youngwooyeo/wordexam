import React from 'react';
import "./components.css"


export default function Lesson(props) {
  const { lessonItem, onAddLesson } = props;
  return (
    <a className='Lesson' onClick={() => onAddLesson(lessonItem)}>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      {/* <img className="image-panel" src={lessonItem.image} alt={lessonItem.name} /> */}
     
      {lessonItem.name}
      
    </a>
  );
}