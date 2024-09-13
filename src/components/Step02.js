import "./components.css"

import Lesson from './Lesson';
import Top from "./Top";


export default function Step02(props) {
  const { lessonItems, selBook, nowStep, onAddLesson, onRemoveLesson, onPrev, onNext } = props;


  // useEffect(() => {
  //     getProducts().then((data) => {
  //         setProducts(data.data.products);
  //     });
  // }, [setProducts]);


  return (
    <div className="Step02">

      <Top nowStep={nowStep} />

      <div className="main-panel">
        <div className="step01-row03">
          선택교재  <div className="book-item">[{selBook.name}]</div>
        </div>
        <br /><br /> <br />
        {lessonItems.length === 0 && <div className='favsrow'>즐겨찾기를 추가하세요. 아래 전체교제에서 별아이콘을 클릭하세요 </div>}
        <div className="row-panel">
          <div className="row-inline">
            {lessonItems.map((lessonItem) => (
              <Lesson key={lessonItem.id} lessonItem={lessonItem} onAddLesson={onAddLesson} />
            ))}
          </div>
        </div>

        <br />      <br />      <br />      <br />      <br />      <br />      <br />      <br />      <br />

        {/* <div className="step01-row03">
          전체교재
      </div>

      <div className="row-panel">
        <div className="row-inline">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </div> */}
      </div>
      <div className='prevnextrow'>
        <div className='prevnext' onClick={() => onPrev()}>
          이전으로
        </div>
        <div className='prevnext' onClick={() => onNext()}>
          다음으로
        </div>

      </div>



    </div>
  );
};
