import "./components.css"

export default function Top(props) {
  const { nowStep } = props;

  return (
    <div className="Top">
      <div className="step01-row01">
        <div className={nowStep === 1 ? "cell02" : "cell01"}>          교재선택        </div>
        <div className={nowStep === 2 ? "cell02" : "cell01"}>          범위선택        </div>
        <div className={nowStep === 3 ? "cell02" : "cell01"}>          유형선택        </div>
        <div className={nowStep === 4 ? "cell02" : "cell01"}>          편집/검수        </div>
        <div className={nowStep === 5 ? "cell02" : "cell01"}>          레이아웃 설정        </div>
      </div>

      {nowStep === 1 ? 
        <div className="step01-row02">
          시험지를 제작하는데 이용할 교재를 선택하는 화면입니다.<br />
          자주 쓰는 교재로 추가하면 항상 제일 상단에 노출되어 빠르게 선택을 할 수 있습니다.
        </div>
        : <div></div>
      }
       {nowStep === 2 ? 
        <div className="step01-row02">
선택한 교재에서 시험범위를 설정하는 화면입니다.<br />
단원별 선택에서 시험에 출제할 단원을 선택하거나 구간별 선택에서 단원 범위를 지정할 수 있습니다.
        </div>
        : <div></div>
      }
       {nowStep === 3 ? 
        <div className="step01-row02">
          시험지에 출제할 문제 수를 입력하여 문제를 생성하고 유형별 문제 수를 설정하는 화면입니다.

        </div>
        : <div></div>
      }
      {nowStep === 4 ? <div></div> : <div></div>    }
      {nowStep === 5 ? 
        <div className="step01-row02">
          시험지의 정보 및 레이아웃 설정 후 저장 프린트하는 화면입니다.<br />
          학원 로고 사용, 시험지 제목 설정 등을 해보세요.
        </div>
        : <div></div>
      }
    </div>

  );
};
