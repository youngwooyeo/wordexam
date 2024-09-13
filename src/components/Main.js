import React from 'react';

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";
import Step05 from "./Step05";


import "./components.css"

export default function Main(props) {
  const {
    products, cartItems,
    bookItems, favItems, lessonItems, typeItems, examItems,
    examItems01, examItems02, examItems03, examItems04, examItems05, examItems06,
    selBook, selLessons, selTypes, selExams,
    totalCount, nowStep, maxNo, selectedType, setSelectedType,
    setExamItems, setExamItems01, setExamItems02, setExamItems03, setTypeItems,
    onAdd, onRemove, onXxx,
    onAddBook, onRemoveBook, onAddFav, onRemoveFav,
    onAddLesson, onRemoveLesson,
    onAddType, onRemoveType,  onAddType1, onRemoveType1,
    onAddExam, onRemoveExam,
    componentRef, handlePrint,
    onPrev, onNext, onNext1, onNext5, isView, isPrint} = props;

   

  return (
    <div className="Main">
      {isView ? <div className='main-title'>English Word Test Editor.</div> : null}

      {nowStep === 1 &&
        <Step01 bookItems={bookItems} favItems={favItems} nowStep={nowStep} onAddBook={onAddBook} onRemoveBook={onRemoveBook}  onAddFav={onAddFav} onRemoveFav={onRemoveFav}  onPrev={onPrev} onNext={onNext} />
      }
     
     {nowStep === 2 &&
        <Step02 lessonItems={lessonItems} selBook={selBook}  nowStep={nowStep} onAddLesson={onAddLesson} onRemoveLesson={onRemoveLesson} onPrev={onPrev} onNext={onNext} />
      }
      {nowStep === 3 &&
        <Step03 products={products} cartItems={cartItems} selectedType={selectedType} setSelectedType={setSelectedType}
        onAdd={onAdd} onRemove={onRemove} typeItems={typeItems} selBook={selBook} selLessons={selLessons} nowStep={nowStep} maxNo={maxNo} onAddType={onAddType} onRemoveType={onRemoveType} onPrev={onPrev} onNext={onNext} onNext1={onNext1} />
      }
      {nowStep === 4 &&
        <Step04 products={products} cartItems={cartItems} examItems={examItems} 
        examItems01={examItems01} examItems02={examItems02} examItems03={examItems03} examItems04={examItems04} examItems05={examItems05} examItems06={examItems06}
        setExamItems={setExamItems} setExamItems01={setExamItems01} setExamItems02={setExamItems02} setExamItems03={setExamItems03} setTypeItems={setTypeItems}
        totalCount={totalCount} onAdd={onAdd} onRemove={onRemove} onXxx={onXxx} selectedType={selectedType} setSelectedType={setSelectedType}
        typeItems={typeItems} selBook={selBook} selLessons={selLessons} nowStep={nowStep} 
        onAddType={onAddType} onRemoveType={onRemoveType} onAddType1={onAddType1} onRemoveType1={onRemoveType1} onPrev={onPrev} 
        onNext={onNext} onNext5={onNext5} />
      }
      {nowStep === 5 &&
        <Step05 products={products} cartItems={cartItems}
                bookItems={bookItems} favItems={favItems} lessonItems={lessonItems} typeItems={typeItems} examItems={examItems}
                examItems01={examItems01} examItems02={examItems02} examItems03={examItems03} examItems04={examItems04} examItems05={examItems05} examItems06={examItems06}
                selBook={selBook} selLessons={selLessons} selTypes={selTypes} selExams={selExams}
                totalCount={totalCount} nowStep={nowStep} maxNo={maxNo} selectedType={selectedType} setSelectedType={setSelectedType}
                setExamItems={setExamItems} setExamItems01={setExamItems01} setExamItems02={setExamItems02} setExamItems03={setExamItems03} setTypeItems={setTypeItems}
                onAdd={onAdd} onRemove={onRemove} onXxx={onXxx}
                onAddBook={onAddBook} onRemoveBook={onRemoveBook} onAddFav={onAddFav} onRemoveFav={onRemoveFav}
                onAddLesson={onAddLesson} onRemoveLesson={onRemoveLesson}
                onAddType={onAddType} onRemoveType={onRemoveType}
                onAddExam={onAddExam} onRemoveExam={onRemoveExam}
                onPrev={onPrev} onNext={onNext} onNext1={onNext1} 
                componentRef={componentRef} handlePrint={handlePrint}
                />

      }


    </div>
  );
}