import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";

export const BoothCard = ({ booth, realtimeList, index, festivalDate }) => {
  const isCurrent = realtimeList.includes(booth);
  const boothShare = festivalDate === 11 ? true : false;

  return (
    <S.BoothWhiteBox
      isnow={isCurrent ? "true" : "false"}
      isbooth={booth.isBooth ? "120px" : "73px"}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <S.BoothCardWrapper>
        <S.BoothImg isnow={isCurrent ? "true" : "false"}>
          {booth.devide == "부스" && (
            <span className="material-symbols-outlined">store</span>
          )}
          {booth.devide == "푸드" && (
            <span className="material-symbols-outlined">fastfood</span>
          )}
        </S.BoothImg>
        <S.BoothTxt>
          <S.BoothTitle>{booth.title}</S.BoothTitle>
          <S.BoothPlace>
            <img src="/timetable/booth_location.png" alt="location" />
            {booth.place}
          </S.BoothPlace>
        </S.BoothTxt>
      </S.BoothCardWrapper>
      {booth.isBooth && (
        <S.BoothBtn
          to="/booths"
          state={festivalDate}
          isnow={isCurrent ? "true" : "false"}
        >
          부스 찾기
        </S.BoothBtn>
      )}
    </S.BoothWhiteBox>
  );
};
