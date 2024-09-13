import "./components.css"

import Lesson from "./Lesson";
import { useState } from 'react';
import Top from "./Top";

export default function Step03(props) {
  const { products, cartItems, selectedType, setSelectedType, onAdd, onRemove, typeItems, selBook, selLessons, nowStep, maxNo, onAddType, onRemoveType, onPrev, onNext, onNext1 } = props;





  return (
    <div className="Step03">

      <Top nowStep={nowStep} />

      <div className="main-panel">


        <div className="step01-row03">
          선택교재 <div className="book-item">[{selBook.name}]</div>
        </div>


        <div className="row-panel">
          <div className="row-inline">
            {selLessons.map((selLesson) => (
              <Lesson key={selLesson.id} lessonItem={selLesson} onAdd={onAdd} />
            ))}
          </div>
        </div>

<br /> <br /> <br />

<div className="xlll">
        <div className="row-one-vertical-title">
          <div className="step03-row">
            <div className="col-004">문제코드</div>
            <div className="col-001">문제유형</div>
            <div className="col-002">출제 예시</div>
            <div className="col-003">출제 단어수</div>
          </div>
        </div>

        <div className="row-one-vertical">
  
            {typeItems.length === 0 && <div>Empty</div>}
            {typeItems.map((item) => (
              <div key={item.id} className="step03-row">
                <div className="col-004">{item.code}</div>
                <div className="col-001">{item.name}</div>
                <div className="col-002">{item.sample}</div>
                <div className="col-003">
                  <div className="col-sub font-size">
                    <button onClick={() => onRemoveType(item)} className="col-sub-l">
                      ―
                    </button>
                    <div className="col-sub-c" >   {item.qty}      </div>
                    <button onClick={() => onAddType(item)} className="col-sub-r">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
      
        </div>
        </div>


      </div>

      <div className='prevnextrow'>
        <div className='prevnext' onClick={() => onPrev()}>
          이전으로
        </div>
        <div className='prevnext' onClick={() => onNext1()}>
          다음으로
        </div>

      </div>



    </div>
  );
};
