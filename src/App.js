
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";





function App() {
  // 선택된 값
  // selBook,                    selLessons,      selTypes,      selExams,
  //
  // 선택할 데이터 원본
  // bookItems,    favItems      lessonItems,     typeItems,     examItems,  
  // book.json,    fav.json      lesson.json,     type.json,     exam.json
  //
  // onAddBook,    onAddFavs     onAddLessons,    onAddTypes,    onAddExams,
  // onRemoveBook, onRemoveFavs, onRemoveLessons, onRemoveTypes, onRemoveExams,
  // Step01,                     Step02,          Stemp03,       Step04,        


  const [selBook, setSelBook] = useState(
    {
      id: 0,
      name: "",
      price: 0,
      image: ""
    });

  const [selLessons, setSelLessons] = useState([]);
  const [selTypes, setSelTypes] = useState([]); // Step03에서 선택, 타입 중에서 선택한 타입들 필요없을 수도 타입변 문제 배열로 제어할 수도.....
  const [selExams, setSelExams] = useState([]);

  let selExamx = [];

  const [nowType, setNowType] = useState(1);   // Step04에서 사용, Step03에서 선택되어진 타입 중에서 현재 작업중인 타입
  const [nowStep, setNowStep] = useState(1);

  const [totalCount, setTotalCount] = useState(0); // 출제 문항수
  const [randomNos, setRandomNos] = useState([]); // 출제 문항수
  const [maxNo, setMaxNo] = useState(1); // 출제 문항수

  const [selectedType, setSelectedType] = useState(0);  // Step04에서 화면에 출력되는 선택된 타입
  const [isView, setIsView] = useState(true);
  const [isPrint, setIsPrint] = useState(false);

  // API DB에서 Data 가져오기
  // const { books } = dataBook;
  // const { favs } = dataFav;
  // const { lessons } = dataLesson;
  // const { types } = dataType;
  // const { exams } = dataExam;
  const [bookItems, setBookItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [lessonItems, setLessonItems] = useState([]);
  const [typeItems, setTypeItems] = useState([]);
  const [examItems, setExamItems] = useState([]);   // 전체문제

  const [examItems01, setExamItems01] = useState([]);
  const [examItems02, setExamItems02] = useState([]);
  const [examItems03, setExamItems03] = useState([]);
  const [examItems04, setExamItems04] = useState([]);
  const [examItems05, setExamItems05] = useState([]);
  const [examItems06, setExamItems06] = useState([]);

  useEffect(() => {
    fetch(
      "/data/book.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setBookItems(json.books);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/fav.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setFavItems(json.favs);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/lesson.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setLessonItems(json.lessons);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/type.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setTypeItems(json.types);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam01.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems01(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam02.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems02(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam03.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems03(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam04.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems04(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam05.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems05(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "/data/exam06.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setExamItems06(json.exams);
        //setFavItems([...favItems, { ...fav, qty: 1 }]);
        setLoading(false);
      });
  }, []);

  //const [selItem, setSelItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //---------------------------------------------------------------------------------------------


  const onAddBook = (sel) => {
    setSelBook(sel);
  };

  const onRemoveBook = (sel) => {
    // const exist = selItems.find((x) => x.id === sel.id);
    // if (exist) {
    //   setSelItems(
    //     selItems.map((x) =>
    //       x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
    //     )
    //   );
    // } else {
    //   setSelItems([...selItems, { ...sel, qty: 1 }]);
    // }
  };


  // 
  const onAddFav = (fav) => {
    const exist = favItems.find((x) => x.id === fav.id);
    if (exist) {
      setFavItems(
        favItems.map((x) =>
          x.id === fav.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setFavItems([...favItems, { ...fav, qty: 1 }]);
    }
  };
  const onRemoveFav = (fav) => {
    const exist = favItems.find((x) => x.id === fav.id);
    console.log(fav)
    if (exist) {

      console.log("ssss")
      setFavItems(favItems.filter((x) => x.id !== fav.id));

    }
  };

  const onAddLesson = (sel) => {
    const exist = selLessons.find((x) => x.id === sel.id);
    if (exist) {
      setSelLessons(
        selLessons.map((x) =>
          x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setSelLessons([...selLessons, { ...sel, qty: 1 }]);
    }
  };
  const onRemoveLesson = (sel) => {
    const exist = lessonItems.find((x) => x.id === sel.id);
    if (exist) {
      setSelLessons(
        selLessons.map((x) =>
          x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setSelLessons([...selLessons, { ...sel, qty: 1 }]);
    }
  };
  const onAddType = (sel) => {
    const exist = typeItems.find((x) => x.id === sel.id);
    if (exist) {

      if (sel.id === 1 && sel.qty < 5) {
        setTypeItems(
          typeItems.map((x) =>
            x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        setTotalCount(totalCount + 1);
        console.log("sel.id : " + sel.id + " exist.qty : " + exist.qty);
      }

      else if (sel.id === 2 && sel.qty < 3) {
        setTypeItems(
          typeItems.map((x) =>
            x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        setTotalCount(totalCount + 1);
        console.log("sel.id : " + sel.id + " exist.qty : " + exist.qty);
      }
      else if (sel.id === 3 && sel.qty < 3) {
        setTypeItems(
          typeItems.map((x) =>
            x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        setTotalCount(totalCount + 1);
        console.log("sel.id : " + sel.id + " exist.qty : " + exist.qty);
      }
      else {
        console.log("none");
      }





    }
  };
  const onRemoveType = (sel) => {
    const exist = typeItems.find((x) => x.id === sel.id);
    if (exist.qty > 0) {
      console.log("else %d", exist.qty)
      setTypeItems(
        typeItems.map((x) =>
          x.id === sel.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setTotalCount(totalCount - 1);
    }
  };
  const onAddExam = (sel) => {
    const exist = selExams.find((x) => x.id === sel.id);
    if (exist) {
      setSelExams(
        selExams.map((x) =>
          x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setSelExams([...selExams, { ...sel, qty: 1 }]);
    }
  };
  const onRemoveExam = (sel) => {
    const exist = lessonItems.find((x) => x.id === sel.id);
    if (exist) {
      setSelExams(
        selExams.map((x) =>
          x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setSelExams([...selExams, { ...sel, qty: 1 }]);
    }
  };


  const onAddType1 = (sel) => {
    const exist = typeItems.find((x) => x.id === sel.id);
    const xyz = examItems.length - totalCount;
    console.log("XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoX %d %d", xyz, sel.id)
    console.log(exist)
    if (exist) {

      if (sel.id === 1 && xyz > 0) {
        setTypeItems(
          typeItems.map((x) =>
            x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        setTotalCount(totalCount + 1);
        console.log("sel.id : " + sel.id + " exist.qty : " + exist.qty);
      }

      else if (sel.id === 2 && sel.qty < xyz) {
        setTypeItems(
          typeItems.map((x) =>
            x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        setTotalCount(totalCount + 1);
        console.log("sel.id : " + sel.id + " exist.qty : " + exist.qty);
      }
      else if (sel.id === 3 && sel.qty < xyz) {
        setTypeItems(
          typeItems.map((x) =>
            x.id === sel.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
        setTotalCount(totalCount + 1);
        console.log("sel.id : " + sel.id + " exist.qty : " + exist.qty);
      }
      else {
        console.log("none");
      }





    }
  };
  const onRemoveType1 = (sel, type) => {
    const exist = typeItems.find((x) => x.id === type);
    const xyz = examItems.length - totalCount;
    console.log("XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoX %d %d", xyz, sel.id)
    console.log(exist)
    if (type === 1 && exist.qty > 0) {
      console.log("else %d", exist.qty)
      setTypeItems(
        typeItems.map((x) =>
          x.id === type ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setTotalCount(totalCount - 1);
    }
    else if (type === 2 && exist.qty > 0) {
      console.log("else %d", exist.qty)
      setTypeItems(
        typeItems.map((x) =>
          x.id === type ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setTotalCount(totalCount - 1);
    }
    else if (type === 3 && exist.qty > 0) {
      console.log("else %d", exist.qty)
      setTypeItems(
        typeItems.map((x) =>
          x.id === type ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setTotalCount(totalCount - 1);
    }
  };



  const onXxx = () => {

    typeItems.forEach((valx, idxx) => {
      var exist = false;
      var ran = 0;
      var sucx = 0;

      if (valx.qty === 0) {
        console.log("Empty. %d", valx.qty);
      } else {
        console.log("xxxx %d %d ", idxx, valx.qty);
        while (sucx < valx.qty) {
          ran = (Math.floor(Math.random() * 6) + 1);
          exist = selExams.find((selExam) => selExam.id === ran);
          if (exist) {
            console.log("Exist");
          } else {
            setSelExams(
              selExams.map((x) =>
                x.id === ran ? { ...exist, id: ran } : x
              )
            );

            sucx++;
            console.log("ran : " + ran);
          }
        }
      }


    })

    console.log("length : %d", selExams.length);

    selExams.map((x) => {
      console.log("selExam : %d", x.id);

    }

    )







    // // selExams 돌면서   examItems.find 해서 복사.....
    // selExams.map((x) => {
    //   const result = examItems.find( function(examItem){ return examItem.id === x})
    //   console.log("hooooo" + x, result); 
    // })

  };






  const onNext = () => {
    if (nowStep < 5) {
      if (nowStep === 1) {
        if (selBook.name.length === 0) { alert('교재를 선택하세요') }
        else {
          setNowStep(nowStep + 1);
          console.log("Next %d %d", nowStep, selBook.length);
        }
      }
      if (nowStep === 2) {
        if (selLessons.length === 0) { alert('단원을 선택하세요') }
        else {
          setNowStep(nowStep + 1);
          console.log("Next %d %d", nowStep, selBook.length);
        }
      }

    }
  };
  const onNext5 = () => {
    if (nowStep < 5) {
      setNowStep(nowStep + 1);
      setIsView(false)
      console.log("Next %d", nowStep);
    }
  };
  const onNext1 = () => {

    if (nowStep < 5) {
      if (nowStep === 3) {
        console.log("totalCount :  %d", totalCount);
        if (totalCount === 0) { alert('유형별 출제할 문제수를 선택하세요') }
        else {
          setNowStep(nowStep + 1);
          selExams.length = 0;

          selExamItem();

          setSelectedType(1);
          console.log("Next %d %d", nowStep, selBook.length);
        }
      }


      // typeItems.map((x) => {
      //   if (x.qty > 0) {
      //     console.log("id: %d,  qty: %d", x.id, x.qty);

      //     // 난수발생
      //     var suc = 0;
      //     while (suc < x.qty) {
      //       const ran = (Math.floor(Math.random() * 6) + 1);
      //       // console.log("id: %d,  ran: %d", x.id, ran);
      //       const exist = selExamx.find((x) => x.ran === ran);
      //       if (exist) {
      //         console.log("exist  id: %d,  ran: %d", x.id, ran);
      //       }
      //       else {
      //         const ranx = {
      //           id: ran
      //         };
      //         console.log("-------%d", ranx.id)
      //         selExamx.push({ id: x.id, ran: ran });




      //         console.log("new    id: %d,  ran: %d", x.id, ran);
      //         suc++;
      //       }
      //     }
      //     console.log({ selExamx });

      //   }

      // })
      // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
      // 문제 분배










      // examItems.map((examItem) => {
      //   const exist = examItems.find((x) => x.id === selExamx.ran);
      //   if (exist) {
      //     console.log(examItem.id)
      //   }
      // })








      // try {
      //   selExamx.map((val) => {
      //     console.log("selExamx :  %d %d",   val.id, val.ran);

      //     const found = examItems.find((element) => element.id === val.ran);
      //     console.log(found)
      //     setExamItems01([...examItems01, found]);





      //     // console.log("examItems : %d %d %d", val.id, val.ran, idx);

      //     // const exis = examItems.find((x) => x.id === val.ran);
      //     // console.log({ exis })

      //     // if (exis) {
      //     //   if (val.id === 1) {
      //     //     console.log("^^^^^^^^^^^^^^^^^  {exis}" )
      //     //     setExamItems01([...examItems01,         
      //     //       {"id": exis.id,
      //     //       "pid" : exis.pid,
      //     //       "text" : exis.text,
      //     //       "answer" : exis.answer}]);
      //     //     console.log({ examItems01 })
      //     //   }
      //     // }



      //   });

      // } catch (error) {
      //   console.log("Error......................................");
      // }
      // console.log({ examItems01 })
    }



    const add01 = (exist) => {
      setExamItems01((examItems01) => {
        return [...examItems01, exist];
      });
    };


    // if (nowStep < 5) {
    //   setNowStep(nowStep + 1);
    //   // console.log("-----------------------------------Next %d", nowStep);

    //   var exist = false;
    //   var ran = 0;
    //   var count = 0;
    //   // 유형별로 하나씩
    //   typeItems.forEach((valx, idxx) => {
    //     console.log({ idxx, valx });
    //     var xxxx = valx.qty;


    //     var sucx = 0;
    //     while (sucx < valx.qty) {
    //       ran = (Math.floor(Math.random() * valx.qty) + 1);
    //       exist = selExams.find((selExam) => selExam === ran);
    //       if (!exist) {
    //         setSelExams([...selExams, ran]);
    //         sucx++;
    //       }
    //     }





    //     if (valx.qty === 0) {
    //       console.log("Start : [%d] %d ----------------------------", idxx, xxxx);
    //     } else {
    //       count = 0;
    //       // 전체문제에서 추출
    //       try {
    //         examItems.forEach((val, idx) => {
    //           // console.log( "examItems : %d ", idx );
    //           console.log({ val });



    //           if (!exist) {
    //             if (idxx === 0) {

    //               setExamItems01([...examItems01, val]);
    //               setSelExams([...selExams, val]);
    //               console.log("000000000000000 %d ", ran);
    //               console.log({ val });
    //             } else if (idxx === 1) {
    //               setExamItems02([...examItems02, val]);
    //               setSelExams([...selExams, val]);
    //               console.log("111111111111111 %d ", ran);
    //               console.log({ val });
    //             } else if (idxx === 2) {
    //               setExamItems03([...examItems03, val]);
    //               setSelExams([...selExams, val]);
    //             } else if (idxx === 3) {
    //               setExamItems04(
    //                 examItems04.map((x) =>
    //                   x.id === val.id ? { ...exist } : x
    //                 )
    //               );
    //             } else if (idxx === 4) {
    //               setExamItems05(
    //                 examItems05.map((x) =>
    //                   x.id === val.id ? { ...exist } : x
    //                 )
    //               );
    //             } else if (idxx === 5) {
    //               setExamItems06(
    //                 examItems06.map((x) =>
    //                   x.id === val.id ? { ...exist } : x
    //                 )
    //               );
    //             }
    //             count = count + 1;
    //             // console.log("Happy : [%d] ExamItems[%d] %c", idxx, idx, val)
    //             console.log("count: %d", count);
    //             if (count === valx.qty) throw new Error();
    //           }
    //         });
    //       } catch (error) {
    //         console.log("Error......................................");
    //       }
    //     }
    //   });
    // }
  };

  const onPrev = () => {
    if (nowStep > 1) {
      setIsView(true)
      setNowStep(nowStep - 1);
      console.log("Prev %d", nowStep);
    }
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      if (exist.qty === 1) {
        console.log("else %d", exist.qty)
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        console.log("else %d", exist.qty)
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    }
  };



  const selExamItem = () => {

    // 랜덤 추출된 숫자로 배열에서 찾이서 새배열로 만들기...............................................
    // .............................................................................................
    // examItems....
    // const genres = [{
    //   id: 1,
    //   name: "Jazz Music"
    // }, {
    //   id: 2,
    //   name: "Something"
    // }];

    // const genreList = [1, 10, 100];

    // const matchGenres = (genres, genreList) => genres
    //   .filter(genre => genreList.includes(genre.id))
    //   .map(genre => genre.name);

    // const matchedGenres = matchGenres(genres, genreList);

    // console.log(matchedGenres);
    // .............................................................................................




    const aa1 = typeItems[0].qty;
    const aa2 = typeItems[1].qty;
    const aa3 = typeItems[2].qty;
    console.log("...................................................");
    console.log(aa1);

    var i = 0, j = 0, k = 0;
    const tempList = [...examItems];
    const tempList1 = [...examItems01];
    const tempList2 = [...examItems02];
    const tempList3 = [...examItems03];

    examItems01.map((examItem01) => {
      if (i < aa1) {
        const exist = tempList.find((examItem) => examItem.id === examItem01.id);
        const exist1 = tempList1.find((x) => x.id === examItem01.id);
        exist.checked = true;
        exist1.checked = true;
        setExamItems(tempList)
        setExamItems01(tempList1);
        i++;
      }
    })
    examItems02.map((examItem02) => {
      if (j < aa2) {
        const exist = tempList.find((examItem) => examItem.id === examItem02.id);
        const exist1 = tempList2.find((x) => x.id === examItem02.id);
        exist.checked = true;
        exist1.checked = true;
        setExamItems(tempList)
        setExamItems02(tempList2);
        j++;
      }
    })
    examItems03.map((examItem03) => {
      if (k < aa3) {
        const exist = tempList.find((examItem) => examItem.id === examItem03.id);
        const exist1 = tempList3.find((x) => x.id === examItem03.id);
        exist.checked = true;
        exist1.checked = true;
        setExamItems(tempList)
        setExamItems03(tempList3);
        k++;
      }
    })
    console.log(examItems)

  }


  const handlePrint = () => {
    console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVV")
    console.log(isPrint)
    // setIsPrint(true)
    handlePrintx()
    // setIsPrint(false)
  };


  const componentRef = useRef();
  const handlePrintx = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "파일 다운로드 시 저장되는 이름 작성",
    onAfterPrint: () => alert("파일 다운로드 후 알림창 생성 가능")
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main cartItems={cartItems}
            bookItems={bookItems} favItems={favItems} lessonItems={lessonItems} typeItems={typeItems} examItems={examItems}
            examItems01={examItems01} examItems02={examItems02} examItems03={examItems03} examItems04={examItems04} examItems05={examItems05} examItems06={examItems06}
            selBook={selBook} selLessons={selLessons} selTypes={selTypes} selExams={selExams}
            totalCount={totalCount} nowStep={nowStep} maxNo={maxNo} selectedType={selectedType} setSelectedType={setSelectedType}
            setExamItems={setExamItems} setExamItems01={setExamItems01} setExamItems02={setExamItems02} setExamItems03={setExamItems03} setTypeItems={setTypeItems}
            onAdd={onAdd} onRemove={onRemove} onXxx={onXxx}
            onAddBook={onAddBook} onRemoveBook={onRemoveBook} onAddFav={onAddFav} onRemoveFav={onRemoveFav}
            onAddLesson={onAddLesson} onRemoveLesson={onRemoveLesson}
            onAddType={onAddType} onRemoveType={onRemoveType} onAddType1={onAddType1} onRemoveType1={onRemoveType1}
            onAddExam={onAddExam} onRemoveExam={onRemoveExam}
            onPrev={onPrev} onNext={onNext} onNext1={onNext1} onNext5={onNext5} isView={isView} isPrint={isPrint}
            componentRef={componentRef} handlePrint={handlePrint}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;