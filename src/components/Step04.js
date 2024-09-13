import "./components.css"

import { useState } from 'react';
import Top from "./Top";

export default function Step04(props) {
  const { products, cartItems, examItems,
    examItems01, examItems02, examItems03, examItems04, examItems05, examItems06,
    setExamItems, setExamItems01, setExamItems02, setExamItems03, setTypeItems,
    totalCount, onAdd, onRemove, onXxx, selectedType, setSelectedType,
    typeItems, selBook, selLessons, nowStep, onAddType, onRemoveType, onAddType1, onRemoveType1, onPrev, onNext, onNext5 } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  // useEffect(() => {
  //     getProducts().then((data) => {
  //         setProducts(data.data.products);
  //     });
  // }, [setProducts]);

  const [selectedIds, setSelectedIds] = useState([]);
  const [selExamItem, setSelExamItem] = useState([]);
  const [tempItem, setTempItem] = useState([]);



  // const handleCheckboxChange = (event) => {
  // const textt = event.target.name;
  // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX %c", textt)
  // console.log(textt)
  // const checkedId = event.target.value;
  // if (event.target.checked) {
  //   console.log(" CheckBox : " + checkedId)
  //   setSelectedIds([...selectedIds, checkedId])
  // } else {
  //   setSelectedIds(selectedIds.filter(id => id !== checkedId))
  // }
  // }



  var zzz = [];











  /// Check 할 때마다 selectedType에 따라 해당 배열에 추가한다.
  /// 갯수 체크 전체문항수를 넘어 설 수 없다.
  /// typeItems의 qty를 증가시켜준다.



  const handleCheckboxChange = (event, list) => {
    console.log("XXXXXXXXXXXXXXXXXX-------XXXXXXXXXXXXXXXXXXXX")
    console.log({ list })
    const checked = event.target.checked;

    if (checked) {
      console.log("Checked")
      setExamItems(
        examItems.map((x) =>
          x.id === list.id ? { ...list, checked: checked } : x
        )
      );



      /// 추가하기
      if (selectedType === 1) {

        //const exist = examItems.find((x) => x.id === list.id);
        //exist.checked = true;
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
        console.log(list.checked)
        if (list.checked) {
          console.log("Exist");
          //list.checked = true;
        } else {
          list.checked = true;
          setExamItems01([...examItems01, list]);


          const exist = typeItems.find((x) => x.id === selectedType);
          if (exist) {
            onAddType1(exist)
            // setTypeItems(
            //   typeItems.map((x) =>
            //     x.id === selectedType ? { ...exist, qty: exist.qty + 1 } : x
            //   )
            // );
          }

        }
      } else if (selectedType === 2) {
        // const exist = examItems02.find((x) => x.id === list.id);
        if (list.checked) {
          console.log("Exist");
        } else {
          list.checked = true;
          setExamItems02([...examItems02, list]);
        }
      } else if (selectedType === 3) {
        // const exist = examItems03.find((x) => x.id === list.id);
        if (list.checked) {
          console.log("Exist");
        } else {
          list.checked = true;
          setExamItems03([...examItems03, list]);
        }
      } else if (selectedType === 4) {
        const exist = examItems01.find((x) => x.id === list.id);
        if (exist) {
          console.log("Exist");
        } else {
          setExamItems01([...examItems01, list]);
        }
      } else if (selectedType === 5) {
        const exist = examItems01.find((x) => x.id === list.id);
        if (exist) {
          console.log("Exist");
        } else {
          setExamItems01([...examItems01, list]);
        }
      } else if (selectedType === 6) {
        const exist = examItems01.find((x) => x.id === list.id);
        if (exist) {
          console.log("Exist");
        } else {
          setExamItems01([...examItems01, list]);
        }
      }
      /// E 추가하기





    } else {
      // setCheckedLists(examItems01.filter((el) => el !== list));
      console.log("Unchecked");
      setExamItems(
        examItems.map((x) =>
          x.id === list.id ? { ...list, checked: checked } : x
        )
      );

      /// 삭제하기 -> checked = false
      // const exist = typeItems.find((x) => x.id === selectedType);
      // onRemoveType1(exist)

      const exist1 = examItems01.find((x) => x.id === list.id);
      if (exist1) {
        setExamItems01(
          examItems01.map((x) =>
            x.id === list.id ? { ...list, checked: checked } : x
          )
        );

        onRemoveType1(exist1, 1)
        console.log("Please help me!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(exist1)
      }
      const exist2 = examItems02.find((x) => x.id === list.id);
      if (exist2) {
        setExamItems02(
          examItems02.map((x) =>
            x.id === list.id ? { ...list, checked: checked } : x
          )
        );

        onRemoveType1(exist2, 2)
        console.log("Please help me!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(exist2)
      }
      const exist3 = examItems03.find((x) => x.id === list.id);
      if (exist3) {
        setExamItems03(
          examItems03.map((x) =>
            x.id === list.id ? { ...list, checked: checked } : x
          )
        );

        onRemoveType1(exist3, 3)
        console.log("Please help me!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(exist3)
      }

    }

  }


  const onDelete = (list, event) => {
    console.log("XXXXX-------XXXXX")
    console.log({ event, list })
    console.log("Unchecked");

    setExamItems(
      examItems.map((x) =>
        x.id === list.id ? { ...list, checked: false } : x
      )
    );


    const exist1 = examItems01.find((x) => x.id === list.id);
    if (exist1) {
      setExamItems01(
        examItems01.map((x) =>
          x.id === list.id ? { ...list, checked: false } : x
        )
      );

      onRemoveType1(exist1, 1)
      console.log("Please help me!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(exist1)
    }
    const exist2 = examItems02.find((x) => x.id === list.id);
    if (exist2) {
      setExamItems02(
        examItems02.map((x) =>
          x.id === list.id ? { ...list, checked: false } : x
        )
      );

      onRemoveType1(exist2, 2)
      console.log("Please help me!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(exist2)
    }
    const exist3 = examItems03.find((x) => x.id === list.id);
    if (exist3) {
      setExamItems03(
        examItems03.map((x) =>
          x.id === list.id ? { ...list, checked: false } : x
        )
      );

      onRemoveType1(exist3, 3)
      console.log("Please help me!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(exist3)
    }

  }



  const onAddStep04 = () => {

    examItems.forEach((element, idx) => {
      console.log({ idx })
      if (element.checked) {
        console.log("Add Checked")

        const exist = examItems01.find((x) => x.id === element.id);
        if (exist) {
          console.log("Exist");
        } else {
          setExamItems01([...examItems01, element]);

          ;
          // examItems01.concat(element)
        }
        // setExamItems01(examItems01.concat(element));
        // setExamItems01(
        //   examItems01.map((x) =>
        //     x.id === element.id ?  element  : x
        //   )
        // );

      } else {
        console.log("Unchecked");



      }

    });
    // examItems.map((examItem) => {
    //   if (examItem.checked) {
    //     console.log("Add Checked")

    //     setExamItems01([...examItems01, examItem]);



    //   } else {
    //     console.log("Unchecked");



    //   }
    // });


    // selectedType
    // selectedIds.map((selectedId) => {
    //   const exist = examItems.find((examItem) => examItem.id === selectedId);
    //   if (exist) {
    //     setExamItems01(
    //       examItems01.map((examItem01) =>
    //         examItem01.id === selectedId.id ? { ...exist, selected: 1 } : examItem01
    //       )
    //     );
    //   } else {
    //     setExamItems01([...examItems01, { ...exist, qty: 1 }]);
    //   }
    // });

    // selectedIds.map((x) => {
    //   if(selectedType === 1){
    //     console.log("Step04 Add" + x.id);
    //     setExamItems01([...examItems01, x])
    //   }
    // })


  };









  const onChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.setState({ languages: [...this.state.languages, event.target.value] });
    }
  }




  const onType = (param, e) => {


    if (param.id === 1) {
      setSelExamItem([...selExamItem, examItems01]);
      setSelectedType(param.id);
    } else if (param.id === 2) {
      setSelectedType(param.id);
      setSelExamItem([...selExamItem, examItems02]);
    } else if (param.id === 3) {
      setSelectedType(param.id);
      setSelExamItem([...selExamItem, examItems03]);
    }
    //  else if (param.id === 4) {
    //   setSelectedType(param.id);
    //   setSelExamItem([...selExamItem, examItems04]);

    // } else if (param.id === 5) {
    //   setSelectedType(param.id);
    //  setSelExamItem([...selExamItem, examItems05]);

    // } else if (param.id === 6) {
    //   setSelectedType(param.id);
    //   setSelExamItem([...selExamItem, examItems06]);
    // }
    console.log("Prev ++++++++++++ %d %d", param.id, selectedType);

  }















  return (
    <div className="step04">






      <Top nowStep={nowStep} />
      <div style={{ height: 20 }}></div>
      <div className="main-panel4">

        <div className="flex-two">
          {/* 전체단어 출력 레이어 ------------------------------------------------------------ */}
          <div className="flex-two-cell1">

            <div className="total-word1">

              <div className="total-con1">

                <div className="total-con-cell0">


                </div>
                <div className="total-con-cell1">
                  영어단어
                </div>
                <div className="total-con-cell2">
                  한글 뜻
                </div>
                <div className="total-con-cell3">
                  단어유형
                </div>
                <div className="total-con-cell4">
                  타입
                </div>
              </div>

            </div>



            <div className="flex-two-cell1-con">





              <div className="total-word">
                {examItems.length === 0 && <div>Cart is empty</div>}
                {examItems.map((examItem, index) => (
                  <div className="total-con">

                    <div className="total-con-cell0">
                      <label key={examItem.id}>
                        <input
                          type="checkbox"
                          value={examItem.id}
                          checked={examItem.checked}
                          //checked={selectedIds.includes(examItem.id)}
                          onChange={(event) => { handleCheckboxChange(event, examItem) }}
                        />
                      </label>
                    </div>
                    <div className="total-con-cell1">
                      {examItem.engword}
                    </div>
                    <div className="total-con-cell2">
                      {examItem.korword}
                    </div>
                    <div className="total-con-cell3">
                      {examItem.name}
                    </div>
                    <div className="total-con-cell4">
                      {examItem.code}
                    </div>
                  </div>
                ))}
              </div>









            </div>
          </div>




















































          {/* 유형별 선택된 문제 레이어 ------------------------------------------------------------ */}
          <div className="flex-two-cell2">
            <div className="step01-row02">
              출제할 문제의 단어를 편집할 수 있는 화면입니다.<br />
              전체 단어에서 문제 유형 버튼을 이용하여 단어를 추가하거나 출제 단어에서 단어를 삭제하여 시험지에 출제 할 단어를 편집할 수 있습니다.
            </div>
            <div className="step04-container">






              <div className="step04-left">
                <div className="total-count">
                  {totalCount}<div className="total-count-text"> 문제 </div> / {examItems.length} <div className="total-count-text">전체</div>
                </div>
                <div className="mydict">
                  {typeItems.length === 0 && <div>Cart is empty</div>}
                  {typeItems.map((typeItem, index) => (
                    <div className="mydict-row">
                      <label onClick={(e) => onType(typeItem, e)}>
                        <input type="radio" name="radio" defaultChecked={index === 0} />
                        <span>
                          <div className="radio-con">
                            <div className="radio-con-cell1"><div className="radio-con-box">{typeItem.code}</div></div>
                            <div className="radio-con-cell2">{typeItem.name}</div>
                            <div className="radio-con-cell3">{typeItem.qty}</div>
                          </div>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>


              <div className="step04-right">
                <div className="container-selected">






                  <div className="total-word1">
                    <div className="total-con1">
                      <div className="total-con-cell0">
                      </div>
                      <div className="total-con-cell1">                      영어단어                    </div>
                      <div className="total-con-cell2">                      한글 뜻                    </div>
                      <div className="total-con-cell3">                                          </div>
                      <div className="total-con-cell4">                      삭제                    </div>
                    </div>
                  </div>






                  <div className="total-word2">

                    {selectedType === 1 &&
                      examItems01.map((examItem) => (
                        examItem.checked === true ?
                          <div className="total-con2">
                            <div className="total-con1-cell1">{examItem.engword}</div>
                            <div className="total-con1-cell2">{examItem.korword}</div>
                            <div className="total-con1-cell3"><div className="del-con"><div className="row-cen"></div></div></div>
                            <div className="total-con1-cell4"><div className="del-con"><div className='del' onClick={(e) => onDelete(examItem, e)}>
                            </div></div></div>
                          </div>
                          : <div></div>

                      ))
                    }

                    {selectedType === 2 &&
                      examItems02.map((examItem) => (
                        examItem.checked === true ?
                          <div className="total-con2">
                            {/* <th scope="row">Haircut</th> */}
                            <div className="total-con1-cell1">{examItem.engword}</div>
                            <div className="total-con1-cell2">{examItem.korword}</div>
                            <div className="total-con1-cell3"><div className="del-con"><div className="row-cen"></div></div></div>
                            <div className="total-con1-cell4"><div className="del-con"><div className='del' onClick={(e) => onDelete(examItem, e)}>
                            </div></div></div>
                          </div>
                          : <div></div>
                      ))
                    }

                    {selectedType === 3 &&
                      examItems03.map((examItem) => (
                        examItem.checked === true ?
                          <div className="total-con2">
                            {/* <th scope="row">Haircut</th> */}
                            <div className="total-con1-cell1">{examItem.engword}</div>
                            <div className="total-con1-cell2">{examItem.korword}</div>
                            <div className="total-con1-cell3"><div className="del-con"><div className="row-cen"></div></div></div>
                            <div className="total-con1-cell4"><div className="del-con"><div className='del' onClick={(e) => onDelete(examItem, e)}>
                            </div></div></div>
                          </div>
                          : <div></div>
                      ))
                    }

                    {selectedType === 4 &&
                      examItems04.map((examItem) => (
                        <div className="total-con2">
                          {/* <th scope="row">Haircut</th> */}
                          <div className="total-con1-cell1">{examItem.engword}</div>
                          <div className="total-con1-cell2">{examItem.korword}</div>
                          <div className="total-con1-cell3"><div className="del-con"><div className="row-cen"></div></div></div>
                          <div className="total-con1-cell4"><div className="del-con"><div className='del' onClick={(e) => onDelete(examItem, e)}>
                          </div></div></div>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </div>
            </div>
          </div> {/* flex-two-cell2 */}
        </div> {/* flex-two */}












        {/* 
      <br />



      <br />
      <div className='prevnext' onClick={() => onAddStep04()}>
        추가
      </div>
      <br />


      <br />
      <div className='prevnext' onClick={() => onXxx()}>
        테스트 버튼
      </div>
      <br />
      <br />*/}
        {/* <div className='prevnext' onClick={() => onZzz()}>
        초기화      </div>
      <br /> */}
        {/*
      <div className="step01-row03">
        출제단어 | {totalCount}
      </div>

      <br /> */}




        <br />

      </div>
      <div className='prevnextrow'>
        <div className='prevnext' onClick={() => onPrev()}>
          이전으로
        </div>
        <div className='prevnext' onClick={() => onNext5()}>
          다음으로
        </div>
      </div>



    </div>
  );
};
