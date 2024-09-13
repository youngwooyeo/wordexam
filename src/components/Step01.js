import "./components.css"
import Book from './Book';
import Favs from './Favs';
import Top from "./Top";

export default function Step01(props) {
  const { bookItems, favItems, nowStep, onAddBook, onRemoveBook, onAddFav, onRemoveFav, onPrev, onNext } = props;


  // useEffect(() => {
  //     getProducts().then((data) => {
  //         setProducts(data.data.products);
  //     });
  // }, [setProducts]);


  return (
    <div className="Step01">
      {/* {selItems.length === 0 && <div className='favsrow'>즐겨찾기를 추가하세요. 아래 전체교제에서 별아이콘을 클릭하세요 </div>}
      <div className="row-panel">
        <div className="row-inline">
          {selItems.map((favItem) => (
            <Favs key={favItem.id} favItem={favItem} onRemoveFav={onRemoveFav}></Favs>
          ))}
        </div>
      </div> */}

      <Top nowStep={nowStep} />

      <div className="main-panel">
        <div className="step01-row03">
          즐겨찾기
        </div>
        <br />
        {favItems.length === 0 && <div className='favsrow'>즐겨찾기를 추가하세요. 아래 전체교제에서 별아이콘을 클릭하세요 </div>}
        <div className="row-panel">
          <div className="row-inline">
            {favItems.map((favItem) => (
              <Favs key={favItem.id} favItem={favItem} onAddBook={onAddBook} onRemoveFav={onRemoveFav} />
            ))}
          </div>
        </div>
        <br />
        <div className="step01-row03">
          전체교재
        </div>
        <br />
        <div className="row-panel">
          <div className="row-inline">
            {bookItems.map((bookItem) => (
              <Book key={bookItem.id} bookItem={bookItem} onAddBook={onAddBook} onAddFav={onAddFav} />
            ))}
          </div>
        </div>

        
      </div> 
      <div className='prevnextrow'>
 
          <div className='prevnext' onClick={() => onNext()}>
            다음으로
          </div>
        </div>
    </div>
  );
};
