import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const BoothCard = ({ booth, realtimeList, index }) => {
  const isCurrent = realtimeList.includes(booth);
  const navigate = useNavigate();

  return (
    <S.BoothWhiteBox
      isnow={isCurrent ? "true" : "false"}
      isbooth={booth.isBooth? "120px" : "73px"}
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
          onClick={() => navigate("/booths")}
          isnow={isCurrent ? "true" : "false"}
        >
          부스 찾기
        </S.BoothBtn>
      )}
    </S.BoothWhiteBox>
  );
};
