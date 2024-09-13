import React from 'react';
import { useEffect, useRef, useState } from "react";

import "./report.css"
import { useReactToPrint } from "react-to-print";

export default function Report(props) {
  const {
    products, cartItems,
    bookItems, favItems, lessonItems, typeItems, examItems,
    examItems01, examItems02, examItems03, examItems04, examItems05, examItems06,
    selBook, selLessons, selTypes, selExams,
    totalCount, nowStep, maxNo, selectedType, setSelectedType,
    setExamItems, setExamItems01, setExamItems02, setExamItems03,
    onAdd, onRemove, onXxx,
    onAddBook, onRemoveBook, onAddFav, onRemoveFav,
    onAddLesson, onRemoveLesson,
    onAddType, onRemoveType,
    onAddExam, onRemoveExam,
    componentRef, handlePrint,
    onPrev, onNext, onNext1, isPrint } = props;





  return (



    // <div className={isPrint === true ? 'a4sheet-zoom100' : 'a4sheet'} ref={componentRef}>
    <div className='a4sheet' ref={componentRef}>
      <div className='a4sheet-container'>
        <div className='sheethead'>
          <div className='sheethead-container'>
            <div className='sheethead-row'>
              {selBook.name}
            </div>
            <div className='sheethead-flex'>
              <div className='sheethead-div-left'>
                반명 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 이름
              </div>
              <div className='sheethead-div-right'>
                |&nbsp;&nbsp;&nbsp;점수     &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  / &nbsp;&nbsp;&nbsp;{totalCount}
              </div>
            </div>
          </div>
        </div>



        <div className='sheetmain'>

          <div className='sheetmain-left'>
          {typeItems[0].qty !== 0 ?

<div>   ※다음 영단어의 뜻을 쓰세요.</div> : <div></div>
}
            {examItems01.length !== 0 &&
              examItems01.map((examItem, index) => (
                examItem.checked === true ?
                <div className='div-table' key={examItem.id}>
                <div className='div-tr'>
                  <div className='div-td' >{examItem.text}</div>
                  <div className='div-td-underline'></div>
                </div>
                
              </div>
:<div></div>
              ))}
            <br /> <br />
            
            {typeItems[2].qty !== 0 ?

            <div>※ 다음 한글로 제시된 뜻에 알맞은 영어단어를 쓰세요.</div> : <div></div>
}
            {examItems02.length !== 0 &&
              examItems02.map((examItem, index) => (
                examItem.checked === true ?
                <div className='div-table' key={examItem.id}>
                  <div className='div-tr'>
                    <div className='div-td' >{examItem.text}</div>
                    <div className='div-td-underline'></div>
                  </div>
                </div>
:<div></div>
              ))}

            <br /> <br />

          

          </div>
          <div className='sheetmain-middle'>
          </div>


          <div className='sheetmain-right'>

          {typeItems[2].qty !== 0 ?
             <div>※ 다음 영어로 제시된 뜻에 알맞은 영어단어를 쓰세요.</div> : <div></div>
            }
            {examItems03.length !== 0 &&
              examItems03.map((examItem, index) => (
                examItem.checked === true ?
                <div className='div-table3' key={examItem.id}>
                    <div className='div-td3' >{examItem.text}</div>
                    <div className='div-td-underline3'></div>
                  
                </div>
:<div></div>
              ))}

          </div>
        </div>




      </div>
    </div>


  );
}