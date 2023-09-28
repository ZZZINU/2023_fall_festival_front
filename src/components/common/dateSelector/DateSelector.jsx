import React from "react";
import * as S from "./style";

function DateSelector(props) {
  return (
    <>
      <S.DateBoxWrap>
        <S.DateBox
          onClick={() => props.handleDateClick(true)}
          textcolor={props.selectedDate11 ? "#DD7480" : "#ffffff"}
          backgroundcolor={props.selectedDate11 ? "#ffffff" : "#DD7480"}
        >
          <S.DateBoxText>11일</S.DateBoxText>
        </S.DateBox>

        <S.DateBox
          onClick={() => props.handleDateClick(false)}
          textcolor={props.selectedDate11 ? "#ffffff" : "#DD7480"}
          backgroundcolor={props.selectedDate11 ? "#DD7480" : "#ffffff"}
        >
          <S.DateBoxText>12일</S.DateBoxText>
        </S.DateBox>
      </S.DateBoxWrap>
    </>
  );
}

export default DateSelector;
