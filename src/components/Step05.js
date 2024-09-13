import "./components.css"

import Top from './Top'
import Report from './Report'

export default function Step01(props) {
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
    <div className="Step05">

      <div className="step05-con">




        <div className="step05-panel1">
          <div className='main-title'>English Word Test Editor.</div>
          <Top nowStep={nowStep} />

          <div className="button-div">
            <button onClick={handlePrint}>Print</button>
          </div>


          <div className="s05-main">

            <div className="s05-left">
              <div className="s05-title">
                <div className="s05-title-cell1">출제 결과</div>
                <div className="s05-title-cell2">총{totalCount} 문제</div>
              </div>
              <div className="s05-row">줄간격
                <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" />
              </div>
              <div className="s05-row">글자크기  <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" /></div>
              <div className="s05-row">시험지 제목  <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" /></div>
              <div className="s05-row">학원명  <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" /></div>
              <div className="s05-row">학원로고  <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" /></div>
              <br /><br /><br />

              {/* <div className="s05-title">
                <div className="s05-title-cell1">시험일자</div>
              </div>
              <div className="s05-date">
                <div className="datepicker-toggle">
                  <span className="datepicker-toggle-button"></span>
                  <input type="date" className="datepicker-input" />
                </div>
              </div> */}

              <div className="s05-button"><div className="save-button" onClick={handlePrint}>시험지 저장하기</div></div>
            </div>

            <div className="s05-right">
              <div className="s05-title"> <div className="s05-title-cell1">레이아웃 설정</div></div>
              <div className="s05-dan">            <div className="s05-dan-con"></div></div>
              <div className="s05-padding"><div className="s05-padding-con"></div></div>

            </div>
          </div>

































          <div className='prevnextrow'>
            <div className='prevnext' onClick={() => onPrev()}>              이전으로            </div>
          </div>
        </div>





        <div className="step05-panel2">
          <Report
            products={products} cartItems={cartItems}
            bookItems={bookItems} favItems={favItems} lessonItems={lessonItems} typeItems={typeItems} examItems={examItems}
            examItems01={examItems01} examItems02={examItems02} examItems03={examItems03} examItems04={examItems04} examItems05={examItems05} examItems06={examItems06}
            selBook={selBook} selLessons={selLessons} selTypes={selTypes} selExams={selExams}
            totalCount={totalCount} nowStep={nowStep} maxNo={maxNo} selectedType={selectedType} setSelectedType={setSelectedType}
            setExamItems={setExamItems} setExamItems01={setExamItems01} setExamItems02={setExamItems02} setExamItems03={setExamItems03}
            onAdd={onAdd} onRemove={onRemove} onXxx={onXxx}
            onAddBook={onAddBook} onRemoveBook={onRemoveBook} onAddFav={onAddFav} onRemoveFav={onRemoveFav}
            onAddLesson={onAddLesson} onRemoveLesson={onRemoveLesson}
            onAddType={onAddType} onRemoveType={onRemoveType}
            onAddExam={onAddExam} onRemoveExam={onRemoveExam}
            onPrev={onPrev} onNext={onNext} onNext1={onNext1}
            componentRef={componentRef} handlePrint={handlePrint} isPrint={isPrint}
          />
        </div>



      </div>




    </div>
  );
};
