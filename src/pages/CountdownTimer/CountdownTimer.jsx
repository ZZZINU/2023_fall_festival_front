import React, { useEffect, useState } from "react";
import * as S from "./style";
import FlipCountdown from "@rumess/react-flip-countdown";
import Main from "../main/Main";
import Header from "../../components/layouts/header/Header";

const CountdownTimer = () => {
  const [isTimeUp, setIsTimeUp] = useState(false); // timeup 여부를 추적하는 상태 변수

  // 시간이 종료될 때 호출되는 콜백 함수
  const handleTimeUp = () => {
    // console.log("Time's up ⏳");
    setIsTimeUp(true); // timeup 상태를 true로 업데이트
  };

  useEffect(() => {
    // 특정 디데이 날짜와 현재 시간을 비교하여 디데이가 되면 자동으로 timeup
    const targetDate = new Date("2023-10-10 18:00:00").getTime();
    const currentDate = new Date().getTime();

    if (currentDate >= targetDate) {
      handleTimeUp();
    }
  }, []);

  // timeup이 아직 발생하지 않았을 때
  if (!isTimeUp) {
    return (
      <S.Wrapper>
        <S.Container>
          <S.SegmentTitle>
            축제 사이트 <br />
            OPEN
          </S.SegmentTitle>

          <FlipCountdown
            hideYear
            hideMonth
            hideDay
            size="medium"
            theme="light"
            endAt={"2023-10-10 18:00:00"} // Date/Time
            onTimeUp={handleTimeUp}
          />
        </S.Container>
      </S.Wrapper>
    );
  }

  // timeup이 발생한 경우 Main 컴포넌트를 렌더링
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default CountdownTimer;
