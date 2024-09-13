import React from 'react';
import "./components.css"


export default function Exam(props) {
  const { products, cartItems, examItems, onAdd, onRemove, typeItems, selBook, selLessons, nowStep, onAddType, onRemoveType, onPrev, onNext } = props;
  
  const itemsPrice = 0;
  const taxPrice =  0.14;
  const shippingPrice =  20;
  const totalPrice = 0;
  
    
  return (
    <aside className="col-app1">
        {/* <dir className="aside-panel">
          <div className='aside-title'>Cart Items</div>
          <div className='list-card'>
            {examItems.length === 0 && <div>Cart is empty</div>}
            {examItems.map((item) => (
              <div key={item.id} className="row-card">
                <div className="col-2">{item.name}</div>


                <div className="col-2 text-right">
                  원
                </div>

                <div className="col-2x">
                  <button onClick={() => onRemoveType(item)} className="remove">
                    -
                  </button>{' '}
                  <div >
                    {item.qty}
                  </div>


                  <button onClick={() => onAddType(item)} className="add">
                    +
                  </button>
                </div>

              </div>
            ))}

            {examItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row-price">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row-price">
                  <div className="col-2">Tax Price</div>
                  <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row-price">
                  <div className="col-2">Shipping Price</div>
                  <div className="col-1 text-right">
                    ${shippingPrice.toFixed(2)}
                  </div>
                </div>

                <div className="row-price">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <hr />
                <div className="row-price">
                  <button onClick={() => alert('Implement Checkout!')}>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </dir> */}
      </aside>

  );
}