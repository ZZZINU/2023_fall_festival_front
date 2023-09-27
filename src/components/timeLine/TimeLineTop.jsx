import React from "react";
import * as S from "./style"
import topLogo from '../../assets/images/nav_logo.png';

export const TimeLineTop = ({ festivalDate }) => {
  return (
    <S.TimeLineTopLabel>
      <S.LogoImg src={topLogo} alt="logo" />
      타임테이블
      <div>
        <div>10일</div>
        <div>11일</div>
      </div>
    </S.TimeLineTopLabel>
  );
};